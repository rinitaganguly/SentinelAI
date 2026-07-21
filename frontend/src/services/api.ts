const API = "https://sentinelai-uhp5.onrender.com";

export async function getDashboard() {
    const response = await fetch(`${API}/dashboard`);

    if (!response.ok) {
        throw new Error("Failed to fetch dashboard");
    }

    return response.json();
}

export async function startScan() {
    const response = await fetch(`${API}/scan`, {
        method: "POST",
    });

    if (!response.ok) {
        throw new Error("Failed to start scan");
    }

    return response.json();
}

export async function uploadFile(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${API}/upload`, {
        method: "POST",
        body: formData,
    });

    if (!response.ok) {
        throw new Error("Upload failed");
    }

    return response.json();
}

export async function getHistory() {
    const response = await fetch(`${API}/history`);

    if (!response.ok) {
        throw new Error("Failed to fetch history");
    }

    return response.json();
}

export async function getScanById(id: number) {
    const response = await fetch(`${API}/scan/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch scan");
    }

    return response.json();
}

export async function deleteScan(id: number) {
    const response = await fetch(`${API}/history/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error("Failed to delete scan");
    }

    return response.json();
}