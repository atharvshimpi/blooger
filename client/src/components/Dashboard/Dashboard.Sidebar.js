import React, { useEffect, useState } from "react"
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import * as actionType from '../../constants/actionTypes';

import { Icon, CloseIcon, SidebarWrapper, SidebarMenu } from "../Sidebar/Sidebar.BLogin.Elements"
import { DashboardNavbarUserInfo, DashboardNavbarUserAvatar,  DashboardNavbarUserInitial, DashboardNavbarUserName, DashboardSidebarContainer, DashboardSidebarLink } from "./Dashboard.Elements"

const DashboardSidebar = ({toggleShow, isShow}) => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const token = user?.token;

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
    
        history.push('/');
    
        setUser(null);
    };
    
    useEffect(() => {
        
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
            <>
                <DashboardSidebarContainer isShow={isShow}>
                    <Icon onClick={toggleShow} >
                        <CloseIcon />
                    </Icon>
                    <DashboardNavbarUserInfo style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem', marginBottom: '-3rem' }} >
                        <DashboardNavbarUserAvatar>
                            <DashboardNavbarUserInitial>{user?.result.name.charAt(0)}</DashboardNavbarUserInitial>
                        </DashboardNavbarUserAvatar>
                        <DashboardNavbarUserName>{user?.result.name}</DashboardNavbarUserName>
                    </DashboardNavbarUserInfo>
                    <SidebarWrapper>
                        <SidebarMenu>
                            <DashboardSidebarLink to="/dashboard" onClick={toggleShow}>Home</DashboardSidebarLink>
                            <DashboardSidebarLink to="/createblog" onClick={toggleShow}>Create Blog</DashboardSidebarLink>
                            <DashboardSidebarLink to="/yourblogs" onClick={toggleShow}>Your Blogs</DashboardSidebarLink>
                            <DashboardSidebarLink to="/contactus" onClick={toggleShow}>Contact Us</DashboardSidebarLink>
                            <button
                            style={{
                                width: "150px",
                                borderRadius: "50px",
                                letterSpacing: "1.5px",
                                marginTop: "1rem",
                                alignItems: "center",
                                margin: "30px auto"
                            }}
                            onClick={logout}
                            className="btn btn-large waves-effect waves-light hoverable #53c4af accent-3"
                        >
                            Logout
                        </button>
                        </SidebarMenu>
                    </SidebarWrapper>
                </DashboardSidebarContainer>
            </>
        )
}

export default DashboardSidebar;