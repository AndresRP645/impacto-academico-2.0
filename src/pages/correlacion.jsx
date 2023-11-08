import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Layout from "@/components/Layout";
import Link from "next/link";
import { Container, Row, Card, Col, Button, Form } from "react-bootstrap";

export default function Correlacion() {
  const router = useRouter();
  const [docente, setDocente] = useState([]);
  const [estudiantil, setEstudiantil] = useState([]);
  const [pdocente, setPdocente] = useState([]);
  const [pestudiantil, setPestudiantil] = useState([]);

  useEffect(() => {
    fetch("/api/data/preguntas")
      .then((res) => res.json())
      .then((data) => {
        setDocente(data.DesempeñoDocente);
        setEstudiantil(data.DesempeñoEstudiantil);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    var materias = [];
    const formData = new FormData(e.currentTarget);
    for (const element of formData.entries()) {
      materias.push(element);
    }
    console.log(JSON.stringify(pdocente));
  };

  return (
    <>
      <Layout nav="login" title="Encuesta Impacto Academico">
        <Container>
          <Row>
            <Col md="12" className="mx-auto text-center">
              <Card>
                <Card.Header>Correlación Estadistica</Card.Header>
                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <Form.Select aria-label="Desempeño Docente">
                      <option>
                        Selecciona la pregunta de Desempeño Docente
                      </option>
                      {Object.entries(docente).map((e, i) => (
                        <option key={i} value={e[0]}>
                          {e[1]}
                        </option>
                      ))}
                    </Form.Select>
                    <br />
                    <br />
                    <Form.Select aria-label="Estudiantil">
                      <option onchange={() => setPdocente(e[0])}>
                        Selecciona la pregunta de Desempeño Estudiantil
                      </option>
                      {Object.entries(estudiantil).map((e, i) => (
                        <option key={i} value={e[0]}>
                          {e[1]}
                        </option>
                      ))}
                    </Form.Select>
                    <br />
                    <Button
                      type="submit"
                      variant="success"
                      className="mx-auto text-center"
                    >
                      Realizar Correlación Chi cuadrada de pearson
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
              <br />
              <Link href="/menu" passHref legacyBehavior>
                <a className="btn btn-danger m-4">regresar</a>
              </Link>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
