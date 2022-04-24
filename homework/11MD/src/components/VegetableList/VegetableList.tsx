import './VegetableList.scss'
import { FC } from 'react'
import VegetableCard from '../VegetableCard/VegetableCard'

const vegetables = [
  {
    id: '1',
    title: 'Cucumber',
    description: 'It is green',
    backgroundColor: 'green',
    available: true,
  },
  {
    id: '2',
    title: 'Carrot',
    description: 'It is orange',
    backgroundColor: 'orange',
    available: false,
  },
  {
    id: '3',
    title: 'Sweet pepper',
    description: 'It is in many colors',
    backgroundColor: 'yellow',
    available: true,
  },
]

const VList: FC = () => (
  <div
    key={Math.random()}
    className="vlist"
  >
    {vegetables
      .map(({
        id, title, description, backgroundColor, available,
      }) => (
        <VegetableCard
          key={id}
          id={id}
          title={title}
          description={description}
          backgroundColor={backgroundColor}
          available={available}
          clickHandler={() => { console.log(`Card ID: ${id} clicked`) }}
        />
      ))}
  </div>
)

const VList2: FC = () => (
  <div
    key={Math.random()}
    className="vlist"
  >
    {vegetables
      .filter(({ available }) => available)
      .map(({
        id, title, description, backgroundColor, available,
      }) => (
        <VegetableCard
          key={id}
          id={id}
          title={title}
          description={description}
          backgroundColor={backgroundColor}
          available={available}
          clickHandler={() => { console.log(`Card ID: ${id} clicked`) }}
        />
      ))}
  </div>
)

export { VList, VList2 }
