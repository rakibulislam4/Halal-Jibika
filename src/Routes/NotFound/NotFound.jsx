import { useNavigate } from "react-router-dom";
import "./NotFound.css";
export default function NotFound() {
  const navigate = useNavigate(  );

  return <div className="not-found">
  <big>
    Maybe you have come to the wrong place or something went wrong. <br /> The page you are looking for does not exist.
  </big>
  <img src="../../../public/404 error with a landscape.gif" alt="" />
  
  <button    onClick={() => navigate("/home")}>Go Back To Home</button>
  </div>;
}
