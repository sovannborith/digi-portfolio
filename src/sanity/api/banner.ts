import { groq } from "next-sanity";
import { client } from "../util/sanity-util";

export async function getAllBanner() {
  return client.fetch(
    groq`*[_type=="tbl_banner"]{_id, title, image}`,
    {},
    {
      next: {
        revalidate: 3600,
      },
    }
  );
}
