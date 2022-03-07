import React from "react"
import NavBar from "./components/NavBar/NavBar"
import MainContent from "./components/MainContent/MainContent"
import "./styles/global.css"

export default function App () {
    return(
        <React.Fragment>
            <NavBar/>
            <MainContent/>
        </React.Fragment>
    )
}