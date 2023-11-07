"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Layout from "@/components/Layout";
import {
  Container,
  Row,
  Card,
  Col,
  Button,
  Image,
  Table,
} from "react-bootstrap";

export default function Info() {
  const router = useRouter();
  const [docente, setDocente] = useState([]);
  const [estudiantil, setEstudiantil] = useState([]);

  useEffect(() => {
    fetch("/api/info/docente")
      .then((res) => res.json())
      .then((data) => {
        setDocente(data);
      });
    fetch("/api/info/estudiantil")
      .then((res) => res.json())
      .then((data) => {
        setEstudiantil(data);
      });
  }, []);

  return (
    <>
      <Layout
        nav="login"
        title="Encuesta Impacto Academico"
        className="mx-auto text-center"
      > 
      <h3 className="mx-auto text-center">Datos</h3>
        <Container className="mx-auto text-center">
          <Row>
            <Col md="12" className="mx-auto text-center">
              <Card>
                <Card.Header>Desempeño Docente</Card.Header>
                <Card.Body>
                  <Table striped bordered hover variant="success">
                    <thead>
                      <tr>
                        {Array.from({ length: 30 }).map((_, index) => (
                          <th key={index}> P {index + 1} </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {Object.values(docente).map((resp, i) => (
                        <tr key={i}>
                          {Object.values(resp).map((e, j) => (
                            <td key={j}>{e}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <Container className="mx-auto text-center">
          <Row>
          <Col md="12" className="mx-auto text-center">
              <Card>
                <Card.Header>Desempeño Estudiantil</Card.Header>
                <Card.Body>
                  <Table striped bordered hover variant="success">
                    <thead>
                      <tr>
                        {Array.from({ length: 10 }).map((_, index) => (
                          <th key={index}> P {index + 1} </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {Object.values(estudiantil).map((resp, i) => (
                        <tr key={i}>
                          {Object.values(resp).map((e, j) => (
                            <td key={j}>{e}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
