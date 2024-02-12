"use client";
import React from "react";
import { logout } from "@/actions/logout";
import { Button } from "../ui/button";

interface LogoutButtonProps {
  children?: React.ReactNode;
}

const LogoutButton = ({ children }: LogoutButtonProps) => {
  const onClickHandler = () => {
    logout();
  };
  return (
    <Button className="cursor-pointer w-full" onClick={onClickHandler}>
      {children}
    </Button>
  );
};

export default LogoutButton;
