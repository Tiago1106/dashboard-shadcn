"use client";

import { useRouter } from "next/navigation";

import { setAuthToken } from "@/helpers/authCookies";

import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();

  const handleLogin = async () => {
    await setAuthToken("fakeToken");
    router.push("/");
  };

  return (
    <div>
      <p>SignIn</p>
      <Button onClick={handleLogin}>Sign-In</Button>
    </div>
  );
}
