import { useState, useEffect } from 'react'
import './styles.scss'
import InputLogin from "../../components/InputLogin"
import enviroment from "../../assets/svg/enviroment.svg"
import SubmitButton from "../../components/submitButton"
import { insertNewUser } from '../../models/User'
import { generateId } from '../../hooks/helper'



const Login = ({ hasAccount }) => {

    const [signUp, setSingUp] = useState(hasAccount)
    const [loginInfo, setLoginInfo] = useState({ login: '', password: '' })
    const [userData, setUserData] = useState({})

    const handleChangeStatus = () => {
        if (!signUp) {
            setSingUp(true)
        } else {
            setSingUp(false)
        }
    }

    const handleLoginInfos = (e, type) => {

        const value = e.target.value;
        setLoginInfo(prevState => ({
            ...prevState,
            [type]: value
        }));

    }

    useEffect(() => {

    }, [handleLoginInfos])


    const handleRegister = async (nodePath, userData) => {
        try {
            const res = await insertNewUser(nodePath, userData)
            if(res == "success") {
                setLoginInfo({login : '', password: ''})
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleNewUser = () => {
        const userId = generateId()
        const nodePath = `usuarios/${userId}`
        const userData = {
            id: userId,
            login: loginInfo.login,
            password: loginInfo.password
        }

        handleRegister(nodePath, userData)


    }

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
                        value={loginInfo.login}


                    />

                    <InputLogin
                        inputType="password"
                        placeholder="Password"
                        inputId="password"
                        inputWidth="100%"
                        handleLogin={(e) => {
                            handleLoginInfos(e, "password")
                        }}
                        value={loginInfo.password}
                    />

                    {!signUp ? (
                        <>

                            <SubmitButton
                                btnWidth="100%"
                                background="#2F92FF"
                                text="Cadastre-se"
                                onClick={() => { handleNewUser() }}

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