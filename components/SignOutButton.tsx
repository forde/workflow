"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const router = useRouter();

  async function handleSignOut(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await signOut();
    router.refresh();
  }

  return (
    <form onSubmit={handleSignOut}>
      <Button type='submit' variant='outline' className='cursor-pointer'>
        Sign Out
      </Button>
    </form>
  );
}
