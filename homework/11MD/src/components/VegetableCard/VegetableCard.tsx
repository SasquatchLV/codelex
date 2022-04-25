import './VegetableCard.scss'
import { FC } from 'react'

type VCardProps = {
  title: string,
  description: string,
  backgroundColor: string,
  available?: boolean
  clickHandler?: () => void
}

const VCard: FC<VCardProps> = ({
  title, description, backgroundColor, available, clickHandler,
}) => (
  available
    ? (
      <div
        className="vcard"
        style={{ backgroundColor }}
      >
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={clickHandler}>Read more</button>
      </div>
    )

    : <div><h2>Not Available</h2></div>
)

export default VCard
