import { Schema, model, models } from "mongoose";

const HeroSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      default: "Ayush Kumar",
    },

    title: {
      type: String,
      required: true,
      default: "Full Stack Developer",
    },

    description: {
      type: String,
      required: true,
      default:
        "Building scalable web applications using Next.js, Node.js, MongoDB and modern web technologies.",
    },

    imageUrl: {
      type: String,
      default: "",
    },

    resumeUrl: {
      type: String,
      default: "",
    },

    githubUrl: {
      type: String,
      default: "",
    },

    linkedinUrl: {
      type: String,
      default: "",
    },

    twitterUrl: {
      type: String,
      default: "",
    },

    email: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Hero = models.Hero || model("Hero", HeroSchema);

export default Hero;