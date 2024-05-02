import { groq } from "next-sanity";
import { client } from "../util/sanity-util";

export async function getAllProject() {
  return client.fetch(
    groq`*[_type=="tbl_project"] | order(_createdAt desc){_id,title,summary,"imgUrl":image.asset->url, linkToBuild,technologies[]->{_id,title,"imgUrl":image.asset->url}}`,
    {},
    {
      next: {
        revalidate: 600,
      },
    }
  );
}

export async function getFavoriteProject() {
  return client.fetch(
    groq`*[_type=="tbl_project"] | order(_createdAt desc)[0...2]{_id,title,summary,"imgUrl":image.asset->url, linkToBuild,technologies[]->{_id,title,"imgUrl":image.asset->url}}`,
    {},
    {
      next: {
        revalidate: 600,
      },
    }
  );
}
