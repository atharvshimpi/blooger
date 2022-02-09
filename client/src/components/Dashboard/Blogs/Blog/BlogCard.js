import React from 'react'
import { useDispatch } from 'react-redux';
import styled from "styled-components"
import moment from "moment";

import { deleteBlog } from '../../../../actions/blogActions';

/**
* @author
* @function Blog
**/

const Blog = ({ blog, setCurrentId }) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();

    return(
        <>
            <div class="card large sticky-action" style={{ height: '25%' }}>
                <div class="card-image waves-effect waves-block waves-light blue-grey lighten-3" style={{ maxHeight: '75%' }} >
                    <BlogCardImg class="activator" crossOrigin src={blog.selectedFile || 'https://user-images.githubusercontent.com/77790064/116214733-9e56f800-a764-11eb-9462-9a7fb25647ae.jpg'} />
                </div>
                <div class="card-content">
                    <span style={{ fontSize: '2rem' }} class="card-title activator grey-text text-darken-4">{blog.title}</span>
                    <p>{blog.description.substring(0, 80)} .....</p>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <a class="waves-effect waves-light activator btn" >Read More</a>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontSize: '1.5rem' }} class="grey-text text-darken-4">By {blog.name}</span>
                            <span style={{ fontSize: '1.2rem' }} class="green-text">{moment(blog.createdAt).fromNow()}</span>
                        </div>
                    </div>
                </div>
                <div class="card-reveal" style={{ height: 'auto', maxHeight: '-webkit-fill-available' }} >
                    <span style={{ fontSize: '2rem' }} class="card-title grey-text text-darken-4">{blog.title}<i class="material-icons right">close</i></span>
                    <p style={{
                        lineHeight: "2.5rem",
                        fontSize: "1.5rem"
                    }}>{blog.description}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        {(user?.result?._id === blog?.creator || user?.result?.googleId === blog?.creator) && 
                        <p><a class="waves-effect waves-light btn" onClick={() => dispatch(deleteBlog(blog._id))}>Delete Blog</a></p>
                        }
                        {(user?.result?._id === blog?.creator || user?.result?.googleId === blog?.creator) &&
                        <p><a class="waves-effect waves-light btn" onClick={() => { setCurrentId(blog._id) }}>Edit Blog</a></p>
                        }
                    </div>
                </div>
            </div>
        </>
    )

 }

export default Blog

export const BlogCardImg = styled.img`
    height: fit-content;


    @media screen and (max-width: 768px) {
        height: auto;
    }
`