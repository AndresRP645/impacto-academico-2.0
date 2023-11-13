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
  const [alpha, setAlpha] = useState(<></>);

  useEffect(() => {
    fetch("/api/info/estudiantil")
      .then((res) => res.json())
      .then((data) => {
        setEstudiantil(data);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setAlpha(<>
      <br />
      <p>El valor del alpha de cronbach para este data set es:</p>
      <p>{alphaCronbach(estudiantil)}</p>
    </>);
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
              <Link href="/menu" passHref legacyBehavior>
                <a className="btn btn-danger m-4">regresar</a>
              </Link>
              <br />
              <Card>
                <Card.Header>Desempeño Estudiantil</Card.Header>
                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <Button variant="success" type="submit">
                      valor alpha de cronbach para este dataset
                    </Button>
                  </Form>
                  {alpha}
                  <br />
                  <Table striped bordered hover variant="secondary">
                    <thead>
                      <tr className="table-primary">
                        <th className="table-success"> id </th>
                        {Array.from({ length: 10 }).map((_, index) => (
                          <th key={index}> P {index + 1} </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {Object.values(estudiantil).map((resp, i) => (
                        <tr key={i}>
                          <td className="table-info">{i + 1}</td>
                          {Object.values(resp).map((e, j) => (
                            <td key={j}>{e}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
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


function alphaCronbach(estudiantil){
  var map = [];
  var sum = [];
  var varp = [];
  
  estudiantil.forEach((key, i) => {
    map[i] = [];
    Object.entries(key).forEach((value, j) => {
      map[i][j] = value[1];
    });
    sum[i] = suma(map[i]);
  });


  var K = map[0].length;
  console.log(K);

  for (let i = 0; i < map[0].length; i++) {
    varp[i] = varpSi(map, i);
  }

  var St = varpSt(sum);
  return (K/(K-1))*(1-(suma(varp)/St));
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

  varp = varp / (aux.length);

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

  varp = varp / (aux.length);

  return varp;
}
