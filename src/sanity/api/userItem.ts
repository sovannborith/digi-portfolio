import { groq } from "next-sanity";
import { client } from "../util/sanity-util";
import { IUserItem } from "../../../type";

export async function getUserItemByEmailResort(
  email: string,
  resortId: string
) {
  return client.fetch(
    groq`*[_type=="tbl_user_item" && email == $email && resort_id==$resortId][0]{_id, email, resort_id,is_liked,is_favorited}`,
    { email, resortId }
  );
}

export async function getUserItemByEmail(email: string) {
  return client.fetch(
    groq`*[_type=="tbl_user_item" && email ==$email && (is_liked==true || is_favorited==true)]{
      ..., "resort": *[_type=="tbl_resort" && _id==^.resort_id][0]{..., province->{name,"slug": slug.current}}
    }`,
    { email }
  );
}

export async function createUserItem(userItem: IUserItem) {
  const { email, resort_id, is_liked, is_favorited } = userItem;
  const existingUserItem = await getUserItemByEmailResort(email, resort_id);
  if (!existingUserItem) {
    const newUserItem = await client.create({
      _type: "tbl_user_item",
      email: email,
      resort_id: resort_id,
      is_liked: is_liked,
      is_favorited: is_favorited,
    });

    return newUserItem;
  }
}
export async function updateUserItemById(
  _id: string,
  is_liked: boolean,
  is_favorited: boolean
) {
  client
    .patch(_id)
    .set({ is_liked: is_liked, is_favorited: is_favorited })
    .commit();
}
export async function deleteUserItemById(_id: string) {
  client.delete(_id);
}
