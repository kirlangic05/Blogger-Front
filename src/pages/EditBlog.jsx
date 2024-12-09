import axios from 'axios'
import React, { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'

export default function EditBlog() {
    const blog=useLoaderData()
  const[blogData,setBlogData]=useState(blog)
  const navigate=useNavigate()

  const onHandlerChange=(e)=>{
    setBlogData(pre=>({...pre,[e.target.name]:e.target.value}))
  }
  const onSubmit=async(e)=>{
    e.preventDefault()
    await axios.put(`http://94.154.46.244:8080/blog/editblog/${blog.id}`,blogData)
    navigate("/")
  }
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <form>
              <div className="mb-3">
                <label for="title" className="form-label">Title</label>
                <input type="text" name="title" className="form-control" onChange={onHandlerChange}
                value={blogData.title}/>
              </div>
              <div className="mb-3">
                <label for="description" className="form-label">Description</label>
                <textarea type="text" name='description' rows="10" className="form-control" onChange={onHandlerChange} value={blogData.description} ></textarea>
              </div>
              <div className="text-center">
                <button onClick={onSubmit} type="submit" className="btn btn-success">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}