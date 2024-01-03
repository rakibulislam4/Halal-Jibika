import { FaTwitter, FaFacebookF, FaGithub } from "react-icons/fa";
import "./Footer.css"; // CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="social-links">
          <big>## Halal Jibika ##</big>
          <div style={{display:'flex', gap:'10px'}}>

            <a
              href="https://twitter.com/tastytanticles"
              target="_blank"
              className="social-link"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/rakib.rocks.16"
              target="_blank"
              className="social-link"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://github.com/TastyTanticles?tab=repositories"
              target="_blank"
              className="social-link"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
          </div>
    <div className="usefulLinks">
    <strong>Useful Links</strong>
      <ul>
        <li><a href="https://www.youtube.com/">YouTube</a></li>
        <li><a href="https://www.reddit.com/">Reddit</a></li>
        <li><a href="https://www.facebook.com/rakib.rocks.16">Facebook</a></li>
        <li><a href="https://github.com/TastyTanticles?tab=repositories">GitHub</a></li>
        <li><a href="https://discord.com">Discord</a></li>
      </ul>
    </div>
          <div className="contact-info">
            <h3>Contact Us</h3>
            <p>
              <strong>Email:</strong> wowboyrabbi@gmail.com.com
            </p>
            <p>
              <strong>Phone:</strong> +8801407033340
            </p>
            <p>
              <strong>Address:</strong> 123 Beraid, Dhaka, Bangladesh
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Halal Jibika</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
