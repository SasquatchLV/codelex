import React, { FC, useEffect, useState } from 'react'
import {
  Col, Card, Button, FormControl, InputGroup,
} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../app/store'
import { getShopItem, ShopItem } from '../../Data/shopItems'
import { addToCart } from '../../store/reducers/cartReducer'

const ProductCard: FC<ShopItem> = ({
  id,
  title,
  price,
  imgSrc,
}) => {
  const dispatch = useDispatch<AppDispatch>()
  const [singleItem, setSingleItem] = useState<ShopItem>()
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const item = getShopItem(id)
    setSingleItem(item)
  }, [])

  return (
    <Card
      style={{ width: '20rem' }}
      bg="light"
      className="mb-5"
      border="primary"
    >
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Price :
          {' '}
          $
          {price}
        </Card.Text>
        {singleItem && (
          <Button
            variant="primary"
            onClick={() => {
              dispatch(addToCart({ item: singleItem, count: quantity }))
              setQuantity(1)
            }}
          >
            Add to Cart
          </Button>
        )}
        {quantity >= 0 && (
          <>

            <InputGroup className="mb-3 mt-3">
              <InputGroup.Text id="basic-addon1">Qty</InputGroup.Text>
              <FormControl
                type="number"
                value={quantity}
                min={1}
                max={10}
                placeholder="Quantity"
                onChange={(e) => {
                  setQuantity(Number(e.target.value))
                }}
              />
            </InputGroup>

          </>
        )}

      </Card.Body>
    </Card>
  )
}

export default ProductCard
