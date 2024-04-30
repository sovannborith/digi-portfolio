import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemaTypes";
import SanityHeader from "@/app/components/SanityHeader";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

const config = defineConfig({
  basePath: "/admin",
  name: "Sovannborith_Digital_Portfolio",
  title: "Sovannborith's Digital Portfolio",
  projectId: projectId,
  dataset: dataset,
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      navbar: SanityHeader,
    },
  },
});

export default config;
