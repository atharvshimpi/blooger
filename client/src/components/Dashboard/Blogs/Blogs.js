import React from 'react'
import styled from "styled-components"
import { useSelector } from "react-redux";

import Blog from "./Blog/BlogCard"

/**
* @author
* @function Blogs
**/

const Blogs = ({ setCurrentId }) => {
    const blogs = useSelector((state) => state.blogs);
    return(
        !blogs.length ? (
            <BlogsLoadingContainer>
                <div className="progress" 
                    style={{ 
                        width: '50%'
                    }}>
                    <div className="indeterminate"></div>
                </div>
            </BlogsLoadingContainer>
        ) : (
        <BlogsContainer>
            {blogs.map((blog) => (
                <div id={blog._id} key={blog._id}>
                   <Blog blog={blog} setCurrentId={setCurrentId} />
                </div>
            ))}
        </BlogsContainer>
        )
    )

}

export default Blogs

const BlogsContainer = styled.div`
    width: 70%;

    @media screen and (max-width: 768px) {
        width: auto;
    }
`

export const BlogsLoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 150px);
`