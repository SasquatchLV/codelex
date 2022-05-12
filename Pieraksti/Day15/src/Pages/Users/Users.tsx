import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { User } from '../../Models/UserModel'

const Users = () => {
  const [users, setUsers] = useState<User[]>()
  const [errorMessage, setErrorMessage] = useState<string>()
  const navigate = useNavigate()

  // const getUsers = () => {
  //   axios.get('https://jsonplaceholder.typicode.com/users').then((res: AxiosResponse<User[]>) => {
  //     setUsers(res.data)
  //   })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  //     .finally(() => {
  //       console.log('finally')
  //     })
  // }

  // const getUsers = () => {
  //   try {
  //     axios.get('https://jsonplaceholder.typicode.com/users').then((res: AxiosResponse<User[]>) => {
  //       setUsers(res.data)
  //     })
  //   } catch (error) {
  //     console.log(error)
  //   } finally {
  //     console.log('finally')
  //   }
  // }

  const getUsers = async () => {
    try {
      const res: AxiosResponse<User[]> = await axios.get('https://jsonplaceholder.typicode.com/users')
      setUsers(res.data)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const messasge = error.response?.status === 404 ? '404 not found' : error.message
        setErrorMessage(messasge)
      } else {
        setErrorMessage('Not axios error')
      }
    } finally {
      console.log('finally')
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div>
      <h1 className="heading">Users Page</h1>
      <div>
        {users && users.map(({ id, name, username }) => (
          <div key={id}>
            <h2>{name}</h2>
            <p>{username}</p>
            <button onClick={() => navigate(`/users/${id}`)}>Read more</button>
          </div>
        ))}
      </div>
      <div>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </div>
  )
}

export default Users
