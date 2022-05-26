import { useEffect, useState } from 'react'
import {
  Col, Container, Form, FormControl, InputGroup, Row, Spinner, Table,
} from 'react-bootstrap'
import {
  useGetAllCurrenciesQuery, useGetSingleCurrencyQuery, CurrenciesType,
} from '../../store/reducers/currencyApi'

const Compare = () => {
  const { data, isLoading, isSuccess } = useGetAllCurrenciesQuery()
  const [currencies, setCurrencies] = useState<CurrenciesType[]>()
  const [selectedOne, setSelectedOne] = useState<string>('usd')
  const [selectedTwo, setSelectedTwo] = useState<string>('eur')
  const [tradeValue, setTradeValue] = useState<string>()
  const [currValue, setCurrValue] = useState<number>(1)
  const compareValue = useGetSingleCurrencyQuery(`${selectedOne}/${selectedTwo}`)

  useEffect(() => {
    if (isSuccess && !isLoading) {
      setCurrencies(Object.entries(data).map(([key, value]) => ({ key, value })))
    }
  }, [data, isSuccess])

  useEffect(() => {
    if (compareValue.isSuccess && !compareValue.isLoading) {
      const singleData = Object.values(compareValue.data)[1]
      setTradeValue(singleData)
    }
  }, [compareValue])

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
            <Col xs={2}>
              <InputGroup className="p-0 m-0">
                <FormControl
                  type="number"
                  min={1}
                  value={currValue}
                  onChange={(e) => {
                    setCurrValue(parseFloat(e.target.value))
                  }}
                />
              </InputGroup>
            </Col>
            <Col xs={4}>
              <Form.Select
                onChange={(e) => {
                  setSelectedOne(e.target.value)
                }}
                value={selectedOne}
              >
                {currencies && currencies.map((key) => (
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
            To
            <Col xs={4}>
              <Form.Select
                onChange={(e) => {
                  setSelectedTwo(e.target.value)
                }}
                value={selectedTwo}
              >
                {currencies && currencies.map((key) => (
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
          <h1 className="text-center">
            {currValue}
            {' '}
            {selectedOne.toUpperCase()}
            {' '}
            =
            {' '}
            {tradeValue && Number(tradeValue) * currValue}
            {' '}
            {selectedTwo.toUpperCase()}
          </h1>
        </>
      )}

    </Container>
  )
}

export default Compare
