
import { useState } from 'react'
import "./styles.scss"
import { GiBigWave } from "react-icons/gi";
import { Link } from 'react-router-dom';



const NavBar = () => {

  return (
    <>

      <nav>
        <div className="company">
          <GiBigWave></GiBigWave>
          <span>Blue Carbon Track</span>
        </div>

        <ul>
          <Link to="/home" className='link'>
            <li>Home</li>
          </Link>
          <Link to="/vessels" className='link'>
            <li>Embarcações</li>
          </Link>
          <Link to="/report" className='link'>
            <li>Relatorio de emissões</li>
          </Link>
          <Link to="/login" className='link'>
            <button className='signOut'>Sign out</button>
          </Link>
        </ul>
      </nav>

    </>
  )
}

export default NavBar

