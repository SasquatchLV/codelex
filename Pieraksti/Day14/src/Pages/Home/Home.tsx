import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1 className="heading">Home Page</h1>
    </div>
  )
}

export default Home
