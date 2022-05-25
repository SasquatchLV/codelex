import { useEffect, useState } from 'react'
import {
  Col, Container, Form, Row, Spinner, Table,
} from 'react-bootstrap'
import {
  useGetAllCurrenciesQuery, useGetSingleCurrencyQuery, CurrenciesType,
} from '../../store/reducers/currencyApi'

const Home = () => {
  const { data, isLoading, isSuccess } = useGetAllCurrenciesQuery()
  const [currencies, setCurrencies] = useState<CurrenciesType[]>()
  const [selectedCurrency, setSelectedCurrency] = useState<string>('usd')
  const [tradeValue, setTradeValue] = useState<CurrenciesType[]>()
  const singleCurrency = useGetSingleCurrencyQuery(selectedCurrency)

  useEffect(() => {
    if (isSuccess && !isLoading) {
      setCurrencies(Object.entries(data).map(([key, value]) => ({ key, value })))
    }
  }, [data, isSuccess])

  useEffect(() => {
    if (singleCurrency.isSuccess && !singleCurrency.isLoading) {
      const singleData = Object.values(singleCurrency.data)[1]
      setTradeValue(Object.entries(singleData).map(([key, value]) => ({ key, value })))
    }
  }, [singleCurrency])

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
          <Row className="d-flex justify-content-center gap-3 mb-5">
            <Col xs={4}>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => {
                  setSelectedCurrency(e.target.value)
                }}
                value={selectedCurrency}
              >
                {currencies && currencies.map((key, index) => (
                  <option
                    key={key.key}
                    value={key.key}
                  >
                    (
                    {key.key.toUpperCase()}
                    )
                    {' '}
                    {key.value}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Currency</th>
                    <th>Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {tradeValue && tradeValue.map((key, index) => (
                    <tr key={key.key}>
                      <td>{index + 1}</td>
                      <td>{key.key.toUpperCase()}</td>
                      <td>
                        {key.value}
                      </td>
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
