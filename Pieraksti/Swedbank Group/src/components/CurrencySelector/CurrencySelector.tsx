import { useEffect, useState } from 'react'
import { CurrencyType } from '../../Models/CurrencyModel'
import { getCurrencies } from '../../Data/CurrencyData'
import styles from './CurrencySelector.module.scss'

const CurrencySelector = () => {
  const [currencies, setCurrencies] = useState<CurrencyType[]>([])
  const activeCurrencies = currencies.filter((currency) => currency.isActive)

  const toggleIsActive = (id: number) => {
    setCurrencies(
      currencies.map((c) => {
        if (c.id === id) {
          return { ...c, isActive: !c.isActive }
        }
        return c
      }),
    )
  }

  useEffect(() => {
    const allCurrencies = getCurrencies()
    setCurrencies(allCurrencies)
  }, [])

  return (
    <div className={styles.currencyContainer}>
      {activeCurrencies.length > 0 && (
        <div className={styles.currencies}>
          {activeCurrencies.map(({ id, currency, isActive }) => (
            <div
              key={id}
              className={styles.currencies__currency}
              data-topactive={isActive}
            >
              {currency}
              <button
                className={styles.currency__close}
                onClick={() => {
                  toggleIsActive(id)
                }}
              >
                X
              </button>
            </div>
          ))}
        </div>
      )}

      <div className={styles.currencies}>
        {currencies.map(({ id, currency, isActive }) => (
          <div
            key={id}
            className={styles.currencies__currency}
            onClick={() => {
              toggleIsActive(id)
            }}
            data-isactive={isActive}
          >
            <div>
              <input
                className={styles.input}
                type="checkbox"
                checked={isActive}
                readOnly
              />
            </div>
            {currency}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CurrencySelector
