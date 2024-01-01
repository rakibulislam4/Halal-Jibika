import { Audio } from "react-loader-spinner";
import './Loading.css'
export default function Loading() {
  return (
    <div className="loading">
    
    <Audio
  height="80"
  width="80"
  radius="9"
  color="rgba(15, 105, 231, 0.59)"
  ariaLabel="three-dots-loading"
  wrapperStyle
  wrapperClass
/>
    </div>
  )
}
