import {
  Container, Row, Col, Stack, Nav, Button,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import * as Icon from 'react-bootstrap-icons'
import { LinkContainer } from 'react-router-bootstrap'
import { AppDispatch, RootState } from '../../app/store'
import { clearCart, changeQuantity } from '../../store/reducers/cartReducer'

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cartItems.cartItems)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <Container>
      <Row>
        <h1 className="text-center mb-5">Your Cart</h1>
        <Col>
          <Stack gap={3}>

            {cartItems.length >= 1 ? (
              cartItems.map(({
                id, imgSrc, title, count, price,
              }) => (

                <div key={id} className="bg-light border bd-highlight p-3 d-flex  align-items-center">
                  <div className="me-3">
                    <img
                      src={imgSrc}
                      alt={title}
                      className="img-fluid"
                      width={100}
                    />
                  </div>
                  <div className="fs-2 fw-bold me-3 flex-grow-1">
                    {title}
                  </div>
                  <div className="fs-5 text-end">
                    <div>
                      Quantity:
                      {' '}
                      <Icon.DashCircle
                        style={{ cursor: 'pointer' }}
                        onClick={(e) => {
                          e.currentTarget.blur()
                          dispatch(changeQuantity({ id, count: count - 1 }))
                        }}
                      />
                      <span className="fw-bold m-2">{count}</span>
                      <Icon.PlusCircle
                        style={{ cursor: 'pointer' }}
                        onClick={(e) => {
                          e.currentTarget.blur()
                          dispatch(changeQuantity({ id, count: count + 1 }))
                        }}
                      />
                    </div>
                    <div className="text-end">
                      Price:
                      {' '}
                      $
                      {price}
                    </div>
                    <div className="text-end">
                      Total per unit:
                      {' '}
                      $
                      {Math.round(price * count * 1000) / 1000}
                    </div>

                  </div>

                </div>

              ))
            )
              : <h2 className="text-center mt-5">No items in cart</h2>}

          </Stack>
          {cartItems.length >= 1 && (
            <>
              <Row className="d-flex justify-content-between mt-5 mb-5">
                <Col>
                  <Button
                    onClick={() => {
                      dispatch(clearCart())
                    }}
                  >
                    Clear cart

                  </Button>
                </Col>
                <Col>
                  <h2 className="text-end fw-bold">
                    Subtotal:
                    {' '}
                    $
                    {Math.round(cartItems.reduce((acc, { price, count }) => acc + price * count, 0) * 1000) / 1000}
                  </h2>
                  <p className="text-end">Taxes and shipping calculated at checkout</p>
                  <LinkContainer to="/">
                    <Nav.Link>
                      <span
                        className="d-flex align-items-center justify-content-end"
                      >
                        {' '}
                        <Icon.ArrowLeft className="me-2" />
                        {' '}
                        Back to shop
                      </span>
                    </Nav.Link>
                  </LinkContainer>
                </Col>

              </Row>
            </>
          )}

        </Col>
      </Row>
    </Container>
  )
}

export default Cart
