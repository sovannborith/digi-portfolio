import { defineType } from "sanity";

export default defineType({
  name: "tbl_skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of skill",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "progress",
      title: "Progress",
      type: "number",
      description: "Progress of skill from 0 to 100%",
      validation: (Rule) => Rule.min(0).max(100),
    },

    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
  ],
});
