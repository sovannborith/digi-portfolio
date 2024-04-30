import { groq } from "next-sanity";
import { client } from "../util/sanity-util";
import UserData from "../model/user";

export async function getUserByEmail(email: string) {
  return client.fetch(
    groq`*[_type == "tbl_user" && email == $email]{
        _id,
        createdAt,
        user_name,
        email
      }`,
    { email }
  );
}

export async function createUser(userData: UserData) {
  const { name, email } = userData;
  const newUser = await client.create({
    _type: "tbl_user",
    user_name: name,
    email: email,
    createdAt: new Date().toISOString(),
  });

  return newUser;
}
