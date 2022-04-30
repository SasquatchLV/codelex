import './Heading.scss'

type HeadingProps = {
  text: string
}

const Heading = ({ text }: HeadingProps) => (
  <h1 className="heading">
    {text}
  </h1>
)

export default Heading
