import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import Markdown from 'react-markdown'

export default function MainNavigation() {
  return (
<>
    <Navbar/>
    <Outlet/>
    <Footer/>
</>  
 )
}
