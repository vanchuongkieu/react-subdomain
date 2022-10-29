import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Users = (props: Props) => {
  return (
    <div>
      <h1>Users</h1>
      <Link to="/list">List</Link>
    </div>
  )
}

export default Users