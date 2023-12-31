import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar/Navbar'
import Home from './Pages/Home/Home'
export default function App() {
  return (
    <div>
    <Navbar/>
     <Outlet/>
    </div>
  )
}
