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
import { CiLogout } from "react-icons/ci";

const UserButton = () => {
  const user = useCurrentUser();

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

      <DropdownMenuContent className="py-2">
        <div className="flex flex-col border-b pb-2 text-sm mb-3 gap-y-1 px-2">
          <p className="text-sm font-semibold leading-none">{user?.name}</p>
          <p className="text-xs font-semibold text-muted-foreground">
            {user?.email}
          </p>
        </div>

        <LogoutButton>
          <DropdownMenuItem className="hover:bg-transparent space-x-2">
            <CiLogout className="w-5 h-5 rotate-180 inline-block mr-2" />
            Logout
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
