"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import React, { useRef } from "react";
import { useFormStatus } from "react-dom";
import { postData } from "../actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled className="bg-basedBgColor opacity-50">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        </Button>
      ) : (
        <Button
          type="submit"
          className="bg-basedBgColor hover:bg-basedBgColor-hover"
        >
          Sign for free
        </Button>
      )}
    </>
  );
}

const UserForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await postData(formData);
        formRef.current?.reset();
      }}
      className="flex justify-between gap-4 flex-col md:flex-row"
    >
      <Input
        type="text"
        name="message"
        maxLength={80}
        minLength={1}
        placeholder="Your Message..."
        required
      />
      <SubmitButton />
    </form>
  );
};

export default UserForm;
