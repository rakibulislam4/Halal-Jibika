import "./Model.css";

const Modal = ({ data, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-wrap">
        <div className="modal-content">
          <div className="modal-header">
            <img
              src={data?.logo}
              alt=""
            />
            <h1>{data?.companyName}</h1>
          </div>
          <div className="modal-body">
            <h2>{data?.title}</h2>
            <p>{data?.description}</p>
            <p>{data?.position}</p>
            <strong>

            <p>Education and Experience:</p>
            </strong>
            <ul className="list">
              <li>
                Bachelor's degree in Computer Science, Software Engineering, or
                related field. Master's degree preferred.
              </li>
              <li>
                Proficiency in programming languages such as Java, Python, C++,
                etc.
              </li>
              <li>
                Minimum of 3-5 years of hands-on experience in software
                development.
              </li>
            </ul>
          
            <p>
               <span style={{fontWeight: "bold", color: "black"}}>Starting at:</span>  Starting at <span style={{ color: "#2db346"}}>15000 / Month</span>
            </p>
          </div>
          {/* Display other details as needed */}
          <div className="modal-btn">
            <button
              className="go-back"
              onClick={onClose}
            >
              Go Back
            </button>
            <button className="apply-now">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
