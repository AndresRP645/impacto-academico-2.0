import Layout from "@/components/Layout";
import Link from "next/link";
import { Container, Row, Card, Col, Button, Image } from "react-bootstrap";

export default function Index() {
  return (
    <>
      <Layout nav='login' title="Encuesta Impacto Academico">
        <Container>
          <Row>
            <Col md="4" className="mx-auto text-center">
            <Card>
              <Card.Header>
                Desempeño Docente
              </Card.Header>
              <Card.Body>
              <Link href="/desdocente" passHref legacyBehavior>
                    <a className="btn btn-warning m-4"><Card.Img className="image" src="/maestro.png" /></a>
                  </Link>
              </Card.Body>
            </Card>
            </Col>
            <Col md="4" className="mx-auto text-center">
            <Card>
              <Card.Header>
                Desempeño Estudiantil
              </Card.Header>
              <Card.Body>
              <Link href="/desestudiantil" passHref legacyBehavior>
                    <a className="btn btn-info m-4"><Card.Img className="image" src="/alumno.png" /></a>
                  </Link>
              </Card.Body>
            </Card>
            </Col>
            <Col md="4" className="mx-auto text-center">
            <Card>
              <Card.Header>
                Todas las Respuestas
              </Card.Header>
              <Card.Body>
              <Link href="/respuestas" passHref legacyBehavior>
                    <a className="btn btn-info m-4"><Card.Img className="image" src="/exam.png" /></a>
                  </Link>
              </Card.Body>
            </Card>
            </Col>
          </Row>
          <Row>
          <Col md="4" className="mx-auto text-center">
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
