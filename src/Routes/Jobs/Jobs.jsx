import "./Jobs.css";
import { CiStar } from "react-icons/ci";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useEffect } from "react";
import Modal from "../../Components/Model/Model";
import Loading from "./../../Components/Loading/Loading";

export default function Jobs() {
  const [apiData, setApiData] = useState([]);
  const [isTrue, setIsTrue] = useState(true);
  const [selectedData, setSelectedData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:9000/jobs");
        if (response.ok) {
          const data = await response.json();
          setApiData(data);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      } finally {
        setLoading(false);
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
    <>
      <div className="jobs">
        {loading ? (
          <Loading />
        ) : (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem",alignItems: "center", justifyContent: "center" }}>
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
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <button onClick={() => handleModalOpen(data)}>
                          See Details
                        </button>
                        {isTrue ? (
                          <button className="star">
                            <CiStar />
                          </button>
                        ) : (
                          <button className="star">
                            <FaStar />
                          </button>
                        )}
                      </div>
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
        )}
      </div>
    </>
  );
}
