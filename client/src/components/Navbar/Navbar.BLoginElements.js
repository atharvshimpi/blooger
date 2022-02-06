import styled from "styled-components"
import { Link as LinkS } from "react-scroll"
import { Link as LinkR } from "react-router-dom"
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from "../Info/Info.BLogin.Data";

// Navbar.BLogin Elements

export const NavbarBLoginContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    background: ${({scrollNav}) => (scrollNav === 0) ? '#438d80' : (scrollNav === 1) ? homeObjOne.BGcolor : (scrollNav === 2) ? homeObjTwo.BGcolor : (scrollNav === 3) ? homeObjThree.BGcolor : (scrollNav === 4) ? homeObjFour.BGcolor : homeObjFive.BGcolor };
    height: 10vh;
    width: 100%;
    margin-bottom: 10vh;
    z-index: 5;
`

export const NavbarBLoginLogo = styled(LinkR)`
    text-decoration: none;
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    margin-left: 1.5vh;
`

export const NavbarBLoginIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        position: absolute;
        font-size: 2.5rem;
        -webkit-tap-highlight-color: transparent;
        cursor: pointer;
        color: #fff;

        &:hover {
            color: #333;
        }
    }
`

export const NavbarBLoginLinksWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-itmes: center;

    @media screen and (max-width: 760px) {
        display: none;
    }
`

export const NavbarBLoginLink = styled(LinkS)`
    text-decoration: none;
    cursor: pointer;
    color: #fff;
    height: 100%;
    font-size: 1.3rem;
    
    &.active {
        border-bottom: 3px solid #333;
    }
`

export const NavbarBLoginBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1.5vh;

    @media screen and (max-width: 768px) {
        display:none;
    }
`

export const NavbarBLoginBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #53c4af;
    white-space: nowrap;
    padding: 0 20px;
    justify-content: space-between;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.6s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #333;
    }
`

// Navbar.ALogin Elements

export const NavbarALoginContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #438d80;
    height: 10vh;
    width: 100%;
    margin-bottom: 10vh;
`