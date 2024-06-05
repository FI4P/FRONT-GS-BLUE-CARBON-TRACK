import { useState, useEffect } from 'react'
import './styles.scss'
import InputLogin from "../../components/InputLogin"
import enviroment from "../../assets/svg/enviroment.svg"
import SubmitButton from "../../components/submitButton"



const Login = ({ hasAccount }) => {

    const [signUp, setSingUp] = useState(hasAccount)
    const [loginInfo, setLoginInfo] = useState({login: '', password: ''})

    const handleChangeStatus = () => {
        if(!signUp){
            setSingUp(true)
        }else{
            setSingUp(false)
        }
    }

    const handleLoginInfos  = (e, type) => {
        
        if(type == "login"){
            const login = e.target.value
            setLoginInfo({...loginInfo, login})
        }

        if(type == "psw"){
            const password = e.target.value
            setLoginInfo({...loginInfo, password})
        }
        
    } 

    console.log(loginInfo)

    



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
                        handleLogin={(e) => {
                            handleLoginInfos(e, "login")
                        }}

                    />

                    <InputLogin
                        inputType="password"
                        placeholder="Password"
                        inputId="password"
                        inputWidth="100%"
                        handleLogin={(e) => {
                            handleLoginInfos(e, "psw")
                        }}

                    />

                    {!signUp ? (
                        <>

                            <SubmitButton
                                btnWidth="100%"
                                background="#2F92FF"
                                text="Cadastre-se"

                            />

                            <p>Já possui uma conta? <button onClick={handleChangeStatus}>Faça login.</button></p>

                        </>



                    ) : (
                        <>
                            <SubmitButton
                                btnWidth="100%"
                                background="#2F92FF"
                                text="Entrar"

                            />

                            <p>Não possui uma conta? <button onClick={handleChangeStatus}>Cadastre-se.</button></p>


                        </>

                    )}


                </div>
            </div>


        </div>

    )
}


export default Login