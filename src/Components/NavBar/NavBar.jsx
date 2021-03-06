import React from 'react'
import { Link } from "react-router-dom";
import "./NavBar.css"
import logo from '../../assets/Images/logo.png'
import Login from '../../Pages/Login/Login';
import Home from '../../Pages/Home/Home';

const NavBar = () => {
    return ( 
    <div >
        <div class = "m-4" >
        <nav class = "navbar navbar-expand-lg navbar-dark " >
        <a href = "/"class = "navbar-brand" >
        <img class = "img-fluid" src = { logo }height = "auto"alt = "GEMINT" > 
        </img> 
        </a> <button class = "navbar-toggler"type = "button" data-bs-toggle = "collapse" data-bs-target = "#navbarSupportedContent" aria-controls = "navbarSupportedContent" aria-expanded = "false"aria-label = "Toggle navigation" >
        <span class = "navbar-toggler-icon" > </span> </button> <div class = "collapse navbar-collapse "id = "navbarSupportedContent" >
        <ul class = "navbar-nav me-auto mb-2 mb-lg-0 ms-auto" >
        <li class = "nav-item dropdown" >
        <div class = "nav-link dropdown-toggle"id = "navbarDropdown"role = "button"data-bs-toggle = "dropdown"aria-expanded = "false">
        <Link className = "link" to ="/" > Randomizer</Link> 
        </div> <ul class = "dropdown-menu" aria-labelledby = "navbarDropdown" ><li > 
        < div class = "dropdown-item" >
        <Link className = "linkDropdown" to = "/standard-with-slider" > Standard </Link></div > </li> 
        <li >
        <div class = "dropdown-item" >
        <Link className = "linkDropdown"to = "/tier" > Tier </Link>
        </div > </li> </ul> 
        </li> 
        <li class = "nav-item" >
        <div class = "nav-item nav-link active" >
        <Link className = "link" to = "/feature" > Shop </Link></div >
        </li> <li class = "nav-item" >
        <div class = "nav-item nav-link" >
        <Link className = "link"to = "/pricing" > Pricing </Link> 
        </div> </li> 
        </ul> 
        </div>
        <div class = "navbar-nav ms-auto " >
        <div class = "d-flex justify-content-between" >
        <a href = {Login} class = "abtn" > PREMIUM </a> 
        <Link class = "abtn" to="/login"> LOGIN </Link> 
        </div> 
        </div> 
        </nav> 
        </div> 
        </div>
    )
}

export default NavBar