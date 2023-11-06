import Layout from "@/components/Layout";
import Link from "next/link";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
export default function Error({ statusCode }) {
  return (
    <>
      <Layout title={`Error ${statusCode}`}>
        <Container>
          <Row>
            <Col md="3" className="mx-auto text-center">
              <Card>
                <Card.Body>
                  <Card.Title>{`Error ${statusCode}`}</Card.Title>
                  <Card.Text>
                    Ocurrio un error inesperado. Por favor, inténtalo de nuevo.
                    <br />
                    <br />
                    <Link href="/" passHref legacyBehavior>
                      <Button variant="secondary">Ir al inicio</Button>
                    </Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
