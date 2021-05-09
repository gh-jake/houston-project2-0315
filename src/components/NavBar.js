import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
    width: '100px', 
    padding: '12px',
    margin: '0 6px 6px',
    background: 'white',
    textDecoration: 'none',
    color: 'black'
  }

const NavBar = () => {
    return (
        <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
            <NavLink
                to="/"
                exact
                style={link}
                activeStyle={{ 
                    background: 'green', 
                    color: 'white'
                }}
            >
            Home
            </NavLink>
            <NavLink
                to="/search"
                style={link}
                activeStyle={{ 
                    background: 'green', 
                    color: 'white'
                }}
            >
            Search
            </NavLink>
            <NavLink
                to="/mybooks"
                style={link}
                activeStyle={{ 
                    background: 'green', 
                    color: 'white'
                }}
            >
            My Books
            </NavLink>
            <br></br><br></br>
        </div>
    )
}

export default NavBar;