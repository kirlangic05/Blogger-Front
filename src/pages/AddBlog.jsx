import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddBlog() {
  const[blogData,setBlogData]=useState({useras: {id:"" },title:"",description:"" })
  const navigate=useNavigate()


  /*const onHandlerChange=(e)=>{
    if(e.target.name === "useras"){
      setBlogData(prev => ({...prev, useras: { id: e.target.value } }))
    }
    setBlogData(pre=>({...pre,[e.target.name]:e.target.value }))
  }*/
    const onHandlerChange = (e) => {
      const { name, value } = e.target;
      if (name === "useras") {
        setBlogData(prev => ({ ...prev, useras: { id: value } }))
      } else {
        setBlogData(pre => ({ ...pre, [name]: value }))
      }
    }

  const onSubmit=async(e)=>{
    e.preventDefault()
    await axios.post("http://94.154.46.244:8080/blog/saveblog",blogData)
    navigate("/")
  }
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <form>
            <div className="mb-3">
                <label for="useras" className="form-label">User ID</label>
                <input type="text" name="useras" className="form-control" onChange={onHandlerChange}/>
              </div>
              <div className="mb-3">
                <label for="title" className="form-label">Title</label>
                <input type="text" name="title" className="form-control" onChange={onHandlerChange}/>
              </div>
              <div className="mb-3">
                <label for="description" className="form-label">Description</label>
                <textarea type="text" name='description' rows="10" className="form-control" onChange={onHandlerChange}></textarea>
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
