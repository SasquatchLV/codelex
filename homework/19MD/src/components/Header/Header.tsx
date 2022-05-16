import {
  Navbar, Container, Nav, Row, Col,
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'

const Header = () => {
  const cartItems = useSelector((state: RootState) => state.cartItems.cartItems)

  return (
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
          <Row>
            <Col>
              <Nav>
                <LinkContainer to="/cart">
                  <Nav.Link>
                    <Icon.Cart4 color="white" size={30} />
                    <span className="badge" id="lblCartCount">
                      {' '}
                      {cartItems.length}
                      {' '}
                    </span>
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>

    </>
  )
}

export default Header
