"use client";

interface Props {
  value: string;
  onChange: (url: string) => void;
}

export default function CloudinaryUpload({
  value,
  onChange,
}: Props) {
  const openWidget = () => {
    // @ts-ignore
    window.cloudinary.openUploadWidget(
      {
        cloudName:
          process.env
            .NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,

        uploadPreset: "portfolio",
        multiple: false,
      },

      (error: any, result: any) => {
        if (
          !error &&
          result.event === "success"
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
        <img
          src={value}
          alt="Project"
          className="w-full h-64 object-cover rounded-xl"
        />
      )}

      <button
        type="button"
        onClick={openWidget}
        className="px-6 py-3 rounded-xl bg-blue-600"
      >
        Upload Image
      </button>

    </div>
  );
}