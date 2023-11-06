"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Layout from "@/components/Layout";
import { getCookie  } from 'cookies-next';
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

export default function Preguntas() {
  const router = useRouter();
  const [docente, setDocente] = useState([]);
  const [estudiantil, setEstudiantil] = useState([]);
  const [institucion, setInstitucion] = useState([]);

  useEffect(() => {
    if(getCookie("materiasToken")){
    fetch("/api/data/preguntas")
      .then((res) => res.json())
      .then((data) => {
        setDocente(data[0]);
        setEstudiantil(data[1]);
        setInstitucion(data[2]);
        console.log(docente);
        console.log(estudiantil);
        console.log(institucion);
      });
    }
    else{
      router.push('/materias');
    }
  }, []);
  

  return (
    <>
      <Layout nav="1" title="Encuesta Impacto Academico">
        
      </Layout>
    </>
  );
}
