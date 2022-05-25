import { useState } from 'react'
import {
  Button, Card, Col, Container, Row, Spinner, Table,
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useParams } from 'react-router-dom'
import { useGetPokemonByNameQuery } from '../../store/reducers/pokemonReducer'

const SinglePokemon = () => {
  const { pokename } = useParams()
  const { data, isLoading, isSuccess } = useGetPokemonByNameQuery(pokename)

  // eslint-disable-next-line max-len
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data?.id}.png`

  const dmToMeters = (dm: number) => (dm / 10).toFixed(2)
  const gTokg = (g: number) => (g / 10).toFixed(1)

  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center gap-3 mb-5">
          {isLoading && (
            <>
              <Spinner animation="grow" variant="primary" />
              <Spinner animation="grow" variant="secondary" />
              <Spinner animation="grow" variant="success" />
            </>
          )}
          {data && isSuccess && (
            <>
              <Card className="bg-dark text-white span-12">
                <img src={imgUrl} alt="" width={500} className="align-self-center" />
                <Card.Body>
                  <Card.Text className="h1 justify-content-end">
                    {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
                  </Card.Text>

                  <Card.Text>
                    Height:
                    {' '}
                    {dmToMeters(data.height)}
                    m
                  </Card.Text>

                  <Card.Text>
                    {' '}
                    Weight:
                    {' '}
                    {gTokg(data.weight)}
                    kg
                  </Card.Text>
                  <br />
                  <Table striped bordered hover variant="dark">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Move</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.moves.map(({ move }, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>
                            <span
                              onClick={() => console.log(move.url)}
                              style={{ cursor: 'pointer' }}
                            >
                              {move.name.charAt(0).toUpperCase()
                                + move.name.replace(/-/g, ' ').slice(1)}
                            </span>

                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>

                  <LinkContainer to="/">
                    <Button
                      variant="primary"
                      className="mt-3"
                    >
                      Back
                    </Button>
                  </LinkContainer>
                </Card.Body>
              </Card>
            </>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default SinglePokemon
