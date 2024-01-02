import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar/Navbar'


export default function App() {
  return (
    <div>
    <Navbar/>
     <Outlet/>
     
    </div>
  )
}
