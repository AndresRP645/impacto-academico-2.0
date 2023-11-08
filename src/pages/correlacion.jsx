import Layout from "@/components/Layout";
import Link from "next/link";
import { Container, Row, Card, Col, Button, Image } from "react-bootstrap";

export default function Correlacion() {
  return (
    <>
      <Layout nav='login' title="Encuesta Impacto Academico">
        <Container>
          <Row>
            <Col md="4" className="mx-auto text-center">
            <Card>
              <Card.Header>
                Correlación Estadistica
              </Card.Header>
              <Card.Body>
              Text
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