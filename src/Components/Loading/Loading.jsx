import { ColorRing } from "react-loader-spinner";
import './Loading.css'
export default function Loading() {
  return (
    <div className="loading">
    
    <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#1640D6','#1640D6','#1640D6','#1640D6','#1640D6','#1640D6','#1640D6']}
  />
    </div>
  )
}
