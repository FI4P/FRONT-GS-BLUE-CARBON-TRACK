
import { useState } from 'react'
import "./styles.scss"
import { GiBigWave } from "react-icons/gi";
import { Link } from 'react-router-dom';



const NavBar = () => {

  return (
    <>

      <nav>
        <ul className='nav-bar'>
          <Link style={{textDecoration: "none"}} to="/home">

            <li><GiBigWave className='icon'></GiBigWave></li>

          </Link>

          <Link style={{textDecoration: "none"}} to="/home">
            <li>Home</li>

          </Link>

          <Link style={{textDecoration: "none"}} to="/vessels">
            <li>Embarcações disponiveís para análise</li>
          </Link>

          <Link style={{textDecoration: "none"}} to="/report">
            <li>Análise geral de emissão das Embarcações</li>
          </Link>


        </ul>

        <Link  style={{textDecoration : "none"}} to="/login">
          <span>Sair</span>
        </Link>
      </nav>

    </>
  )
}

export default NavBar

