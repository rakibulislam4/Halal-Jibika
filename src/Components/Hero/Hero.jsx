import "./Hero.css";
import { useNavigate } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import person from "../../assets/person.png";
import LatestJobs from "../LatestJobs/LatestJobs";
export default function Hero() {
  const navigate = useNavigate();

  return (
    <>

    
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
        <h1>
          Scroll down to <span>Explore</span>
        </h1>
     
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

        <div className="reputation-info-1">
          <img
            src="https://thewebmax.org/react/jobzilla/assets/images/main-slider/slider1/icon-2.png"
            alt=""
          />
          <div className="country-list">
            <h1>98+</h1>
            <span>Job For Countries</span>
          </div>
        </div>
        <div className="reputation-info-2">
          <img
            src="https://thewebmax.org/react/jobzilla/assets/images/main-slider/slider1/icon-1.png"
            alt=""
          />
          <div className="country-list">
            <h1>12K+</h1>
            <span>Companies Jobs</span>
          </div>
        </div>
      </div>
    </div>
      <LatestJobs />
      </>
  );
}
