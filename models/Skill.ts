import { Schema, model, models } from "mongoose";

const SkillSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    icon: {
      type: String,
      default: "",
    },

    level: {
      type: Number,
      default: 80,
    },

    order: {
      type: Number,
      default: 0,
    },

    featured: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Skill =
  models.Skill ||
  model("Skill", SkillSchema);

export default Skill;