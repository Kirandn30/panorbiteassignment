import React from "react"
import useFetch from "./hooks/useFetch";
import { useSelector } from "react-redux";
import { RootState } from "./redux";
import { Loader } from "./components/Loader";
import { Routes, Route } from "react-router-dom"
import { ErrorComponent } from "./components/ErrorComponent";
import Profile from "./Routes/Profile";
import NavBar from "./components/NavBar";
import { Main } from "./Routes/Main";
import UserSelection from "./components/UserSelection";
import { ComingSoon } from "./components/ComingSoon";

function App() {
  const { error } = useFetch('https://panorbit.in/api/users.json');
  const { loading,selectedUser } = useSelector((state: RootState) => state.Users)

  if (loading) return <Loader />
  if (error) return <ErrorComponent />
  if (!selectedUser) return <UserSelection/>

  return (
    <NavBar>
      <Routes>
        <Route path="/view" element={ <Main/>}>
          <Route path=":user" Component={Profile} />
          <Route path=":user/posts" Component={ComingSoon} />
          <Route path=":user/gallery" Component={ComingSoon} />
          <Route path=":user/todo" Component={ComingSoon} />
       </Route>
      </Routes>
    </NavBar>
  )
}

export default App
