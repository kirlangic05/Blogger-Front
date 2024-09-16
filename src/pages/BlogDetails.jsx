import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import Markdown from 'react-markdown'

export default function BlogDetails() {
    const blog=useLoaderData()
    const navigate = useNavigate()
    console.log(blog)
  return (
    <>
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <h2>{blog.title}</h2>
                <h5>{blog.date}</h5>
                <button onClick={()=>navigate(`/editBlog/${blog.id}`)} className='btn btn-success mt-2 fs-6 text-center'>Edit</button>
                <h6 className='mt-4 border p-3'><Markdown>{blog.description}</Markdown></h6>
            </div>
        </div>
    </div>
    </>
  )
}
