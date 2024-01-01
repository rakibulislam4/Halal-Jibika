import "./Jobs.css";
import { useState } from "react";
import { useEffect } from "react";
import Modal from "../../Components/Model/Model";

export default function Jobs() {
  const [apiData, setApiData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/public/data.json");
        if (response.ok) {
          const data = await response.json();
          setApiData(data);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  const handleModalOpen = (data) => {
    setSelectedData(data);
  };

  const handleModalClose = () => {
    setSelectedData(null);
  };

  return (
    <div className="jobs">
      {apiData &&
        apiData.map((data) => (
          <div
            className="company-list"
            key={data.id}
          >
            <div className="single-company-list">
              <div className="company-name-logo">
                <img
                  src={data.logo}
                  alt=""
                />
                <h1>{data.companyName}</h1>
              </div>
              <div className="job-details">
                <h4>{data.title}</h4>
                <p>{data.position}</p>
                <p>{data.description}</p>
                <p>
                  <span> 15000$ / Month</span>{" "}
                </p>
                <button onClick={() => handleModalOpen(data)}>
                  See Details
                </button>
              </div>
            </div>
          </div>
        ))}
      {selectedData && (
        <Modal
          data={selectedData}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
}
