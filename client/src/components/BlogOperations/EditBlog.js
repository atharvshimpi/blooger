import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import FileBase from "react-file-base64";

import { updateBlog } from "../../actions/blogActions.js"

import DashboardNavbar from "../Dashboard/Dashboard.Navbar"
import { BlogContainer } from "./BlogOperations.Elements"

import "./style.css"

const EditBlog = ({ currentId, setCurrentId }) => {

    const user = JSON.parse(localStorage.getItem('profile'));
    const [blogData, setBlogData] = useState({ title: '', description: '', selectedFile: '', genre: '' });
    const blog = useSelector((state) => (currentId ? state.blogs.find((msg) => msg._id === currentId) : null));
    const dispatch = useDispatch();

    useEffect(() => {
      if (blog) setBlogData(blog);
    }, [blog]);

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
      dispatch(updateBlog(currentId, { ...blogData, name: user?.result?.name }));
      setCurrentId(0);

      setTimeout(function() { 
        window.location.reload() 
      }, 3);
    };

    return (
      <>
      <DashboardNavbar />
      <BlogContainer>
        <h4>Edit Blog</h4>
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
              <label className="active" for="title">Title</label>
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
              <label className="active" for="textarea">Textarea</label>
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
              <select id="select" onChange={show} value={blogData.genre}>
                <option value="" disabled selected>Choose any one</option>
                <option value="Science & Technology">Science & Technology</option>
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
            classNameName="btn btn-large waves-effect waves-light hoverable #438d80 accent-3"
            >
            Edit Blog
           </button>
        </form>
      </BlogContainer>
      </>
    );
}

export default EditBlog;