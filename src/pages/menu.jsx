import Layout from "@/components/Layout";
import Link from "next/link";
import { Container, Row, Card, Col, Button, Image } from "react-bootstrap";

export default function Menu() {
  return (
    <>
      <Layout nav='login' title="Encuesta Impacto Academico">
        <Container>
          <Row>
            <Col md="4" className="mx-auto text-center">
            <Card>
              <Card.Header>
                Ver Respuestas
              </Card.Header>
              <Card.Body>
              <Link href="/info" passHref legacyBehavior>
                    <a className="btn btn-light m-4"><Card.Img className="image" src="/graph.png" /></a>
                  </Link>
              </Card.Body>
            </Card>
            </Col>
            <Col md="4" className="mx-auto text-center">
            <Card>
              <Card.Header>
                chi cuadrada de pearson
              </Card.Header>
              <Card.Body>
              <Link href="/correlacion" passHref legacyBehavior>
                    <a className="btn btn-info m-4"><Card.Img className="image" src="/x2.png" /></a>
                  </Link>
              </Card.Body>
            </Card>
            </Col>
            <Col md="4" className="mx-auto text-center">
            <Card>
              <Card.Header>
                Contestar encuesta
              </Card.Header>
              <Card.Body>
              <Link href="/login" passHref legacyBehavior>
                    <a className="btn btn-success m-4"><Card.Img className="image" src="/encuesta.png" /></a>
                  </Link>
              </Card.Body>
            </Card>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
