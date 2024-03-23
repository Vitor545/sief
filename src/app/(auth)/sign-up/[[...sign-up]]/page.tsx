"use client";
import { SignUp } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";
export default function Page() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="w-full h-full items-center flex justify-center">
      <SignUp appearance={{
        baseTheme: resolvedTheme === "dark" ? dark : undefined,
      }} />
    </div>
  );
}