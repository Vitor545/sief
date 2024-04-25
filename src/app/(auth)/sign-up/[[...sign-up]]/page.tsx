"use client";
import { SignUp } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";
export default function Page() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="w-full h-svh items-center flex justify-center">
      <SignUp
        afterSignUpUrl={"/home"}
        appearance={{
          baseTheme: resolvedTheme === "dark" ? dark : undefined,
        }}
      />
    </div>
  );
}
