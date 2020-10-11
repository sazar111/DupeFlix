import React, { useState, useEffect } from 'react';
import "./Nav.css"

function Nav(){
    const [show,handleShow]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",() => {
            if (window.scrollY > 100){
                handleShow(true);
            }
            else handleShow(false);
        });
        return() =>{
        window.removeEventListener("scroll");
        };
    },[]);

    return (
        <div className= {`nav ${show && "nav_black" }`}>
            <img 
            className="nav_logo"
            src= "http://pngimg.com/uploads/walt_disney/walt_disney_PNG11.png"
            alt="Logo" />
        </div>
    )
}

export default Nav;