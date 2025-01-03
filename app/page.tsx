"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center font-bold">
        <h1>Welcome to User Management App</h1>
        <Button onClick={() => router.push('/users')}>Start</Button>
      </main>
    </div>
  );
}
