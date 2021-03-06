import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UserType, getUser } from '../../Data/UserData'

const User = () => {
  const [currentUser, setCurrentUser] = useState<UserType>()
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const user = getUser(Number(id))
    if (user) {
      setCurrentUser(user)
    } else {
      navigate('/users')
    }
  }, [])

  return (
    <div>
      Username:
      {' '}
      {currentUser && currentUser.username}
    </div>
  )
}

export default User
