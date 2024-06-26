import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.NEXT_PUBLIC_SANITY_API_TOKEN;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source);
};
