
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
          <Link className='link'>
            <li>Home</li>
          </Link>
          <Link className='link'>
            <li>Embaracções</li>
          </Link>
          <Link className='link'>
            <li>Relatorio de emissões</li>
          </Link>
          <Link className='link'>
            <button className='signOut'>Sign out</button>
          </Link>
        </ul>
      </nav>

    </>
  )
}

export default NavBar

