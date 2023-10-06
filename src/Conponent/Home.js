import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../asset/logo.jpg';
//rfce để tạo nhanh cấu trúc
import '../styles/Home.css';

function Home() {
  return (
    <div className="navbar">
        <div className="leftSide">
            <img src={logo}/>
        </div>
        <div className="rightSide">
            <Link to='/Home'> Home</Link>
            <Link to='/New-Arrival'> New-Arrival</Link>
            <Link to='/Men'> Men</Link>
            <Link to='/ Women'> Women</Link>
            <Link to='/Blog'> Blog</Link>
            <Link to='/Search'>Search</Link>
            <Link to='/Mybag' >Mybag</Link>

            
            
        </div>
      
    </div>
  )
}

export default Home
