import React, { Component } from "react"
import FooterBLogin from "../Footer/Footer.BLogin"
import InfoBLoginContent from "../Info/Info.BLogin.Content"
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from "../Info/Info.BLogin.Data"
import InfoBLogin from "../Info/Info.BLogin.Header"
import NavbarBLogin from "../Navbar/Navbar.BLogin"
import SidebarBLogin from "../Sidebar/Sidebar.BLogin"

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle () {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return(
            <>
                <NavbarBLogin toggle={this.toggle} />
                <SidebarBLogin isOpen={this.state.isOpen} toggle={this.toggle} />
                <InfoBLogin />
                <InfoBLoginContent {...homeObjOne} />
                <InfoBLoginContent {...homeObjTwo} />
                <InfoBLoginContent {...homeObjThree} />
                <InfoBLoginContent {...homeObjFour} />
                <InfoBLoginContent {...homeObjFive} />
                <FooterBLogin />
            </>
        )
    }
}