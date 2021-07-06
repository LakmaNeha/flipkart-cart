import React from 'react'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="navbar">
            <Link style={{textDecoration:"none"}} to="/" ><h3 className="title">Flipkart</h3></Link>
            <div className="searchComponent">
                <input type="search" placeholder="search for products, brands and more"></input>
                
                <SearchIcon
                  className="icon"
                  style={{ fontSize: 30 }}
                />
            </div>
            
            <button className="login">Login</button>
            <Link to="/cart" ><ShoppingCartIcon 
                  style={{ fontSize: 40, color: "white" }}
                /></Link>
            
        </div>
    )
}
