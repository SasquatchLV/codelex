import './button.scss'

const buttonDetails = [
  {
    id: '1',
    title: 'Button 1',
    backgroundColor: 'orange',
  },
  {
    id: '2',
    title: 'Button 2',
    backgroundColor: 'blue',
  },
  {
    id: '3',
    title: 'Button 3',
    backgroundColor: 'green',
  },
  {
    id: '4',
    title: 'Button 4',
    backgroundColor: 'teal',
  },
]

type ButtonProps = {
  color: string,
  name: string,
  size: string | undefined,
}

const Button = ({ color, name, size }: ButtonProps) => (
  <button className={`btn ${color} ${size}`}>{name}</button>
)

const ButtonArray = () => (
  <div className="button-container">
    {
        buttonDetails.map((btn) => (
          <button
            className="btn"
            style={{ backgroundColor: btn.backgroundColor }}
            key={btn.id}
          >
            {btn.title}
          </button>
        ))
      }
  </div>

)

export { Button, ButtonArray }
