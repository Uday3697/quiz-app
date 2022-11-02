import React from 'react'
import './Header.css'
import { BsList, BsSearch, BsPersonCircle } from "react-icons/bs";

const Header = () => {
  return (
    <div className="main-container">
      <div className="header-left">
        <div style={{ display: "flex", alignItems: "center", margin: '10px' }}>
          <BsList />
          <span style={{ marginLeft: '10px' }}>Testometrica</span>
        </div>
      </div>
      <div className="header-right">
        <div style={{ display: 'flex', alignItems: 'center' , }}>
          <div className='search-inp-con'>
            <input className='search-inp' type="text" placeholder='search ' />
            <BsSearch />
          </div>
        </div>
        <div className='dpImg'> <BsPersonCircle  /></div>
        
      </div>
    </div>
  )
}

export default Header