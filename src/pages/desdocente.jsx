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
  Table,
  Form,
  Button,
} from "react-bootstrap";

export default function DesDocente() {
  const router = useRouter();
  const [docente, setDocente] = useState([]);
  const [alpha, setAlpha] = useState(<></>);
  const [pDocente, setPDocente] = useState([]);

  useEffect(() => {
    fetch("/api/info/docente")
      .then((res) => res.json())
      .then((data) => {
        setDocente(data);
      });
    fetch("/api/data/preguntas")
      .then((res) => res.json())
      .then((data) => {
        setPDocente(data.DesempeñoDocente);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setAlpha(
      <>
        <br />
        <p>El valor del alpha de cronbach para este data set es:</p>
        <p>{alphaCronbach(docente)}</p>
      </>
    );
  };

  return (
    <>
      <Layout
        nav="admin"
        title="Encuesta Impacto Academico"
        className="mx-auto text-center"
      >
        <Container className="mx-auto text-center">
          <Row>
            <Col lg="12" className="mx-auto text-center">
              <Link href="/info" passHref legacyBehavior>
                <a className="btn btn-danger m-4">regresar</a>
              </Link>
              <br />
            </Col>
            <Col lg="12" className="mx-auto text-center">
              <Card>
                <Card.Header>Desempeño Docente</Card.Header>
                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <Button variant="success" type="submit">
                      valor alpha de cronbach para este dataset
                    </Button>
                  </Form>
                  {alpha}
                  <br />
                  <div className="quest" id="scroll">
                      <Table 
                      striped
                      bordered
                      hover
                      responsive="lg"
                      variant="secondary"
                      className="">
                        <thead>
                          <tr className="table-primary">
                            <th className="table-success"> N° </th>
                            <th className="celdas"> Pregunta </th>
                          </tr>
                        </thead>
                        <tbody>
                        {Object.entries(pDocente).map((e, i) => (
                          <tr key={i}>
                            <td className="table-info">{e[0]}</td>
                              <td>{e[1]}</td>
                          </tr>
                        ))}
                        </tbody>
                      </Table>
                    </div>
                    <br />
                    <br />
                  <div className="data" id="scroll">
                    <Table
                      striped
                      bordered
                      hover
                      responsive="lg"
                      variant="secondary"
                    >
                      <thead>
                        <tr className="table-primary">
                          <th className="table-success"> id </th>
                          {Array.from({ length: 30 }).map((_, index) => (
                            <th key={index}>
                              {" "}
                              <p className="celdas">Pregunta {index + 1} </p>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {Object.values(docente).map((resp, i) => (
                          <tr key={i}>
                            <td className="table-info">{i + 1}</td>
                            {Object.values(resp).map((e, j) => (
                              <td key={j}>{e}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </Card.Body>
              </Card>
              <Link href="/info" passHref legacyBehavior>
                <a className="btn btn-danger m-4">regresar</a>
              </Link>
            </Col>
          </Row>
        </Container>
        <br />
      </Layout>
    </>
  );
}

function alphaCronbach(docente) {
  var map = [];
  var sum = [];
  var varp = [];

  docente.forEach((key, i) => {
    map[i] = [];
    Object.entries(key).forEach((value, j) => {
      map[i][j] = value[1];
    });
    sum[i] = suma(map[i]);
  });

  var K = map[0].length;

  for (let i = 0; i < map[0].length; i++) {
    varp[i] = varpSi(map, i);
  }

  var St = varpSt(sum);
  return (K / (K - 1)) * (1 - suma(varp) / St);
}

function suma(entry) {
  var sum = 0;
  for (let i = 0; i < entry.length; i++) {
    sum += entry[i];
  }
  return sum;
}

function varpSi(arr, j) {
  var varp = 0;
  var sum = 0;
  var aux = [];
  for (let i = 0; i < arr.length; i++) {
    aux[i] = arr[i][j];
    sum += arr[i][j];
  }
  const prom = sum / aux.length;

  for (let i = 0; i < aux.length; i++) {
    varp += (aux[i] - prom) ** 2;
  }

  varp = varp / aux.length;

  return varp;
}

function varpSt(aux) {
  var varp = 0;
  var sum = 0;
  for (let i = 0; i < aux.length; i++) {
    sum += aux[i];
  }
  const prom = sum / aux.length;
  for (let i = 0; i < aux.length; i++) {
    varp += (aux[i] - prom) ** 2;
  }

  varp = varp / aux.length;

  return varp;
}
