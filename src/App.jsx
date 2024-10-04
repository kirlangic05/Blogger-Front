import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import MainNavigation from './components/MainNavigation'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Markdown from 'react-markdown'
import AddBlog from './pages/AddBlog'
import BlogDetails from './pages/BlogDetails'
import EditBlog from './pages/EditBlog'
import AddUser from './pages/AddUser'


export const blogLoader = async()=>{
  const blog = await axios.get("http://185.240.104.244:8080/blog/getblog")
  const users =await axios.get("http://185.240.104.244:8080/users/getuser")
  return{blog:blog.data, users: users.data}
}

/*const getAllBlogs = async () => {
  let allBlogs = []
  await axios.get("http://localhost:8080/blog/getblog").then(res =>
    allBlogs = res.data
  )
  return allBlogs
}

const getAllUsers= async()=>{
  let allUsers=[]
  await axios.get("http://localhost:8080/users/getuser").then(res =>
    allUsers=res.data
  )
  return allUsers
}*/

const getBlog=async({params})=>{
  let blogs=[]
  await axios.get(`http://185.240.104.244:8080/blog/getblog/${params.id}`).then(res=>{
    blogs=res.data
  })
  return blogs
}


const router = createBrowserRouter([
  {
    path: "/", element: <MainNavigation />, children: [
      { index: true, element: <Home />, loader: blogLoader},
      { path: "/saveblog", element: <AddBlog /> },
      {path:"/blogview/:id",element: <BlogDetails/>,loader:getBlog},
      {path:"/editBlog/:id",element:<EditBlog/>,loader:getBlog},
      {path:"/saveuser",element:<AddUser/>}
    ]
  }
])

export default function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

