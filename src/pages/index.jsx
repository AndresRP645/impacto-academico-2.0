"use client";
import { deleteCookie  } from 'cookies-next';
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    router.push('/login');
  }, []);

  return (
    <>
    </>
  );
}
