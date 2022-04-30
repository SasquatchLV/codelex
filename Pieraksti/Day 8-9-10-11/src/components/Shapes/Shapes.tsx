import './Shapes.scss'
import { FC } from 'react'

type ShapeProps = {
  rounded: boolean,
  color: string,
  text: string
}

const Shapes: FC<ShapeProps> = ({
  rounded, color, text,
}) => (
  <div
    key={Math.random()}
    className={`shape ${rounded ? 'rounded' : ''}`}
    style={{ backgroundColor: color }}
  >
    {text && text ? text : <em>Empty</em>}
  </div>
)

export default Shapes
