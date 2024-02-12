import { ExtendedUser } from "@/next-auth";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Switch } from "./ui/switch";

interface UserInfoProps {
  user?: ExtendedUser;
  label: string;
}

const UserInfo = ({ user, label }: UserInfoProps) => {
  return (
    <Card className="w-[600px] shadow-md">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">{label}</p>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-semibold">User ID:</p>
          <p className="truncate text-xs max-w-[180px] font-mono bg-slate-100 rounded-sm px-2">
            {user?.id}
          </p>
        </div>

        <div className="flex items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-semibold">Name:</p>
          <p className="truncate text-xs max-w-[180px] font-mono bg-slate-100 rounded-sm px-2">
            {user?.name}
          </p>
        </div>

        <div className="flex items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-semibold">Email:</p>
          <p className="truncate text-xs max-w-[180px] font-mono bg-slate-100 rounded-sm px-2">
            {user?.email}
          </p>
        </div>

        <div className="flex items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-semibold">Role:</p>
          <p className="truncate text-xs max-w-[180px] font-mono bg-slate-100 rounded-sm px-2">
            {user?.role}
          </p>
        </div>

        <div className="flex items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-semibold">Two Factor Authentication:</p>

          <Switch checked={user?.isTwoFactorEnabled} />
        </div>
      </CardContent>
    </Card>
  );
};

export default UserInfo;
