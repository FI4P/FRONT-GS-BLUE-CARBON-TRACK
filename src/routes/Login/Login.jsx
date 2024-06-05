import { } from "react"
import './styles.scss'
import InputLogin from "../../components/InputLogin"
import enviroment from "../../assets/svg/enviroment.svg"
import SubmitButton from "../../components/submitButton"

const Login = () => {
    return (
        <div id='login-page'>

        <img src={enviroment} alt="Logo" />
        
        <div className="login-infos">

            <div className="title">
            <h1>Blue Carbon Tracking</h1>
            <p>Navegando pelas Emissões de Carbono em Tempo Real!</p>
        </div>

        <div className="inputs">

        <InputLogin 
                inputType="text"
                placeholder="login"
                inputId="loginInput"
                inputWidth="100%"
                
            />

            <InputLogin 
                inputType="password"
                placeholder="Password"
                inputId="password"
                inputWidth="100%"
                
            />

            <SubmitButton 
                btnWidth="100%"
                background="#2F92FF"
                text="ENTRAR"
            
             />
        </div>
        </div>
            
        
        </div>
        
    )
}


export default Login