"use client";
import React from "react";
import { logout } from "@/actions/logout";

interface LogoutButtonProps {
  children?: React.ReactNode;
}

const LogoutButton = ({ children }: LogoutButtonProps) => {
  const onClickHandler = () => {
    logout();
  };
  return (
    <span className="cursor-pointer" onClick={onClickHandler}>
      {children}
    </span>
  );
};

export default LogoutButton;
