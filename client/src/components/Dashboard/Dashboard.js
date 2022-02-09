import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { getBlogs } from '../../actions/blogActions';

import DashboardNavbar from "./Dashboard.Navbar"
import EditBlog from "../BlogOperations/EditBlog"
import Blogs from "./Blogs/Blogs";
import { DashboardContainer, DashboardAddBtn, RecentPosts, LinkS } from "./Dashboard.Elements"

const Dashboard = () => {

    const [currentId, setCurrentId] = useState(0);
    const blogs = useSelector((state) => state.blogs);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getBlogs());
    }, [currentId, dispatch]);

    return (
      <>
        { currentId !== 0 ? 
        <>
          <EditBlog currentId={currentId} setCurrentId={setCurrentId} />
        </> 
        :
        <>
          <DashboardNavbar/>
          <DashboardContainer>
            <Blogs setCurrentId={setCurrentId} />  
            <RecentPosts>
              <h2 className="white-text" style={{ marginLeft: '10px' }}>Recent Posts</h2>
              {blogs.slice(0, 5).map((blog) => (
                <div style={{ margin: '0 10px' }} key={blog._id}>
                  <LinkS 
                    to={blog._id}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-90}
                  >
                    <h5>⭐ {blog.title}</h5>
                  </LinkS>
                </div>
              ))}
            </RecentPosts>      
          </DashboardContainer>
        </>
        }
        <DashboardAddBtn>
          <div className="btn-floating btn-large waves-effect waves-light #438D80" onClick={() => { history.push('/createblog'); } } ><i className="material-icons">add</i></div>
        </DashboardAddBtn>
      </>
    );
}

export default Dashboard;