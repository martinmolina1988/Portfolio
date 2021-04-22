import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.scss"
export default function Navbar() {

    return (
        <div>
            <ul>

                <h3>  Datos personales</h3>
                <li>  <Link className="link" to="/">  Sobre mi </Link></li>
                <li>  <Link className="link" to="/skills">  Mis habilidades </Link></li>
                <h3>  Mis proyectos</h3>
                <li>  <Link className="link" to="/igclon">  IgClone!</Link></li>
                <li>  <Link className="link" to="/sodulce">  SoDulce!</Link></li>
                <li>  <Link className="link" to="/projects">  Twintter</Link></li>

            </ul>

        </div>
    );

}
