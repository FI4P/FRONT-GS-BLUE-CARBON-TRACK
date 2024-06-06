import { useState, useEffect } from 'react'
import './styles.scss'
import InputLogin from "../../components/InputLogin"
import enviroment from "../../assets/svg/enviroment.svg"
import SubmitButton from "../../components/submitButton"
import { insertNewUser, authUser } from '../../models/User'
import { generateId } from '../../hooks/helper'
import { toast } from 'react-toastify'
import PromiseMessage from '../../components/toastContainer'
import {useNavigate } from 'react-router-dom';



const Login = ({ hasAccount }) => {

    const [signUp, setSingUp] = useState(hasAccount)
    const [loginInfo, setLoginInfo] = useState({ email: '', password: '' })
    const navigate = useNavigate()

    const handleChangeStatus = () => {
        if (!signUp) {
            setSingUp(true)
        } else {
            setSingUp(false)
        }
    }

    //Manipula o Login

    const handleLoginInfos = (e, type) => {

        const value = e.target.value;
        setLoginInfo(prevState => ({
            ...prevState,
            [type]: value
        }));

    }

    const handleRegister = async (userData) => {
        try {
            const res = await insertNewUser(userData)
            if(res.status == "success") {
                setLoginInfo({email : '', password: ''});
                toast.success("Cadastro realizado com sucesso!")
                setSingUp(!signUp)

            }else{
                console.log(res.errorMessage)
                toast.error(res.errorMessage)
            }
        } catch (error) {
            console.log(error)
        }
    }


    const handleUserAuthentication = async (userData) => {
        try{
            const res = await authUser(userData)
            if(res.status == "success"){
                setLoginInfo({email : '', password: ''});
                toast.success("Login efetuado com sucesso, você será redirecionado!")
                setTimeout(()=> {
                    navigate("/home")
                }, 2500 )
            }else{
                toast.error(res.errorMessage)
            }
        }catch(error){
            console.log(error)
        }
    }

    return (
        <>  
            <PromiseMessage></PromiseMessage>
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
                            handleLoginInfos(e, "email")
                        }}
                        value={loginInfo.email}


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
                                onClick={() => { handleRegister(loginInfo) }}

                            />

                            <p>Já possui uma conta? <button onClick={handleChangeStatus}>Faça login.</button></p>

                        </>



                    ) : (
                        <>
                            <SubmitButton
                                btnWidth="100%"
                                background="#2F92FF"
                                text="Entrar"
                                onClick={()=> { handleUserAuthentication(loginInfo)}}   

                            />

                            <p>Não possui uma conta? <button onClick={handleChangeStatus}>Cadastre-se.</button></p>


                        </>

                    )}


                </div>
            </div>


        </div>
        
        </>
        

    )
}


export default Login