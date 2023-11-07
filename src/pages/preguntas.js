"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Layout from "@/components/Layout";
import { getCookie } from "cookies-next";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

export default function Preguntas() {
  const router = useRouter();
  const [docente, setDocente] = useState([]);
  const [estudiantil, setEstudiantil] = useState([]);
  const [institucion, setInstitucion] = useState([]);
  const [materias, setMaterias] = useState([]);

  useEffect(() => {
    if (getCookie("materiasToken")) {
      fetch("/api/data/preguntas")
        .then((res) => res.json())
        .then((data) => {
          setDocente(data.DesempeñoDocente);
          setEstudiantil(data.DesempeñoEstudiantil);
          setInstitucion(data.IdentidadInstitucional);
          setMaterias(JSON.parse(getCookie("materiasToken")));
          console.log(materias);
        });
    } else {
      router.push("/materias");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    var respuestas = [];
    const formData = new FormData(e.currentTarget);
    for (const element of formData.entries()) {
      respuestas.push(element);
    }
      const res = await fetch('/api/data/send', {
        method: 'POST',
        body: JSON.stringify(respuestas),
      })
      if (res.status === 200) {
        console.log("OK");
        router.push('/');
      }
  };

  return (
    <>
      <Layout nav="1" title="Encuesta Impacto Academico">
        <Container>
          <Row>
            <Col md="8" className="mx-auto">
              <Form onSubmit={handleSubmit}>
                <h4 className="mx-auto text-center">Desempeño Docente</h4>
                <br />
                {Object.entries(docente).map((pregunta, i) => (
                  <>
                    <Card>
                      <Card.Header>
                        <h7 className="mx-auto my-2 text-center">
                          {pregunta[0]}.- {pregunta[1]}
                        </h7>
                      </Card.Header>
                      <Card.Body className="mx-auto">
                        {Object.values(materias).map((materia, i) => (
                          <>
                            <h5 className="mx-auto text-center">
                              {materia[1]}
                            </h5>
                            <Form.Check // prettier-ignore
                              type="radio"
                              name={`${pregunta[0]} ${materia[0]}`}
                              id={`${pregunta[0]} ${materia[0]} 1`}
                              value="1"
                              required="required"
                              label="Malo"
                              className="form-check-inline"
                            />
                            <Form.Check // prettier-ignore
                              type="radio"
                              name={`${pregunta[0]} ${materia[0]}`}
                              id={`${pregunta[0]} ${materia[0]} 2`}
                              value="2"
                              required="required"
                              label="Neutro"
                              className="form-check-inline"
                            />
                            <Form.Check // prettier-ignore
                              type="radio"
                              name={`${pregunta[0]} ${materia[0]}`}
                              id={`${pregunta[0]} ${materia[0]} 3`}
                              value="3"
                              required="required"
                              label="Bueno"
                              className="form-check-inline"
                            />
                            <br />
                            <br />
                          </>
                        ))}
                      </Card.Body>
                    </Card>
                    <br />
                  </>
                ))}

                <h3 className="mx-auto text-center">Desempeño Estudiantil</h3>
                <br />
                {Object.entries(estudiantil).map((pregunta, i) => (
                  <>
                    <Card>
                      <Card.Header>
                        <h5 className="mx-auto my-2 text-center">
                          {pregunta[0]}.- {pregunta[1]}
                        </h5>
                      </Card.Header>
                      <Card.Body className="mx-auto">
                        {Object.values(materias).map((materia, i) => (
                          <>
                            <h5 className="mx-auto text-center">
                              {materia[1]}
                            </h5>
                            <Form.Check // prettier-ignore
                              type="radio"
                              name={`${pregunta[0]} ${materia[0]}`}
                              id={`${pregunta[0]} ${materia[0]} 1`}
                              value="1"
                              required="required"
                              label="Malo"
                              className="form-check-inline"
                            />
                            <Form.Check // prettier-ignore
                              type="radio"
                              name={`${pregunta[0]} ${materia[0]}`}
                              id={`${pregunta[0]} ${materia[0]} 2`}
                              value="2"
                              required="required"
                              label="Neutro"
                              className="form-check-inline"
                            />
                            <Form.Check // prettier-ignore
                              type="radio"
                              name={`${pregunta[0]} ${materia[0]}`}
                              id={`${pregunta[0]} ${materia[0]} 3`}
                              value="3"
                              required="required"
                              label="Bueno"
                              className="form-check-inline"
                            />
                            <br />
                            <br />
                          </>
                        ))}
                      </Card.Body>
                    </Card>
                    <br />
                  </>
                ))}

                <h3 className="mx-auto text-center">Identidad Institucional</h3>
                <br />
                {Object.entries(institucion).map((pregunta, i) => (
                  <>
                    <Card>
                      <Card.Header>
                        <h5 className="mx-auto my-2 text-center">
                          {pregunta[0]}.- {pregunta[1]}
                        </h5>
                      </Card.Header>
                      <Card.Body className="mx-auto">
                        <Form.Check // prettier-ignore
                          type="radio"
                          name={`${pregunta[0]}`}
                          id={`${pregunta[0]} 1`}
                          value="1"
                          required="required"
                          label="No"
                          className="form-check-inline"
                        />
                        <Form.Check // prettier-ignore
                          type="radio"
                          name={`${pregunta[0]}`}
                          id={`${pregunta[0]} 2`}
                          value="2"
                          required="required"
                          label="Tal Vez"
                          className="form-check-inline"
                        />
                        <Form.Check // prettier-ignore
                          type="radio"
                          name={`${pregunta[0]}`}
                          id={`${pregunta[0]} 3`}
                          value="3"
                          required="required"
                          label="Si"
                          className="form-check-inline"
                        />
                      </Card.Body>
                    </Card>
                    <br />
                  </>
                ))}
                <Container className="mx-auto text-center">
                <Button type="onsubmit" className="m-4">
                  Enviar Respuestas
                </Button>
                <Link href="/logout" passHref legacyBehavior>
                    <a className="btn btn-danger m-4">Salir</a>
                  </Link>
              </Container>
              </Form>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
