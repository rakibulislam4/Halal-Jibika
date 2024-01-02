import { useEffect, useState } from "react";
import Loading from "../../Components/Loading/Loading";
import "./Applied.css";
import Modal from "../../Components/Model/Model";

const Applied = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:9000/jobs");
        if (response.ok) {
          const data = await response.json();
          const filtered = data.filter((item) => item.isApplied === true);
          setFilteredData(filtered);
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

  console.log(filteredData);

  const handleModalOpen = (data) => {
    setSelectedData(data);
  };

  const handleModalClose = () => {
    setSelectedData(null);
  };

  return (
    <div style={{ padding: "0 0 20px 20px" }}>
      {filteredData.length <= 0 ? (
        <div style={{ textAlign: "center" }}>
          <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
            You have no Applied Jobs
          </h1>
          <big>
            <p style={{ marginBottom: "25px" }}>
              Strop doing nothing and get yourself a job you lazy human.
            </p>
          </big>
          <img src="../../../public/oversight.gif"></img>
        </div>
      ) : (
        <div>
          <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
            These are your applied{" "}
            <span style={{ color: "#196fe8" }}>Jobs</span>{" "}
          </h1>
          <p style={{ textAlign: "center", marginBottom: "10px" }}>
            Note that once applied it cannot be undone unless the company
            rejects it.
          </p>
          <div className="applied">
            {loading && <Loading />}

            {filteredData.map((data) => (
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
                      <span>15000$ / Month</span>{" "}
                    </p>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <button onClick={() => handleModalOpen(data)}>
                        See Details
                      </button>
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
        </div>
      )}
    </div>
  );
};

export default Applied;
