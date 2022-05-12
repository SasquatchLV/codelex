import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { User } from '../../Models/UserModel'

const UserSingle = () => {
  const [user, setUser] = useState<User>()
  const { id } = useParams()

  useEffect(() => {
    setUser()
  }, [])

  return (
    <div>
      {user && (
        <span>
          Username:
          {' '}
          {user.username}
        </span>
      )}
    </div>
  )
}

export default UserSingle
