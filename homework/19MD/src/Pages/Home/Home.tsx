import { useState, useEffect } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { ShopItem, getShopItems } from '../../Data/shopItems'
import ProductCard from '../../components/ProductCard/ProductCard'

const Home = () => {
  const [shopItems, setShopItems] = useState<ShopItem[]>([])
  const [visibleItems, setVisibleItems] = useState(9)

  const showMoreItems = () => {
    setVisibleItems((prevValue) => prevValue + 9)
  }

  useEffect(() => {
    const allShopItems = getShopItems()
    setShopItems(allShopItems)
  }, [])

  return (
    <Container>
      <Row className="d-flex justify-content-center justify-content-md-between gap-3 mb-5">
        {shopItems.slice(0, visibleItems).map(({
          id, title, price, imgSrc, count,
        }) => (
          <ProductCard
            key={id}
            id={id}
            title={title}
            price={price}
            imgSrc={imgSrc}
            count={count}
          />
        ))}
        {shopItems.length > visibleItems && (
          <Button
            variant="outline-primary"
            role="button"
            onClick={(e) => {
              e.currentTarget.blur()
              showMoreItems()
            }}
          >
            Load more products
          </Button>
        )}
      </Row>
    </Container>
  )
}

export default Home
