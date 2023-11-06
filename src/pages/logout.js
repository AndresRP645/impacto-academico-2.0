"use client";
import { deleteCookie  } from 'cookies-next';
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    deleteCookie('sessionToken');
    router.push('/login');
  }, []);

  return (
    <>
    </>
  );
}
