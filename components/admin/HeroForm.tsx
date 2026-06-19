"use client";

import { useState } from "react";
import FileUpload from "./FileUpload";

interface HeroFormProps {
  action: (formData: FormData) => Promise<any>;

  hero?: {
    name?: string;
    title?: string;
    description?: string;
    imageUrl?: string;
    resumeUrl?: string;
    githubUrl?: string;
    linkedinUrl?: string;
    twitterUrl?: string;
    email?: string;
  };
}

export default function HeroForm({
  action,
  hero,
}: HeroFormProps) {
  const [imageUrl, setImageUrl] = useState(
    hero?.imageUrl || ""
  );

  const [resumeUrl, setResumeUrl] =
    useState(hero?.resumeUrl || "");

  return (
    <form
      action={(formData) => {
        formData.set(
          "imageUrl",
          imageUrl
        );

        formData.set(
          "resumeUrl",
          resumeUrl
        );

        return action(formData);
      }}
      className="space-y-8"
    >
      {/* Live Preview */}

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

        <h2 className="text-2xl font-bold mb-6">
          Hero Preview
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-center">

          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Profile"
              className="w-40 h-40 rounded-3xl object-cover border border-zinc-800"
            />
          ) : (
            <div className="w-40 h-40 rounded-3xl border border-dashed border-zinc-700 flex items-center justify-center text-zinc-500">
              No Image
            </div>
          )}

          <div>

            <h3 className="text-3xl font-black">
              {hero?.name ||
                "Your Name"}
            </h3>

            <p className="text-blue-400 mt-2">
              {hero?.title ||
                "Full Stack Developer"}
            </p>

          </div>

        </div>

      </div>

      {/* Personal Info */}

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

        <h2 className="text-2xl font-bold mb-6">
          Personal Information
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <input
            name="name"
            defaultValue={hero?.name}
            placeholder="Full Name"
            className="p-4 rounded-xl bg-zinc-950 border border-zinc-800"
          />

          <input
            name="title"
            defaultValue={hero?.title}
            placeholder="Professional Title"
            className="p-4 rounded-xl bg-zinc-950 border border-zinc-800"
          />

        </div>

        <textarea
          rows={5}
          name="description"
          defaultValue={
            hero?.description
          }
          placeholder="Hero Description"
          className="w-full mt-6 p-4 rounded-xl bg-zinc-950 border border-zinc-800"
        />

      </div>

      {/* Uploads */}

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

        <h2 className="text-2xl font-bold mb-6">
          Media
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">

          <div>

            <h3 className="font-semibold mb-4">
              Profile Photo
            </h3>

            <FileUpload
              value={imageUrl}
              onChange={setImageUrl}
              buttonText="Upload Profile Image"
            />

          </div>

          <div>

            <h3 className="font-semibold mb-4">
              Resume PDF
            </h3>

            <FileUpload
              value={resumeUrl}
              onChange={setResumeUrl}
              resourceType="raw"
              buttonText="Upload Resume"
            />

          </div>

        </div>

      </div>

      {/* Social Links */}

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

        <h2 className="text-2xl font-bold mb-6">
          Social Links
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <input
            name="email"
            defaultValue={hero?.email}
            placeholder="Email Address"
            className="p-4 rounded-xl bg-zinc-950 border border-zinc-800"
          />

          <input
            name="githubUrl"
            defaultValue={
              hero?.githubUrl
            }
            placeholder="GitHub URL"
            className="p-4 rounded-xl bg-zinc-950 border border-zinc-800"
          />

          <input
            name="linkedinUrl"
            defaultValue={
              hero?.linkedinUrl
            }
            placeholder="LinkedIn URL"
            className="p-4 rounded-xl bg-zinc-950 border border-zinc-800"
          />

          <input
            name="twitterUrl"
            defaultValue={
              hero?.twitterUrl
            }
            placeholder="Twitter/X URL"
            className="p-4 rounded-xl bg-zinc-950 border border-zinc-800"
          />

        </div>

      </div>

      <button
        type="submit"
        className="w-full h-14 rounded-2xl bg-blue-600 hover:bg-blue-500 font-semibold"
      >
        Save Hero Section
      </button>

    </form>
  );
}