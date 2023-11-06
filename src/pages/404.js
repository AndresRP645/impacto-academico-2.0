import Layout from "@/components/Layout";
import Link from "next/link";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
export default function Error404() {
  return (
    <>
      <Layout nav='login' title="404 Error">
        <Container>
          <Row>
            <Col md="4" className="mx-auto text-center">
              <Card bg="dark">
                <Card.Body>
                  <Card.Title>404 Error</Card.Title>
                  <Card.Text>
                  Esta página no existe
                    <br />
                    favor de regresar al inicio
                    <br />
                    <br />
                  </Card.Text>
                  <Link href="/" passHref legacyBehavior>
                      <Button variant="primary">Ir al inicio</Button>
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
