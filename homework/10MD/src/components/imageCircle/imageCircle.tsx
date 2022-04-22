import './imageCircle.scss'

type ImageCircleProps = {
  src: string,
  alt: string,
}

const ImageCircle = ({ src, alt }: ImageCircleProps) => (

  <div className="image-circle">
    <img className="image-circle__img" src={src} alt={alt} />
  </div>
)

export default ImageCircle
