import React, { useState, useEffect } from "react"
import { animateScroll as scroll } from "react-scroll"
import { FaBars } from "react-icons/fa"
import { NavbarBLoginContainer, NavbarBLoginLogo , NavbarBLoginIcon, NavbarBLoginLinksWrapper, NavbarBLoginLink, NavbarBLoginBtn, NavbarBLoginBtnLink } from "./Navbar.BLoginElements"
import ScrollToTop from "../ScrollToTop"


export default function NavbarBLogin ({toggle}) {
    const [scrollNav, setScrollNav] = useState(0);

    const changeNav = () => {
        if(window.scrollY < 0.8*window.outerHeight) {
            setScrollNav(0);
        } else if(window.scrollY >= 0.8*window.outerHeight && window.scrollY <= 1.8*window.outerHeight) {
            setScrollNav(1);
        } else if(window.scrollY > 1.8*window.outerHeight && window.scrollY <= 2.8*window.outerHeight) {
            setScrollNav(2);
        } else if(window.scrollY > 2.8*window.outerHeight && window.scrollY <= 3.8*window.outerHeight) {
            setScrollNav(3);
        } else if(window.scrollY > 3.8*window.outerHeight && window.scrollY <= 4.8*window.outerHeight) {
            setScrollNav(4);
        } else if(window.scrollY > 4.8*window.outerHeight) {
            setScrollNav(5);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }
        return(
            <>
                <ScrollToTop />
                <NavbarBLoginContainer scrollNav={scrollNav}>
                    <NavbarBLoginLogo to="/" onClick={toggleHome}>
                        Blooger
                    </NavbarBLoginLogo>
                    <NavbarBLoginIcon onClick={toggle} >
                        <FaBars />
                    </NavbarBLoginIcon>
                    <NavbarBLoginLinksWrapper>
                        <NavbarBLoginLink>Contact Us</NavbarBLoginLink>
                    </NavbarBLoginLinksWrapper>
                    <NavbarBLoginBtn>
                        <NavbarBLoginBtnLink to="/signup">Sign In</NavbarBLoginBtnLink>
                    </NavbarBLoginBtn>
                </NavbarBLoginContainer>
            </>
        )
}