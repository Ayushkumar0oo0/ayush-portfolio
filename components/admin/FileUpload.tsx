"use client";

declare global {
  interface Window {
    cloudinary: {
      openUploadWidget: (
        options: Record<string, unknown>,
        callback: (
          error: Error | null,
          result: {
            event?: string;
            info?: {
              secure_url: string;
            };
          }
        ) => void
      ) => void;
    };
  }
}

interface FileUploadProps {
  value: string;
  onChange: (url: string) => void;
  resourceType?: "image" | "raw";
  buttonText?: string;
}

export default function FileUpload({
  value,
  onChange,
  resourceType = "image",
  buttonText = "Upload File",
}: FileUploadProps) {
  const handleUpload = () => {
    if (!window.cloudinary) {
      alert("Cloudinary widget not loaded");
      return;
    }

    window.cloudinary.openUploadWidget(
      {
        cloudName:
          process.env
            .NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,

        uploadPreset:
          "portfolio_upload",

        resourceType,

        multiple: false,

        sources: [
          "local",
          "camera",
          "url",
        ],

        clientAllowedFormats:
          resourceType === "image"
            ? [
                "jpg",
                "jpeg",
                "png",
                "webp",
              ]
            : ["pdf"],

        maxFileSize: 5000000,
      },

      (error, result) => {
        if (error) {
          console.error(error);
          return;
        }

        if (
          result &&
          result.event === "success" &&
          result.info
        ) {
          onChange(
            result.info.secure_url
          );
        }
      }
    );
  };

  return (
    <div className="space-y-4">

      {value && (
        <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 break-all text-sm text-zinc-400">
          {value}
        </div>
      )}

      <button
        type="button"
        onClick={handleUpload}
        className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition"
      >
        {buttonText}
      </button>

    </div>
  );
}