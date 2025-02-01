"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader/Loader";

export default function MainPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return <Loader />;
}
