"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export default function LoginForm() {
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.currentTarget);

    const result = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password");
    } else if (result?.ok) {
      router.push("/");
      router.refresh();
    }
  }

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleLogin} className='flex flex-col gap-4 w-80'>
          <h1 className='text-2xl font-bold'>Login</h1>
          <Input
            placeholder='Email'
            required
            name='email'
            suppressHydrationWarning
          />
          <Input
            placeholder='Password'
            required
            name='password'
            type='password'
            suppressHydrationWarning
          />
          {error && (
            <Badge
              variant='destructive'
              className='text-[14px] w-full !rounded-lg h-8'
            >
              {error}
            </Badge>
          )}
          <Button
            type='submit'
            className='cursor-pointer'
            suppressHydrationWarning
          >
            Sign In
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
