import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function AddUser() {
    const[blogData,setBlogData]=useState({username:"",email:"",password:""})
    const navigate=useNavigate()
  
  
    const onHandlerChange=(e)=>{
      setBlogData(pre=>({...pre,[e.target.name]:e.target.value }))
    }

     /* const onHandlerChange = (e) => {
        const { name, value } = e.target;
        if (name === "useras") {
          setBlogData(prev => ({ ...prev, useras: { id: value } }))
        } else {
          setBlogData(pre => ({ ...pre, [name]: value }))
        }
      }*/
  
    const onSubmit=async(e)=>{
      e.preventDefault()
      await axios.post("http://94.154.46.244:8080/users/saveuser",blogData)
      navigate("/")
    }
  return (
    <>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form>
          <div className="mb-3">
              <label for="username" className="form-label">Username</label>
              <input type="text" name="username" className="form-control" onChange={onHandlerChange}/>
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">E-mail</label>
              <input type="text" name="email" className="form-control" onChange={onHandlerChange}/>
            </div>
            <div className="mb-3">
              <label for="password" className="form-label">Password</label>
              <input type="text" name='password' className="form-control" onChange={onHandlerChange}></input>
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
