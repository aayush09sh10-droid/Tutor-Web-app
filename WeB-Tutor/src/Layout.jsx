import {Outlet} from "react-router";
import React from 'react'
import Header from "./component/Header/Header";

function Layout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>


        
      
    </div>
  )
}

export default Layout
