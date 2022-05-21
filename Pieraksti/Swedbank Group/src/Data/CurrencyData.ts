import { CurrencyType } from '../Models/CurrencyModel'

const allCurrencies: CurrencyType[] = [
  {
    id: 1,
    currency: 'EUR',
    isActive: false,
  },
  {
    id: 2,
    currency: 'PLN',
    isActive: false,
  },
  {
    id: 3,
    currency: 'GEL',
    isActive: false,
  },
  {
    id: 4,
    currency: 'DKK',
    isActive: false,
  },
  {
    id: 5,
    currency: 'CZK',
    isActive: false,
  },
  {
    id: 6,
    currency: 'GBP',
    isActive: false,
  },
  {
    id: 7,
    currency: 'SEK',
    isActive: false,
  },
  {
    id: 8,
    currency: 'USD',
    isActive: false,
  },
  {
    id: 9,
    currency: 'RUB',
    isActive: false,
  },
]

export const getCurrencies = () => allCurrencies
export const getCurrency = (id: number) => allCurrencies.find((cur) => cur.id === id)

export default allCurrencies
