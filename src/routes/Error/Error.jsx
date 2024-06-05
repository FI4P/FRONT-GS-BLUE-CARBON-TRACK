import { } from "react"
import { Link } from 'react-router-dom'

import './Error.css'

const Error = () => {
    return (
        <div id="error-page">
            <h1>Erro - página não encontrada!</h1>
            <Link to="/">Voltar para o site</Link>
        </div>
    )
}


export default Error