import React from "react"
import image from "./images/react-logo.svg"
import "./styles/main.css"

export default function NavBar () {
    return(
        <nav className="nav">  
            <img className="nav--logo" src={image} alt="img"/>
            <h1 className="nav--name">React Facts</h1>
            <h3 className="nav--description">React Course - Proyect 1</h3>
        </nav>
       
    )
}