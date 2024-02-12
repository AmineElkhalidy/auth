"use client";

import { Button } from "@/components/ui/button";
import { useSession, signOut } from "next-auth/react";
import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/useCurrentUser";

const SettingsPage = () => {
  // Get the current user
  const user = useCurrentUser();

  return (
    <div>
      <form>
        <Button onClick={() => logout()} type="submit">
          Sign Out
        </Button>
      </form>
    </div>
  );
};

export default SettingsPage;
