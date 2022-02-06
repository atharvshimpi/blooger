import React from "react"
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from "./Sidebar.BLogin.Elements"

export default function Sidebar_BLogin ({toggle, isOpen}) {
        return (
            <>
                <SidebarContainer isOpen={isOpen} onClick={toggle} >
                    <Icon onClick={toggle} >
                        <CloseIcon />
                    </Icon>
                    <SidebarWrapper>
                        <SidebarMenu>
                            <SidebarLink href="#aboutus" onClick={toggle}>About Us</SidebarLink>
                            <SidebarLink href="#discover" onClick={toggle}>Discover</SidebarLink>
                            <SidebarLink href="#services" onClick={toggle}>Services</SidebarLink>
                            <SidebarLink href="#contactus" onClick={toggle}>Contact Us</SidebarLink>
                        </SidebarMenu>
                            <SideBtnWrap>
                                <SidebarRoute to="/signup">Sign In</SidebarRoute>
                            </SideBtnWrap>
                    </SidebarWrapper>
                </SidebarContainer>
            </>
        )
}