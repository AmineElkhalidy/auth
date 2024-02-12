"use client";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { FaRegCircleUser } from "react-icons/fa6";
import LogoutButton from "./LogoutButton";

const UserButton = () => {
  const user = useCurrentUser();
  console.log(user?.role);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image || ""} alt="User profile" />
          <AvatarFallback>
            <FaRegCircleUser className="w-7 h-7" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="p-4">
        <div className="flex flex-col border-b pb-2 text-sm mb-4">
          <p className="font-medium">{user?.email}</p>
          <p className="text-muted-foreground">
            {user?.role ? "Admin" : "User"}
          </p>
        </div>
        <LogoutButton>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
