import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Layout from "@/components/Layout";
import Link from "next/link";
import {
  Container,
  Row,
  Card,
  Col,
  Button,
  Form,
  Table,
} from "react-bootstrap";

export default function Correlacion() {
  const router = useRouter();
  const [docente, setDocente] = useState([]);
  const [estudiantil, setEstudiantil] = useState([]);
  const [pdocente, setPdocente] = useState(0);
  const [pestudiantil, setPestudiantil] = useState(0);
  const [datadocente, setDatadocente] = useState([]);
  const [dataestudiantil, setDatapestudiantil] = useState([]);

  const [tabla, setTabla] = useState(<div></div>);

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

    await fetch("/api/respdocente/" + pdocente)
      .then((res) => res.json())
      .then((data) => {
        setDatadocente(data);
      });
    await fetch("/api/respestudiantil/" + pestudiantil)
      .then((res) => res.json())
      .then((data) => {
        setDatapestudiantil(data);
      });

    const tabla = await tablaContingencia(datadocente, dataestudiantil);
    const X_cuadrada = await Chi_cuadrada(tabla);
    console.log("Loading...");
    console.log("tabla", tabla);
    console.log("X_cuadrada", X_cuadrada);
    setTabla(
      <>
        <br />
        <Col md="12" className="mx-auto text-center">
          <Card>
            <Card.Header>Tabla de contingencia</Card.Header>
            <Card.Body>
              <Table striped bordered hover variant="secondary">
                <thead>
                  <tr className="table-primary">
                    <th className="table-success"> # </th>
                    <th> 1 </th>
                    <th> 2 </th>
                    <th> 3 </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.values(tabla).map((resp, i) => (
                    <tr key={i}>
                      <td className="table-info">{i + 1}</td>
                      {Object.values(resp).map((e, j) => (
                        <td key={j}>{e}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
              <br />
              <p>El valor de la chi cuadrada es de: {X_cuadrada}</p>
            </Card.Body>
          </Card>
        </Col>
        <br />
      </>
    );
    
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
                    <Form.Select
                      aria-label="Desempeño Docente"
                      name="docente"
                      onChange={(e) =>
                        setPdocente("respuesta_" + e.target.value)
                      }
                    >
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
                    <Form.Select
                      aria-label="Desempeño Estudiantil"
                      name="estudiantil"
                      onChange={(e) =>
                        setPestudiantil("respuesta_" + (e.target.value - 30))
                      }
                    >
                      <option>
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
              {tabla}
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

function tablaContingencia(docente, estudiantil) {
  const valores = [1, 2, 3];

  var contingencia = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  for (let i = 0; i < docente.length; i++) {
    for (let j = 0; j < valores.length; j++) {
      for (let k = 0; k < valores.length; k++) {
        if (docente[i] == valores[j] && estudiantil[i] == valores[k]) {
          contingencia[j][k]++;
        }
      }
    }
  }
  return contingencia;
}

function totalesVerticales(contingencia) {
  var totales = [];
  for (let i = 0; i < contingencia.length; i++) {
    totales[i] = 0;
    for (let j = 0; j < contingencia[i].length; j++) {
      totales[i] += contingencia[i][j];
    }
  }
  return totales;
}

function totalesHorizontales(contingencia) {
  var totales = [];
  for (let j = 0; j < contingencia[0].length; j++) {
    totales[j] = 0;
    for (let i = 0; i < contingencia.length; i++) {
      totales[j] += contingencia[i][j];
    }
  }
  return totales;
}

function total(contingencia) {
  var total = 0;
  for (let i = 0; i < contingencia.length; i++) {
    for (let j = 0; j < contingencia[i].length; j++) {
      total += contingencia[i][j];
    }
  }
  return total;
}

function Eij(verticales, horizontales, i, j, N) {
  var e = 0;
  const a = verticales[i];
  const b = horizontales[j];
  e = (a * b) / N;

  return e;
}

function operador(contingencia, verticales, horizontales, i, j, N) {
  const e = Eij(verticales, horizontales, i, j, N);
  const o = contingencia[i][j];

  const resta = o - e;

  return resta === 0 ? 0 : resta ** 2 / e;
}

function Chi_cuadrada(contingencia) {
  const tVerticales = totalesVerticales(contingencia);
  const tHorizontales = totalesHorizontales(contingencia);
  const T = total(contingencia);

  console.log(contingencia);
  console.log(tVerticales);
  console.log(tHorizontales);
  console.log(T);

  var X_cuadrada = 0;
  for (let i = 0; i < contingencia.length; i++) {
    for (let j = 0; j < contingencia[i].length; j++) {
      X_cuadrada += operador(contingencia, tVerticales, tHorizontales, i, j, T);
    }
  }
  return X_cuadrada;
}
