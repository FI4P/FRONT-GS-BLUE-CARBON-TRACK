import {} from "react"

import InputLogin from "../../components/InputLogin"

const Home = () =>{
    
    return (
        <>

            <h1>HOME PAGE</h1>
            <InputLogin 
                inputType="text"
                placeholder="login"
                inputId="loginInput"
                inputWidth="400px"
                
            />
         
        </>
    )

}


export default Home