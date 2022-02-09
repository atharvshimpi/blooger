import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import FileBase from "react-file-base64";

import { getBlogs, createBlog } from "../../actions/blogActions.js"

import DashboardNavbar from "../Dashboard/Dashboard.Navbar"
import { BlogContainer } from "./BlogOperations.Elements"

import "./style.css"

const CreateBlog = () => {

    const [currentId, setCurrentId] = useState(0);
    const [blogData, setBlogData] = useState({ title: '', description: '', selectedFile: '', genre: '' });
    const blog = useSelector((state) => (currentId ? state.blogs.find((message) => message.id === currentId) : null));
    const dispatch = useDispatch();
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
      if (blog) setBlogData(blog);
    }, [blog]);

    useEffect(() => {
      dispatch(getBlogs());
    }, [currentId, dispatch]);

    useEffect(() => {
      const M = window.M
      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems, {});
    }, [])

    const show = (e) => {
      var show = document.getElementById('show');
      var select = document.getElementById('select');
      if(select.value === 'others') {
        show.style.display = 'block';
      }
      else {
        show.style.display = 'none';
      }

      setBlogData({ ...blogData, genre: e.target.value })
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch(createBlog({ ...blogData, name: user?.result?.name }));

      history.push('/dashboard')
    };

    return (
      <>
      <DashboardNavbar />
      <BlogContainer>
        <h4>Create Blog</h4>
        <form className="col s12" noValidate onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <input 
                required 
                id="title" 
                type="text" 
                className="validate"
                value={blogData.title}
                onChange={(e) => setBlogData({ ...blogData, title: e.target.value })}
              />
              <label htmlFor="title">Title</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8">
              <textarea 
                id="textarea" 
                className="materialize-textarea"
                value={blogData.description}
                onChange={(e) => setBlogData({ ...blogData, description: e.target.value })}
              ></textarea>
              <label htmlFor="textarea">Textarea</label>
            </div>
          </div>
          <div className="file-field input-field">
            <div className="btn">
              <span>File</span>
              <FileBase 
                type="file"
                multiple={false}
                onDone={({ base64 }) => setBlogData({ ...blogData, selectedFile: base64 })}
              />
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
            </div>
          </div>
          <div className="row" style={{ marginLeft: '0 !important' }}>
            <div className="input-field col s8">
              <select id="select" onChange={show} defaultValue="">
                <option value="" disabled>Choose any one</option>
                <option value="Science &amp; Technology">Science &amp; Technology</option>
                <option value="Social">Social</option>
                <option value="Economical">Economical</option>
                <option value="Political">Political</option>
                <option value="others">Other (Please Write Below)</option>
              </select>
              <label>Category of Blog</label>
            </div>
          </div>
          <div className="row" id="show" style={{ marginLeft: '0 !important' }}>
            <div className="input-field col s6">
              <input 
                id="other" 
                type="text"
                onChange={(e) => setBlogData({ ...blogData, genre: e.target.value })}
              />
              <label className="active">Other</label>
            </div>
          </div>
          <button
            style={{
              borderRadius: "3px",
              letterSpacing: "1.5px",
              marginTop: "1rem"
            }}
            type="submit"
            className="btn btn-large waves-effect waves-light hoverable #438d80 accent-3"
            >
              Create Blog
           </button>
        </form>
      </BlogContainer>
      </>
    );
}

export default CreateBlog;