import { useEffect, useState } from 'react'
import {
  Button, Col, Container, Row, Spinner, Table,
} from 'react-bootstrap'
import { useGetAllCurrenciesQuery, CurrenciesType } from '../../store/reducers/currencyApi'

const Home = () => {
  const { data, isLoading, isSuccess } = useGetAllCurrenciesQuery()
  const [currencies, setCurrencies] = useState<CurrenciesType[]>()

  useEffect(() => {
    if (isSuccess && !isLoading) {
      setCurrencies(Object.entries(data).map(([key, value]) => ({ key, value })))
    }
  }, [data, isSuccess])

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

      {isSuccess && (
        <>
          <Row className="d-flex justify-content-center justify-content-md-between gap-3 mb-5">
            <Col>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Currency (short)</th>
                    <th>Currency (long)</th>
                  </tr>
                </thead>
                <tbody>
                  {currencies && currencies.map((key, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{key.key}</td>
                      <td>{key.value}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </>
      )}

    </Container>
  )
}

export default Home
