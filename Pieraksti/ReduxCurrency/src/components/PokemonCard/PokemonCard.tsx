import { strictEqual } from 'assert'
import React, { FC } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export type PokeCardType = {
  name: string
  url: string
  imgLink: string
}

const PokemonCard: FC<PokeCardType> = ({
  name, url, imgLink,
}) => {
  const navigate = useNavigate()
  return (
    <Card
      style={{ width: '15rem' }}
      bg="light"
      className="mb-5"
      border="primary"
    >
      <Card.Img variant="top" src={imgLink} />
      <Card.Body>
        {/* Make first char uppercase */}
        <Card.Title>{name.charAt(0).toUpperCase() + name.slice(1)}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
        </Card.Text>
        <br />
        <Button
          variant="primary"
          onClick={() => navigate(`/pokemon/${name}`)}
        >
          More info
        </Button>
      </Card.Body>
    </Card>
  )
}

export default PokemonCard
