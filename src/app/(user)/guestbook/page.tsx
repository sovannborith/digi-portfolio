import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React, { Suspense } from "react";
import UserForm from "../../components/UserForm";
import prisma from "../../lib/db";
import {
  LoadingGuestbookForm,
  LoadingMessage,
} from "../../components/LoadingState";
import { unstable_noStore as noStore } from "next/cache";

async function getGuestBrookEntry() {
  noStore();
  const data = await prisma.guestBookEntry.findMany({
    select: {
      User: {
        select: {
          firstname: true,
          profileImage: true,
        },
      },
      message: true,
      id: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 30,
  });
  return data;
}
async function GuestBookEntries() {
  const data = await getGuestBrookEntry();

  if (data.length === 0) {
    return null;
  }

  return data.map((item) => (
    <li key={item.id}>
      <div className="flex items-center">
        <img
          src={item.User?.profileImage as string}
          alt="User Profile Image"
          className="w-10 h-10 rounded-lg"
        />

        <p className="text-muted-foreground pl-3 break-words">
          {item.User?.firstname}:{" "}
          <span className="text-foreground">{item.message}</span>
        </p>
      </div>
    </li>
  ));
}

async function GuestBookForm() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (user) {
    return <UserForm />;
  }

  return (
    <div className="flex justify-between gap-4 flex-col md:flex-row">
      <Input type="text" placeholder="Your Message..." />
      <RegisterLink>
        <Button className="w-full bg-basedBgColor hover:bg-basedBgColor-hover">
          Sign Up for free
        </Button>
      </RegisterLink>
    </div>
  );
}

const GuestbookPage = () => {
  return (
    <section className="max-padd-container">
      <h1 className="text-2xl font-semibold lg:text-5xl pt-5">Guestbook</h1>
      <p className="text-sm text-secondaryTextColor">Sign my Guestbook</p>
      <Card className="mt-10">
        <CardHeader className="flex flex-col w-full">
          <Label className="mb-1">Message</Label>
          <Suspense fallback={<LoadingGuestbookForm />}>
            <GuestBookForm />
          </Suspense>
          <ul className="pt-7 gap-y-5 flex flex-col">
            <Suspense fallback={<LoadingMessage />}>
              <GuestBookEntries />
            </Suspense>
          </ul>
        </CardHeader>
      </Card>
    </section>
  );
};

export default GuestbookPage;
