import { } from "react"
import NavBar from "../../components/navbar"
import "./styles.scss"


const Home = () => {

    return (
        <>
            <section className="home">
                <NavBar></NavBar>

                <div className="resume">
                    <div className="slogan">
                        <h1>Blue Carbon Track</h1>
                        <p>Rastreie e Reduza: Emissões em Tempo Real</p>
                    </div>

                    <div className="infos">
                        <p className="desc">
                            <b>Blue Carbon </b>Track é sua ferramenta para monitorar e analisar emissões de embarcações em tempo real. Usando dados da API da Searoutes, ajudamos a reduzir a pegada de carbono nos oceanos.
                        </p>


                        <div className="btn-infos">
                            <button className="btn-info2">Experimente!</button>
                            <button className="btn-info">Saiba mais!</button>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )

}


export default Home