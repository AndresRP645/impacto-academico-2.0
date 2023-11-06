import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Layout from "@/components/Layout";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

export default function Materias() {

  var materias = {};

  const getMaterias = async () => {
    const res = await axios.get("/api/data/materias");
    materias = res.data.materias;
    console.log(materias);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };


  return (
    <>
      <Layout title="Materias">
        <Container>
          <Row>
            <h5 className="text-center">
              Selecciona las materias que estas cursando este semestre
            </h5>
            <Form onSubmit={handleSubmit}>
              
              <Button type="onsubmit">
                enviar
              </Button>
            </Form>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
