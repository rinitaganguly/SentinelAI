import json
import ollama


def calculate_risk(vulnerabilities):
    """
    Calculate overall risk based on the highest vulnerability severity.
    """

    highest = "Low"

    severity_order = {
        "low": 1,
        "medium": 2,
        "high": 3,
        "critical": 4,
    }

    highest_score = 1

    for vuln in vulnerabilities:
        severity = vuln.get("severity", "Low").lower()

        if severity in severity_order:
            if severity_order[severity] > highest_score:
                highest_score = severity_order[severity]
                highest = severity.capitalize()

    return highest


def analyze_code(code: str):
    prompt = f"""
You are an expert Static Application Security Testing (SAST) engine.

Analyze the following source code.

Look for:

- Security vulnerabilities
- Unsafe coding practices
- Missing input validation
- Buffer overflow risks
- Integer overflow risks
- Division by zero
- Command injection
- SQL injection
- Path traversal
- Hardcoded secrets
- Weak cryptography
- Unsafe file handling
- Error handling issues
- Missing authentication
- Missing authorization
- Resource leaks
- Logic flaws

Even if the code is small, identify possible weaknesses and improvements.

Return ONLY valid JSON.

Never use markdown.
Never explain anything.
Never wrap the output in ```.

Return exactly:

{{
    "risk":"Low",
    "vulnerabilities":[
        {{
            "title":"",
            "severity":"Low",
            "description":""
        }}
    ],
    "recommendations":[
        ""
    ]
}}

Source Code:

{code}
"""

    response = ollama.chat(
        model="qwen2.5:7b",
        messages=[
            {
                "role": "user",
                "content": prompt,
            }
        ],
    )

    text = response["message"]["content"]

    text = text.replace("```json", "")
    text = text.replace("```", "")
    text = text.strip()

    start = text.find("{")
    end = text.rfind("}")

    if start != -1 and end != -1:
        text = text[start:end + 1]

    try:
        result = json.loads(text)

        vulnerabilities = result.get("vulnerabilities", [])

        # Override AI risk with calculated risk
        result["risk"] = calculate_risk(vulnerabilities)

        return result

    except Exception:
        return {
            "risk": "Unknown",
            "vulnerabilities": [],
            "recommendations": [],
            "raw_response": text,
        }