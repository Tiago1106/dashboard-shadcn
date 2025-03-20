
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeClosed } from "lucide-react";

import { setAuthToken } from "@/helpers/authCookies";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    console.log("Email:", email, "Senha:", password);

    await setAuthToken("fakeToken");
    router.push("/");
  };

  const handlePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  }

  return (
    <div>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Entrar na conta</CardTitle>
          <CardDescription>Por favor, insira suas informações de login nos campos abaixo para acessar sua conta</CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin} className="gap-6 flex flex-col">
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="Insira seu E-mail" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Senha</Label>
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <Input id="password" type={passwordVisible ? 'text' : 'password'} placeholder="Insira sua Senha" />
                  <Button type="button" onClick={handlePasswordVisible}>
                    {passwordVisible ? <EyeClosed /> : <Eye />}
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="w-full item-center justify-between">
            <Button type="button" variant='outline'>
              Criar conta
            </Button>
            <Button type="submit">
              Login
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
