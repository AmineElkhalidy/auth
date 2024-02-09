"use client";

import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import { DEFAUTL_LOGIN_REDIRECT } from "@/route";
import { signIn } from "next-auth/react";

const Social = () => {
  const onClickHandler = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAUTL_LOGIN_REDIRECT,
    });
  };
  return (
    <div className="w-full flex items-center gap-x-2">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClickHandler("google")}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>

      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClickHandler("github")}
      >
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Social;
