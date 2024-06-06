import { Outlet, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { isUserLogged } from "./models/User"
import "./index.scss"


function App() {
  // const navigate = useNavigate()
  // useEffect(()=> {
  //   isUserLogged().then(userLogged => {
  //     !userLogged ?  navigate("/home") :navigate("/login")
  //   })
  // }, [])  
  return (
    <>

      <Outlet/>
  
    </>
  )
}

export default App
