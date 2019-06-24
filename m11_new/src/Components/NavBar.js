import React from 'react'
import { Link } from 'react-router-dom'

 class NavBar extends React.Component{
    render(){
        return(
            <div className="navbar">
                <img src="https://firebasestorage.googleapis.com/v0/b/m-11-25231.appspot.com/o/logo3.png?alt=media&token=6c3658ee-2bc3-4e3f-9579-ac4dc47a7039" className="navbar_logo" alt="Logo"></img>
                <nav className="navbar_items">
                    <Link to="/" className="navbar_items_a" duration={500}>START</Link>
                    <Link to="/" className="navbar_items_a" duration={500}>OFERTA</Link>
                    <Link to="/" className="navbar_items_a" duration={500}>KONTAKT</Link>
                </nav>
            </div>
        )
    }
};
export default NavBar;