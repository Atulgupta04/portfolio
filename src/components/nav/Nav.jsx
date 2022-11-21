import React from 'react'
import nav from './nav.css'
import {AiOutlineHome} from'react-icons/ai'
import {AiOutlineProject } from 'react-icons/ai'
import {RiMessageFill} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>

      <a href="#" onClick={ () => setActiveNav('#') } className={activeNav === '#' ? 'active' : ''}> <AiOutlineHome /> </a>
      <a href="#projects" onClick={ () => setActiveNav('#projects') } className={activeNav === '#projects' ? 'active' : ''}> <AiOutlineProject/> </a>
      <a href="#contact" onClick={ () => setActiveNav('#contact') } className={activeNav === '#contact' ? 'active' : ''}> <RiMessageFill /> </a>
    </nav>

  )
}

export default Nav