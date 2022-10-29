import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Teachers = (props: Props) => {
  return (
    <div>
      <h1>Teachers</h1>
      <Link to="/list">List</Link>
    </div>
  )
}

export default Teachers