import { groq } from "next-sanity";
import { client } from "../util/sanity-util";

export async function getAllProvince() {
  return client.fetch(
    groq`*[_type=="tbl_province"]{name, "slug": slug.current}`,
    {},
    {
      next: {
        revalidate: 3600,
      },
    }
  );
}

export async function getProvinceBySlug(slug: string) {
  return client.fetch(
    groq`*[_type=="tbl_province"]{name, "slug": slug.current}[slug=='${slug}']`
  );
}
