import React from 'react'


import odinLogo from '../assets/odinlogo.png';

const Navbar = () => {
  return (
    <nav className="p-4 fixed">
      <img src={odinLogo} alt="logo" className='w-32 ml-5 mt-5' />
    </nav>
  )
}

export default Navbar