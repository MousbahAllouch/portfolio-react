import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./pages/home"; 
import { BrowserRouter,Link,Route,Routes,Navigate  } from 'react-router-dom';
import NavBar from "./components/navBar"; 
import AllRoutes from './components/allRoutes';
import Footer from "./components/footer"; 


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <AllRoutes/>
    <Footer/>
    </BrowserRouter>

    </>
  )
}

export default App
