"use client";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Layout from "@/components/Layout";
import { carreras } from "@/cfg/carreras";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

export default function Login() {
  const [credentials, setCredentials] = useState({
    cuenta: "",
    nombre: "",
    carrera: "",
  });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/auth/login", credentials);
    if (res.status === 200) {
      router.push("/materias");
    }
  };
  
  return (
    <>
      <Layout title="Login">
        <Container>
          <Row>
            <Col md="6" className="mx-auto">
              <Card>
                <Card.Header>Ingresar</Card.Header>
                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group>
                      <Form.Label>Cuenta</Form.Label>
                      <Form.Control
                        type="text"
                        name="Cuenta"
                        placeholder="Número de Cuenta"
                        onChange={(e) =>
                          setCredentials({
                            ...credentials,
                            cuenta: e.target.value,
                          })
                        }
                      />
                      <br />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        type="text"
                        name="Nombre"
                        placeholder="Nombre Completo"
                        onChange={(e) =>
                          setCredentials({
                            ...credentials,
                            nombre: e.target.value,
                          })
                        }
                      />
                      <br />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Carrera</Form.Label>
                      <Form.Select
                        aria-label="Selecciona tu carrera"
                        name="id_carrera"
                        onChange={(e) =>
                          setCredentials({
                            ...credentials,
                            carrera: e.target.value,
                          })
                        }
                      >
                        <option>Selecciona tu carrera</option>
                        {carreras.map((carrera, i) => (
                          <option key={i} value={carrera.id}>
                            {carrera.value}
                          </option>
                        ))}
                      </Form.Select>
                      <br />
                      <Button variant="success" type="submit">
                        Ingresar
                      </Button>
                    </Form.Group>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
