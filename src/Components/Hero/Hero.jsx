import "./Hero.css";
import { useNavigate } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import person from "../../assets/person.png";
export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <div className="hero-content-left">
        <p className="advertise">
          We Have <span>208,000+</span> Live Jobs
        </p>
        <h1>
          Find the <span>job</span> that fits your life
        </h1>
        <p style={{ fontSize: "18px", fontWeight: "500" }}>
          Just click below and start to find your perfect job.
        </p>

        <button
          className="explore-now"
          onClick={() => navigate("/jobs")}
        >
          <span className="first"></span>
          <span className="second"></span>
          <span className="third"></span>
          <span className="fourth"></span>
          Explore Now
        </button>
<div className="hero-icons-rotate">

        <div className="rotate-icon">
          <IoMdSettings />
        </div>
</div>

      </div>

      <div className="hero-content-right">
        <img
          src={person}
          alt=""
        />
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
        <div className="floating-1"></div>
        <div className="floating-2"></div>
      </div>
    </div>
  );
}
