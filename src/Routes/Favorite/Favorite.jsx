import "./Favourite.css";
import { useEffect, useState } from "react";
import Loading from "../../Components/Loading/Loading";
import Modal from "./../../Components/Model/Model";
export default function Favorite() {
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedData, setSelectedData] = useState(null);
  const [newdata, setnewData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:9000/jobs");
        if (response.ok) {
          const data = await response.json();
          const filtered = data.filter((item) => item.isFavorite === true);
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
  }, [newdata]);

  console.log(filteredData);

  const handleModalOpen = (data) => {
    setSelectedData(data);
  };

  const handleModalClose = () => {
    setSelectedData(null);
  };
  const handleFavorite2 = async (data) => {
    await fetch(`http://localhost:9000/jobs/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, isFavorite: false }),
    });
    setnewData(data);
  };
  return (
    <div style={{ padding: "20px" }}>
      {filteredData.length <= 0 ? (
        <div style={{ textAlign: "center" }}>
          <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
            You have no favorite Jobs
          </h1>
          <big>
            <p style={{ marginBottom: "25px" }}>
              Maybe job is really not for you or you have not applied?
            </p>
          </big>
          <img className="job-search" src="../../../public/oversight.gif"></img>
        </div>
      ) : (
        <div>
          <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
            These are your favorite{" "}
            <span style={{ color: "#196fe8" }}>Jobs</span>{" "}
          </h1>
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
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "30px",
                      }}
                    >
                      <button onClick={() => handleModalOpen(data)}>
                        See Details
                      </button>
                      <button
                        onClick={() => handleFavorite2(data)}
                        className="remove-btn"
                      >
                        Remove Favorite
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
}
