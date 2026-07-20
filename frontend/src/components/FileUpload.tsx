import { useState } from "react";
import { Upload, Loader2, FileCode } from "lucide-react";
import { uploadFile } from "../services/api";

interface FileUploadProps {
    onUploadSuccess: (report: any) => void;
    onScanComplete: () => Promise<void>;
}

export default function FileUpload({
    onUploadSuccess,
    onScanComplete,
}: FileUploadProps) {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleUpload() {
        if (!selectedFile) {
            alert("Please select a source code file.");
            return;
        }

        try {
            setLoading(true);

            const result = await uploadFile(selectedFile);

            onUploadSuccess(result);

            await onScanComplete();

            setSelectedFile(null);

            alert("Security analysis completed successfully!");
        } catch (error) {
            console.error(error);
            alert("Failed to analyze the uploaded file.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

            <h2 className="mb-5 text-2xl font-bold text-white">
                Upload Source Code
            </h2>

            <div className="space-y-5">

                <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-zinc-700 bg-zinc-950 p-6 transition hover:border-cyan-500">

                    <FileCode className="text-cyan-400" size={28} />

                    <div className="flex-1">

                        <p className="font-semibold text-white">
                            {selectedFile
                                ? selectedFile.name
                                : "Choose a source code file"}
                        </p>

                        <p className="text-sm text-zinc-500">
                            Supports Python, JavaScript, Java, C++, C#, Go, PHP and more.
                        </p>

                    </div>

                    <input
                        type="file"
                        className="hidden"
                        onChange={(e) => {
                            if (e.target.files?.length) {
                                setSelectedFile(e.target.files[0]);
                            }
                        }}
                    />

                </label>

                <button
                    onClick={handleUpload}
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-4 font-semibold text-black transition hover:bg-cyan-400 disabled:opacity-50"
                >
                    {loading ? (
                        <>
                            <Loader2
                                className="animate-spin"
                                size={20}
                            />
                            Analyzing...
                        </>
                    ) : (
                        <>
                            <Upload size={20} />
                            Analyze Source Code
                        </>
                    )}
                </button>

            </div>

        </div>
    );
}