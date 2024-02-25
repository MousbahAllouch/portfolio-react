import React from 'react'
import { BrowserRouter,Link,Route,Routes,Navigate  } from 'react-router-dom';
import Contact from '../../pages/contact';
import Home from '../../pages/home';
import AboutMe from '../../pages/aboutMe';
import Projects from '../../pages/projects';

export default function AllRoutes() {



  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<AboutMe/>}/>
        <Route path="/projects" element={<Projects/>}/>
    </Routes>
  )

}
