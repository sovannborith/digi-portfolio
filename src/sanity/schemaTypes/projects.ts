import { defineType } from "sanity";

export default defineType({
  type: "document",
  name: "tbl_project",
  title: "Projects",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of the project",
      validation: (rule) => rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "summary",
      title: "Summary",
      type: "string",
    },
    {
      name: "project_type",
      title: "Project Type",
      type: "string",
      options: {
        list: ["Front-End", "Back-End", "Full-Stack", "Mobile App"], // Add your color options
      },
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "tbl_skill" } }],
    },

    {
      name: "linkToBuild",
      title: "Link to Build",
      type: "url",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
});
