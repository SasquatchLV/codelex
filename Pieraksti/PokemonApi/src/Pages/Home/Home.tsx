import { useEffect, useState } from 'react'
import {
  Button, Col, Container, Row, Spinner,
} from 'react-bootstrap'
import InfiniteScroll from 'react-infinite-scroll-component'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import { useGetAllPokemonsQuery, useGetPokemonNextQuery } from '../../store/reducers/pokemonReducer'

type PokeType = {
  name: string
  url: string
}

const Home = () => {
  const imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'
  const [pokemons, setPokemons] = useState<PokeType[]>([])
  const { data, isLoading, isSuccess } = useGetAllPokemonsQuery()
  const [nextPage, setNextPage] = useState<string | undefined>('')
  const newPokemons = useGetPokemonNextQuery(nextPage)

  useEffect(() => {
    if (isSuccess) {
      setPokemons([...data.results])
      setNextPage(data?.next.split('/').pop())
    }
  }, [data])

  const fetchData = () => {
    if (!newPokemons.isLoading && newPokemons.isSuccess) {
      setPokemons([...pokemons, ...newPokemons.data?.results])
      setNextPage(newPokemons.data?.next.split('/').pop())
    }
  }

  return (
    <Container>

      {isLoading && (
        <>
          <Row className="d-flex justify-content-center justify-content-md-between gap-3 mb-5">
            <Col className="d-flex justify-content-center gap-3 mb-5">
              <Spinner animation="grow" variant="primary" />
              <Spinner animation="grow" variant="secondary" />
              <Spinner animation="grow" variant="success" />
            </Col>
          </Row>
        </>
      )}

      {
        pokemons && (
          <InfiniteScroll
            dataLength={pokemons.length}
            style={{ overflow: 'inherit' }} // To put endMessage and loader to the top.
            next={fetchData}
            hasMore={!!nextPage}
            loader={<h4>Loading...</h4>}
            endMessage={(
              <p className="heading">
                <b>Yay! You have seen it all</b>
              </p>
            )}
          >
            <Row className="d-flex justify-content-center justify-content-md-between gap-3 mb-5">
              {pokemons.map(({ name, url }) => {
                const arr = url.split('/')
                const id = arr[arr.length - 2]
                return (

                  <PokemonCard
                    key={name}
                    name={name}
                    url={url}
                    imgLink={`${imgUrl}/${id}.png`}
                  />

                )
              })}
            </Row>
          </InfiniteScroll>

        )
      }

    </Container>
  )
}

export default Home
