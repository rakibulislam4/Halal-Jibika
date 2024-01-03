import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar/Navbar'
import Footer from './Components/Footer/Footer'


export default function App() {
  return (
    <div>
    <Navbar/>
     <Outlet/>
     <Footer/>
    </div>
  )
}
