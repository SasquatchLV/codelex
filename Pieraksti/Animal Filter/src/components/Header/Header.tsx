import {
  Navbar, Container, Nav, Row, Col,
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => (
  <>
    <Navbar bg="dark" variant="dark" className="mb-5" sticky="top">
      <Container className="d-flex justify-content-center">
        <Row>
          <Col>
            <LinkContainer to="/">
              <Navbar.Brand>
                <img
                  src="https://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Animal-Foot-PNG-Transparent-Image-500x558.png"
                  className="d-inline-block align-center"
                  alt="Logo"
                  height={70}
                />
              </Navbar.Brand>
            </LinkContainer>
          </Col>
        </Row>
      </Container>
    </Navbar>

  </>
)

export default Header
