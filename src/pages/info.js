"use client";
import { deleteCookie  } from 'cookies-next';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Layout from "@/components/Layout";
import { Row, Card, Col, Button, Image } from "react-bootstrap";

export default function Info() {
  const router = useRouter();

  useEffect(() => {
    deleteCookie('sessionToken');
  }, []);
  return (
    <>
      <Layout nav='login' title="Encuesta Impacto Academico">
        
      </Layout>
    </>
  );
}
