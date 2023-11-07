"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Layout from "@/components/Layout";
import {
  Container,
  Row,
  Card,
  Col,
  Button,
  Form,
  Table,
} from "react-bootstrap";

export default function DesEstudiantil() {
  const router = useRouter();
  const [estudiantil, setEstudiantil] = useState([]);

  useEffect(() => {
    fetch("/api/info/estudiantil")
      .then((res) => res.json())
      .then((data) => {
        setEstudiantil(data);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    var varp = [];
    var sum = [];
    estudiantil.forEach((key, i) => {
      varp.push(i);
      Object.entries(key).forEach((value, j) => {
        varp[i].push(value[1]);
      console.log(value[0], value[1], i);
      });
    });

    alert(JSON.stringify(varp));
    /*
    const res = await axios.post("/api/auth/login", credentials);
    if (res.status === 200) {
      router.push("/materias");
    } else if (res.status === 401) {
      alert("Favor de Ingresar tu Nombre Completo");
    } else if (res.status === 402) {
      alert(
        "Los datos proporcionados no coinciden con el numero de cuenta registrado', 'Favor de hablar con el encargado si existe algún inconveniente"
      );
    }*/
  };

  return (
    <>
      <Layout
        nav="login"
        title="Encuesta Impacto Academico"
        className="mx-auto text-center"
      >
        <Container className="mx-auto text-center">
          <Row>
            <Col md="12" className="mx-auto text-center">
              <Link href="/" passHref legacyBehavior>
                <a className="btn btn-danger m-4">regresar</a>
              </Link>
              <br />
              <Card>
                <Card.Header>Desempeño Estudiantil</Card.Header>
                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <Button variant="success" type="submit">
                      valor alpha de cronbatch para este dataset
                    </Button>
                  </Form>
                  <br />
                  <Table striped bordered hover variant="secondary">
                    <thead>
                      <tr>
                        <th> id </th>
                        {Array.from({ length: 10 }).map((_, index) => (
                          <th key={index}> P {index + 1} </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {Object.values(estudiantil).map((resp, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          {Object.values(resp).map((e, j) => (
                            <td key={j}>{e}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
              <Link href="/" passHref legacyBehavior>
                <a className="btn btn-danger m-4">regresar</a>
              </Link>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
