/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import "./Model.css";
import { useEffect, useState } from "react";

const Modal = ({ data, onClose }) => {
  const [applied, setApplied] = useState(data.isApplied || false);
  const handleApply = async () => {
    if (!("isApplied" in data)) {
      data.isApplied = false;
    }
    await fetch(`http://localhost:9000/jobs/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, isApplied: true }),
    });
    setApplied(true);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "You have successfully applied for this position",
      showConfirmButton: false,
      timer: 3000,
    });
  };

  useEffect(() => {
    if (!("logo" in data)) {
      data.logo = "https://picsum.photos/200/300";
    }
    console.log(data);
  }, [data]);

  const handleApplied = () => {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "You have already applied for this position",
      showConfirmButton: false,
      timer: 3000,
    });
  };

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
              <strong>Technical Skills:</strong>
              <li>
                Strong understanding of software development methodologies,
                tools, and processes.
              </li>
              <li>Experience with database management systems (SQL, NoSQL).</li>
              <li>
                Knowledge of web development frameworks (e.g., React, Angular,
                Node.js).
              </li>
              <li>
                Familiarity with version control systems (Git, SVN) and CI/CD
                pipelines.
              </li>
              <li>Ability to write clean, maintainable, and efficient code.</li>
              <strong>Problem-Solving Abilities:</strong>
              <li>Strong analytical and problem-solving skills.</li>
              <li>
                Capability to troubleshoot and debug complex software issues.
              </li>
              <li>
                Aptitude for innovative thinking and proposing creative
                solutions.
              </li>
              <strong>Team Collaboration:</strong>
              <li>
                Proven ability to work effectively in a collaborative team
                environment.
              </li>
              <li>
                Excellent communication skills to convey technical concepts
                clearly.
              </li>
              <ul className="list2">
                <strong style={{ color: "green" }}>Benefits:</strong>
                <li>
                  Competitive Salary: We offer a competitive salary commensurate
                  with experience and skills, ensuring that our employees are
                  fairly compensated for their contributions.
                </li>
                <li>
                  Health and Wellness: Comprehensive health, dental, and vision
                  insurance plans to ensure the well-being of our employees and
                  their families.
                </li>
                <li>
                  Flexible Work Arrangements: We support a healthy work-life
                  balance by offering flexible work hours and remote work
                  options when feasible, promoting productivity and personal
                  well-being.
                </li>
                <li>
                  Career Advancement: Clear paths for career progression within
                  the company, encouraging professional development and offering
                  opportunities for advancement based on performance.
                </li>
              </ul>
            </ul>

            <p>
              <span style={{ fontWeight: "bold", color: "black" }}>
                Starting at:
              </span>{" "}
              Starting at{" "}
              <span style={{ color: "#2db346" }}>15000$ / Month</span>
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
            {!applied ? (
              <button
                onClick={handleApply}
                className="apply-now"
              >
                Apply Now
              </button>
            ) : (
              <button
                onClick={handleApplied}
                className="apply-now"
              >
                Applied
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
