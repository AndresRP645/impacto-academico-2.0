"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";
import Link from "next/link";
import Layout from "@/components/Layout";
import { carreras } from "@/cfg/carreras";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

export default function Login() {
  const router = useRouter();

  const [credentials, setCredentials] = useState({
    cuenta: "",
    nombre: "",
    carrera: "ISI",
  });

  useEffect(() => {
    deleteCookie("sessionToken");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/login", credentials);
      router.push("/materias");
      } catch (error) {
      if (error.response.status === 406 || error.response.status === 409) {
        alert(error.response.request.response);
      }  else if (error.response.status === 502) {
        router.push('/menu');
      } else if (error.response.status === 504) {
        console.log(error.response.request.response);
      } else if (error.response.status === 500) {
        alert(
          "No has ingresado todos tus datos"
        );  
      }
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
                        disabled
                        onChange={(e) =>
                          setCredentials({
                            ...credentials,
                            carrera: e.target.value,
                          })
                        }
                      >
                        {/*<option>Selecciona tu carrera</option>*/}
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
                      <Link href="/" passHref legacyBehavior>
                        <a className="btn btn-danger m-4">regresar</a>
                      </Link>
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
