import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const TeacherList = (props: Props) => {
  return (
    <div>
      <h1>Teachers List</h1>
      <Link to="/">Teachers</Link>
    </div>
  )
}

export default TeacherList