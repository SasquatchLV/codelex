import './card.scss'

type CardProps = {
  title: string,
  description: string,
  linkText: string,
  link: string,
}

const Card = ({
  title, description, link, linkText,
}: CardProps) => (
  <div className="card">
    <div className="card__title">
      {title}
    </div>
    <div className="card__description">
      {description}
    </div>
    <a className="card__action--link" href={link}>{linkText}</a>
  </div>
)

export default Card
