import React, { Component } from "react"
import { NavbarALoginContainer, NavbarBLoginLogo } from "./Navbar.BLoginElements"

export default class NavbarALogin extends Component {

    render() {
        return (
            <>
                <NavbarALoginContainer>
                    <NavbarBLoginLogo to="/">
                        Blooger
                    </NavbarBLoginLogo>
                </NavbarALoginContainer>
            </>
        )
    }
}