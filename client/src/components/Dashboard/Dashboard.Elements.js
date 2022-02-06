import styled from "styled-components"
import { Link as LinkR } from "react-router-dom"
import { Link as LinkSc } from "react-scroll";
import { MdArrowDropDown } from "react-icons/md"

//Dashboard
export const DashboardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 20px;
    width: auto;
    margin: 15vh 20px 0px;
`

export const DashboardAddBtn = styled.div`
    display: flex;
    align-items: flex-end;
    position: fixed;
    bottom: 0;
    z-index: 2;
    margin: 0 0 10px 10px;
    -webkit-tap-highlight-color: transparent;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: rotate(-90deg);
    }
`

//Dashboard Navbar
export const DashboardNavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 2;
    background: #438d80;
    height: 10vh;
    width: 100%;
    margin-bottom: 10vh;
    overflow: hidden;
`

export const DashboardNavbarLogo = styled(LinkR)`
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

export const DashboardNavbarIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        margin-top: 6px;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        position: absolute;
        font-size: 2rem;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        color: #fff;

        &:hover {
            color: #333;
        }
    }
`

export const DashboardNavbarWrapper = styled.div`
    display: flex; 
    margin-left: 3rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const DashboardNavbarLinks = styled(LinkR)`
    text-decoration: none;
    color: #fff;
    justify-self: center;
    cursor: pointer;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    padding: 0 20px;
`

export const DashboardNavbarUserInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;
    padding: 0 15px;
    font-size: 2rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const DashboardNavbarUserAvatarPsuedo = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        width: 50px;
        height: 50px;
        border-radius: 50px;
        background: #333;
        margin: 0 10px;
        font-size: 2rem;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        transition: all 0.2s ease-in-out;

        &:hover {
            width: 60px;
            height: 60px;
            border-radius: 60px;
        }
    }
`

export const DashboardNavbarUserAvatar = styled.div`
    display: flex;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background: #333;
    margin: 0 10px;
`

export const DashboardNavbarUserInitial = styled.div`
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
`

export const DashboardNavbarUserName = styled.div`

`

export const DashboardNavbarDwnArrow = styled(MdArrowDropDown)`
    font-size: 2.5rem;
    color: #fff;
    margin-top: 6px;

    &:hover {
        color: #333;
        cursor: pointer;
    }
`

export const DashboardNavbarDropDwn = styled.ul`
    color: #333;
    display: grid;
    flex-direction: column;
`

export const DashboardNavbarDropDwnOption = styled.li`

`

// Dashboard Sidebar

export const DashboardSidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #438d80;
    display: grid;
    align-items: center;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isShow}) => (isShow ? '100%' : '0')};
    top: ${({isShow}) => (isShow ? '0' : '100%')};
`

export const DashboardSidebarLink = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    padding: 30px 0;
    cursor: pointer;

    &:hover {
        color: #333;
        tranistion: 0.2s ease-in-out;
    }
`

// Recent Posts
export const RecentPosts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background: #438D80;
    width: 35%;
    height: 75vh;
    margin: 0.5rem 0 0 20px;
    position: sticky;
    top: 80px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const LinkS = styled(LinkSc)`
    color: white;
    cursor: pointer;
    &:hover {
        color: #333;
    }
`