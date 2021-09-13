import React from "react";
import { NavLink } from "react-router-dom";

function MainMenu() {
    return (
        <header className="main-header">
            <div className="ed-grid s-grid-5 lg-grid-4">
                <div className="s-cols-4 lg-cols-1 s-cross-center">
                    <a href="/">
                        <img src="https://ed.team/images/logo/logo.svg" alt="logo" className="main-logo" />
                    </a>
                </div>
                <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end">
                    <nav className="main-menu" id="main-menu">
                        <ul>
                            <li>
                                <NavLink exact to="/" activeClassName="activo">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/cursos" activeClassName="activo">Cursos</NavLink>
                            </li>
                            <li>
                                <NavLink to="/form" activeClassName="activo">Formulario</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
                </div>
            </div>
        </header>
    )
}

export default MainMenu