import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';

const Nav = () => {
  return (
    <>
    <div className='header'>
        <div className='logo'>
            <h2>C<span>T</span></h2>
        </div>
        <ul>
          <BrowserRouter>
          <li><Link className='link' href='#'>Home</Link></li>
          <li><Link className='link' href='#'>Product</Link></li>
          <li><Link className='link' href='#'>About</Link></li>
          <li><Link className='link' href='#'>Contact</Link></li>
          </BrowserRouter>
        </ul>
    </div>
    </>
  )
}

export default Nav