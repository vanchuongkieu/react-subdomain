import { Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import Users from "../components/Users"
import Teachers from "../components/Teachers"
import UsersList from "../components/UsersList"
import TeacherList from "../components/TeacherList"

export const MainRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
        </Routes>
    )
}

export const UsersRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Users />}/>
            <Route path="/list" element={<UsersList />}/>
        </Routes>
    )
}

export const TeachersRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Teachers />}/>
            <Route path="/list" element={<TeacherList />}/>
        </Routes>
    )
}