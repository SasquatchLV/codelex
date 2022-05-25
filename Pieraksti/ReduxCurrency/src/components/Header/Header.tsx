import {
  Navbar, Container, Nav, Row, Col,
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => (
  <>
    <Navbar bg="dark" variant="dark" className="mb-5" sticky="top">
      <Container>
        <Row>
          <Col>
            <LinkContainer to="/">
              <Navbar.Brand>
                <img
                  src="/logo.svg"
                  className="d-inline-block align-center"
                  alt="Logo"
                />
              </Navbar.Brand>
            </LinkContainer>
          </Col>
          <Col>
            <Nav>
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>

  </>
)

export default Header
