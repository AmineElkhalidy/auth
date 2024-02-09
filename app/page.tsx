import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/LoginButton";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold drop-shadow-md",
            font.className
          )}
        >
          🔐 Auth
        </h1>

        <p className=" text-lg">
          A simple authentication service built using{" "}
          <span className="font-semibold">Next.js</span> &{" "}
          <span className="font-semibold">Auth.js</span>.
        </p>

        <div>
          <LoginButton>
            <Button variant="default" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
