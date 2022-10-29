
import React from "react";
import {
    Route,
    Link,
    Routes
} from "react-router-dom";
import Contact from './Contact'
import About from "./About";
import Projects from "./Projects";
function MyNavbar() {
    return (

        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
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