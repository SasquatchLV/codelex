import { useEffect, useState } from 'react'
import {
  Button, Col, Container, Form, Row, Spinner,
} from 'react-bootstrap'
import { useGetAllCurrenciesQuery, useGetSingleCurrencyQuery, CurrenciesType } from '../../store/reducers/currencyApi'

const Home = () => {
  const { data, isLoading, isSuccess } = useGetAllCurrenciesQuery()
  const [currencies, setCurrencies] = useState<CurrenciesType[]>()
  const [selectedCurrency, setSelectedCurrency] = useState<string>('usd')
  const singleCurrency = useGetSingleCurrencyQuery(selectedCurrency)

  useEffect(() => {
    if (isSuccess && !isLoading) {
      setCurrencies(Object.entries(data).map(([key, value]) => ({ key, value })))
    }
  }, [data, isSuccess])

  console.log(singleCurrency)

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
                onChange={(e) => (
                  setSelectedCurrency(e.target.value)
                )}
                value="usd"
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
              {singleCurrency.data && singleCurrency.isSuccess && (
                <>
                  {/* Map out singleCurrency data in to array */}
                  {Object.entries(singleCurrency.data).map(([key, value]) => (
                    <p>
                      {key}
                      {' '}
                      {value}
                    </p>
                  ))}
                </>
              )}
            </Col>
          </Row>
        </>
      )}

    </Container>
  )
}

export default Home
