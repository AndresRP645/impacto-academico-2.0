import Layout from "@/components/Layout";
import Link from "next/link";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
export default function Error404() {
  return (
    <>
      <Layout title="404 Error">
      <Container>
          <Row>
            <Col md="3" className="mx-auto text-center">
              <Card>
                <Card.Body>
                  <Card.Title><h1>404</h1></Card.Title>
                  <Card.Text>
                    Pagina no encontrada
                    <br />
                    <br />
                    <Link href="/" passHref legacyBehavior>
                      <Button variant="primary">Ir al inicio</Button>
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
