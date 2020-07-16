import React from "react";
import NavigationBar from "../navbar/Navigation-Bar";

/**
 * @function Header => Encapsulation of all header elements.
 */
const Header: React.FC = () => {
    return (
        <header>
            <NavigationBar />
        </header>
    );
}

export default Header;