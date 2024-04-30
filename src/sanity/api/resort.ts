import { groq } from "next-sanity";
import { client } from "../util/sanity-util";

export async function getAllResort() {
  return client.fetch(
    groq`*[_type=="tbl_resort"] | order(viewNumber desc) {...,
    province->{name,"slug": slug.current}
  }`,
    {},
    {
      next: {
        revalidate: 600,
      },
    }
  );
}

export async function getPopularResort() {
  return client.fetch(
    groq`*[_type=="tbl_resort"] | order(viewNumber desc)[0..9] {...,
    province->{name,"slug": slug.current}
  }`,
    {},
    {
      next: {
        revalidate: 600,
      },
    }
  );
}

export async function getResortBySlug(slug: string) {
  return client.fetch(
    groq`*[_type=="tbl_resort" && slug.current=='${slug}'][0]{...,province->{name,"slug": slug.current}}`,
    {},
    {
      next: {
        revalidate: 600,
      },
    }
  );
}
export async function getResortByProvince(province: string) {
  return client.fetch(
    groq`*[_type=="tbl_resort"]{...,province->{name,'slug': slug.current}}[province.slug=='${province}']`
  );
}

export async function searchResort(keyword: string) {
  return client.fetch(
    groq`*[_type=="tbl_resort"  && lower(title) match lower($keyword) ]{...,
      province->{name,"slug": slug.current}
    }`,
    { keyword }
  );
}

export async function updateViewNumberByResortSlug(slug: string) {
  const resort = await getResortBySlug(slug);
  if (resort) {
    client.patch(resort._id).inc({ viewNumber: 1 }).commit();
  }
}
