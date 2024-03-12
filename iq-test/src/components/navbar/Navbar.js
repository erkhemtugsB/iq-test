import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='nav-container'>
      <Link to='/' className='logo-main'>
              <h1 to='/'>Монгол IQ тэст</h1>
      </Link>
      <div className='nav-wrapper'>
        <Link to="/iqtest">
          <button>IQ Тэст</button>
        </Link>
        <Link to="/yalgaag-ol">
          <button>Ялгааг ол</button>
          </Link>
        <Link to="/zan-avir">
          <button>Зан авир</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar