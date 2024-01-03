import { Navigate, useLocation } from "react-router-dom"
import Loading from "../Components/Loading/Loading"
import { useAuthState } from "react-firebase-hooks/auth"
import auth from "../FIrebase/firebase"


const PrivetRoutes =({children})=>{
    const[user,loading]=useAuthState(auth)
    const location  = useLocation()
    if(loading){
       return <Loading/>
    }
    
    if(!user){
        return <Navigate to={'/login'} state={{from: location}}/>
    }
    
        return children
    }

export default PrivetRoutes
