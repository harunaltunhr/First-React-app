import React, { useState } from 'react';
import Contact from './Contact'
import About from "./About";
import Projects from "./Projects";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import {
    Route,
    Routes
} from "react-router-dom";
import Home from './home';

function MyNavbar(props) {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <Navbar color="faded" light>
                <NavbarBrand href="/" className="me-auto">
                    Harun Altun
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="me-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/projects">
                                Projects
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">
                                Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <Routes>
                <Route path="/"
                    element={<Home />} />
                <Route path="/about"
                    element={<About />} />
                <Route path="/projects"
                    element={<Projects />} />
                <Route path="/contact"
                    element={<Contact />} />
            </Routes>
        </div>
    );
}

export default MyNavbar;



