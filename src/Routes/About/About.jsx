import "./About.css";
const About = () => {
  return (
    <div className="about-us-container">
      <h2
        data-aos="fade-right"
        style={{ color: "#0f69e7" }}
      >
        About Halal Jibika
      </h2>
      <p
        data-aos="fade-right"
        className="mission-statement"
      >
        At Halal Jibika, we are dedicated to revolutionizing the job search
        experience by offering a platform focused on connecting individuals with
        reputable, halal job opportunities worldwide. Our commitment stems from
        a vision to foster a professional ecosystem that aligns with Islamic
        principles and values.
      </p>

      <div className="section">
        <h3 data-aos="fade-left">Our Mission</h3>
        <p data-aos="fade-right">
          Our mission is clear: to empower job seekers to pursue fulfilling
          career paths while adhering to halal practices. We strive to bridge
          the gap between employers and candidates who seek roles compatible
          with their religious beliefs, ensuring ethical, fair, and permissible
          employment opportunities.
        </p>
      </div>

      <div className="section">
        <h3 data-aos="fade-left">What Sets Us Apart</h3>
        <p data-aos="fade-right">
          Halal Jibika stands out as a trusted resource by prioritizing
          authenticity, transparency, and integrity in all aspects of our
          platform. We meticulously curate job listings, verifying the halal
          compliance of each opportunity, and maintaining a stringent screening
          process to guarantee the highest standards for our users.
        </p>
      </div>

      <div className="section">
        <h3 data-aos="fade-left">Our Values</h3>
        <ul>
          <li data-aos="fade-right">
            <strong>Integrity:</strong> We uphold honesty and ethical practices
            in every interaction, fostering trust within our community.
          </li>
          <li data-aos="fade-left">
            <strong>Inclusivity:</strong> We embrace diversity and create an
            inclusive environment that welcomes individuals from all backgrounds
            and experiences.
          </li>
          <li data-aos="fade-right">
            <strong>Excellence:</strong> We are committed to delivering
            exceptional service and continuously improving our platform to meet
            the evolving needs of our users.
          </li>
          <li data-aos="fade-left">
            <strong>Reliability:</strong> Users can rely on us to provide
            accurate and pertinent information, ensuring a seamless job-seeking
            experience.
          </li>
        </ul>
      </div>

      <div className="section">
        <h3 data-aos="fade-right">Our Team</h3>
        <p data-aos="fade-left">
          Behind Halal Jibika is a dedicated team of professionals passionate
          about empowering individuals to find meaningful employment
          opportunities while staying true to their values. We combine expertise
          in technology, recruitment, and ethical practices to ensure our
          platform remains a beacon for halal job seekers.
        </p>
      </div>

      <div className="section">
        <h3 data-aos="fade-right">Join Us in Redefining Halal Employment</h3>
        <p data-aos="fade-left">
          Whether you're a job seeker searching for ethical career options or an
          employer committed to providing halal opportunities, Halal Jibika is
          the platform for you. Together, let's redefine the landscape of halal
          employment and create a world where professional success aligns
          harmoniously with religious principles.
        </p>
        <p data-aos="fade-right">
          Connect with us today and embark on a journey towards halal and
          fulfilling careers.
        </p>
      </div>
    </div>
  );
};

export default About;
