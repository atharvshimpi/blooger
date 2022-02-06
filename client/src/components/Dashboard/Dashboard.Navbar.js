import React, { useEffect, useState } from "react"
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import * as actionType from '../../constants/actionTypes';

import DashboardSidebar from "./Dashboard.Sidebar"
import ScrollToTop from "../ScrollToTop"
import  { FaBars } from "react-icons/fa"
import { DashboardNavbarContainer, DashboardNavbarLogo, DashboardNavbarIcon, DashboardNavbarWrapper, DashboardNavbarLinks, DashboardNavbarUserAvatarPsuedo, DashboardNavbarUserAvatar, DashboardNavbarUserInfo, DashboardNavbarUserInitial, DashboardNavbarUserName, DashboardNavbarDwnArrow } from "./Dashboard.Elements"

const DashboardNavbar = () => {
    const [isShow, setIsShow] = useState(false);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    const toggleShow = () => {
        setIsShow(!isShow);
    }

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
    
        history.push('/');
    
        setUser(null);
      };
    
      useEffect(() => {
        const token = user?.token;
    
        if (token) {
          const decodedToken = decode(token);
    
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
    
        setUser(JSON.parse(localStorage.getItem('profile')));
        }, [location]);

        return(
            <>  
                <DashboardSidebar toggleShow={toggleShow} isShow={isShow}/>
                <ScrollToTop />
                <DashboardNavbarContainer>
                    <DashboardNavbarLogo to="/dashboard">
                        Blooger
                    </DashboardNavbarLogo>
                    {((user?.result) ? 
                        <DashboardNavbarUserAvatarPsuedo>
                            <DashboardNavbarUserInitial onClick={ toggleShow } >{user?.result.name.charAt(0)}</DashboardNavbarUserInitial>
                        </DashboardNavbarUserAvatarPsuedo>
                        :
                        <DashboardNavbarIcon onClick={ toggleShow } >
                            <FaBars />
                        </DashboardNavbarIcon>
                    )}
                    <DashboardNavbarWrapper>
                        <DashboardNavbarLinks to="/dashboard">Home</DashboardNavbarLinks>
                        <DashboardNavbarLinks to="/createblog">Create Blog</DashboardNavbarLinks>
                        <DashboardNavbarLinks to="/yourblogs">Your Blogs</DashboardNavbarLinks>
                    </DashboardNavbarWrapper>
                    <DashboardNavbarUserInfo>
                        <DashboardNavbarUserAvatar>
                            <DashboardNavbarUserInitial>{user?.result.name.charAt(0)}</DashboardNavbarUserInitial>
                        </DashboardNavbarUserAvatar>
                        <DashboardNavbarUserName>{user?.result.name.split(" ")[0]}</DashboardNavbarUserName>
                        <DashboardNavbarDwnArrow 
                            
                        />
                        <button
                            style={{
                                width: "150px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                marginTop: "1rem",
                                alignItems: "center",
                                margin: "30px 0 30px 10px"
                            }}
                            onClick={logout}
                            className="btn btn-large waves-effect waves-light hoverable #53c4af accent-3"
                        >
                        Logout
                        </button>
                    </DashboardNavbarUserInfo>
                </DashboardNavbarContainer>
            </>
        )
}

export default DashboardNavbar;