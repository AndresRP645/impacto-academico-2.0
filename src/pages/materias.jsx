"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Layout from "@/components/Layout";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

export default function Materias() {
  const router = useRouter();
  const [materias, setMaterias] = useState([]);

  useEffect(() => {
      fetch("/api/data/materias")
      .then((res) => res.json())
      .then((data) => {
        setMaterias(data.materias);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    var materias = [];
    const formData = new FormData(e.currentTarget);
    for (const element of formData.entries()) {
      materias.push(element);
    }
    if(materias.length < 1) alert("Selecciona al menos una materia");
    else{
      const res = await fetch('/api/data/preguntas', {
        method: 'POST',
        body: JSON.stringify(materias),
      })
      if (res.status === 200) {
        router.push('/preguntas');
      }
    }
  };


  return (
    <>
      <Layout nav="logout" title="Materias">
        <Container className="p-4">
          <Row>
            <h5 className="text-center">
              Selecciona las materias que estas cursando este semestre
            </h5>
            <Form onSubmit={handleSubmit}>
              {Object.values(materias).map((periodo, i) => (
                <div key={i}>
                  <Container className="p-4">
                    <Row>
                      <Col md="9" className="mx-auto">
                        <Card>
                          <Card.Header>Periodo {i + 1}</Card.Header>
                          <Card.Body>
                            {Object.entries(periodo).map((e, j) => (
                              <Form.Check key={j}
                                type="switch"
                                name={e[0]}
                                value={e[1]}
                                id={e[0]}
                                label={e[1]}
                              />
                            ))}
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </div>
              ))}
              <Container className="mx-auto text-center">
                <Button type="onsubmit" className="m-4">
                  Seleccionar materias
                </Button>
                <Link href="/logout" passHref legacyBehavior>
                    <a className="btn btn-danger m-4">Salir</a>
                  </Link>
              </Container>
            </Form>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
