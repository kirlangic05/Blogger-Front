import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import Markdown from 'react-markdown'
import axios from 'axios'

export default function BlogItem() {
    const {blog: allBlogs, users: allUsers}=useLoaderData()
    
    const navigate=useNavigate()
    console.log(allBlogs)
    const deleteBlog=async(id)=>{
        await axios.delete(`http://185.240.104.244:8080/blog/deleteblog/${id}`)
        navigate("/")
    }
    const findUserByBlogId=(blogId)=>{
        for(let user of allUsers){
            if(user.blogs.some(blog =>blog.id===blogId)){
                return user;
            }
        }
        return null
    }
  return (
    <>
    {
        allBlogs.map((blog,index)=> {
            const user = findUserByBlogId(blog.id)
            return(<div key={index} className="card shadow p-3 mb-5 rounded border-0">
                <div className="card-body">
                <h6 className='card-title'>{user?.username || 'Unknown Author'}</h6>
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text"><Markdown>{blog.description}</Markdown></p>
                    <p><a href= {`/blogview/${blog.id}`} >View More</a></p>
                    <button onClick={()=>deleteBlog(blog.id)} className='btn btn-danger'>Delete</button>
                </div>
            </div>)
        })
    }
    </>
  )
}
