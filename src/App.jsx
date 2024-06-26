import { Outlet, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { isUserLogged } from "./models/User"
import "./index.scss"
import 'react-multi-carousel/lib/styles.css';




function App() {
  const navigate = useNavigate()
  const [loginState, setLoginState] = useState(false);
useEffect(() => {
    isUserLogged().then(userLogged => {
      if (!userLogged) {
        console.log(userLogged)
        setLoginState(true)
        navigate("/home")
      } else {
        navigate("/login")
      }
    })
  }, []) 
  return (
    <>
      <Outlet />

    </>
  )
}

export default App
