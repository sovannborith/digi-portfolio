import prisma from "@/app/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { getUser } = getKindeServerSession();
  const redirectUrl = process.env.BASE_URL + "/guestbook" || "";

  try {
    const user = await getUser();
    if (!user || user === null || !user.id) {
      throw new Error("Please sign in!");
    }
    let dbUser = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
    });
    if (!dbUser) {
      dbUser = await prisma.user.create({
        data: {
          id: user.id,
          firstname: user.given_name ?? "",
          lastName: user.family_name ?? "",
          email: user.email ?? "",
          profileImage: user.picture,
        },
      });
    }
    return NextResponse.redirect(redirectUrl);
  } catch (err) {
    throw new Error("Something went wrong...");
  }
}
