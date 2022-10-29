import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const UsersList = (props: Props) => {
  return (
    <div>
      <h1>UsersList</h1>
      <Link to="/">Users</Link>
    </div>
  )
}

export default UsersList