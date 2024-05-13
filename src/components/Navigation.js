import Link from "next/link";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { admin, logout } from "@/cfg/navLinks";
export default function Navigation({ title, nav }) {
  return (
    <>
      {nav === "admin" ?
      <Navbar key="xl" bg="dark" variant="dark" expand="xl" className="mb-3">
      <Container>
         <Navbar.Brand> 
          <h5>{title}</h5>
            {/*<Link href="/" passHref legacyBehavior> <Nav.Link>Inicio</Nav.Link> </Link> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-xxl" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-xxl"
          aria-labelledby="offcanvasNavbarLabel-expand-xxl"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-xxl">
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="justify-content-end">
            <Nav variant="pills">
                  {admin.map(({ title, path }, i) => (
                    <Link href={path} passHref legacyBehavior key={i}>
                      <Nav.Link>{title}</Nav.Link>
                    </Link>
                  ))}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    :
    <Navbar key="xl" bg="dark" variant="dark" className="mb-3">
        <Container>
           <Navbar.Brand> 
            <h5>{title}</h5>
              {/*<Link href="/" passHref legacyBehavior> <Nav.Link>Inicio</Nav.Link> </Link> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-xxl" />
          {nav === "logout" ? (
                  <>
                    {logout.map(({ title, path }, i) => (
                      <Link href={path} passHref legacyBehavior key={i}>
                        <Nav.Link>{title}</Nav.Link>
                      </Link>
                    ))}
                  </>
                ) : (
                  <></>
                )}
        </Container>
      </Navbar>}
    </>
  );
}
