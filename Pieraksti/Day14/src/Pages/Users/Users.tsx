import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserType, getUsers } from '../../Data/UserData'

const Users = () => {
  const [visibleUsers, setVisibleUsers] = useState<UserType[]>()
  const navigation = useNavigate()

  useEffect(() => {
    const users = getUsers()
    setVisibleUsers(users)
  }, [])

  return (
    <div>
      <h1>Users Page</h1>
      <div>
        {visibleUsers && visibleUsers.map(({ id, username }) => (
          <div key={id}>
            <span>{id}</span>
            <span>{username}</span>
            <button onClick={() => navigation(`/users/${id}`)}>Read more</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users
