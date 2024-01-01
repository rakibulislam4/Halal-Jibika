/* eslint-disable react/jsx-key */
import "./LatestJobs.css";
import { useNavigate } from "react-router-dom";
const internships = [
  {
    id: 1,
    title: 'Google Internship Program',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png',
    companyName: 'Google',
    position: 'Intern Developer',
    description: 'This is an internship opportunity from Google'
  },
  {
    id: 2,
    title: 'Microsoft Internship Program',
    logo: 'https://cdn.iconscout.com/icon/free/png-256/free-microsoft-26-722716.png',
    companyName: 'Microsoft',
    position: 'Software Engineering Intern',
    description: 'This is an internship opportunity from Microsoft'
  },
  {
    id: 4,
    title: 'Apple Internship Program',
    logo: 'https://www.svgrepo.com/show/69341/apple-logo.svg',
    companyName: 'Apple',
    position: 'Software Engineering Internship',
    description: 'This is an internship opportunity from Apple'
  },
  {
    id: 5,
    title: 'Facebook Internship Program',
    logo: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-round-color-icon.png',
    companyName: 'Facebook',
    position: 'Software Developer Intern',
    description: 'This is an internship opportunity from Facebook'
  },
  {
    id: 6,
    title: 'NASA Internship Program',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1224px-NASA_logo.svg.png',
    companyName: 'NASA',
    position: 'Space Science Intern',
    description: 'This is an internship opportunity from NASA'
  }
];

export default function LatestJobs() {



const navigate = useNavigate()
  return (
    <div>
      <div className="job-list">
        {internships &&
          internships.map((data) => (
            <div key={data.id} className="single-job">
              <img
                src={data.logo}
                alt=""
              />
              <div className="job-details">
                <h3>{data.title}</h3>
                <strong>{data.companyName}</strong>
                <p>{data.position}</p>
                <button  onClick={() => navigate("/jobs")}>
                  Apply Now
                </button>
              </div>
              <div className="salary">
                <p>
                  $2500 / <span>Month</span>
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
