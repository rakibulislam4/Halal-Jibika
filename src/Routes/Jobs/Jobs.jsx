import "./Jobs.css";
import Swal from 'sweetalert2'
import { CiStar } from "react-icons/ci";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useEffect } from "react";
import Modal from "../../Components/Model/Model";
import Loading from "./../../Components/Loading/Loading";

export default function Jobs() {
  const [apiData, setApiData] = useState([]);
  const [newdata, setnewData] = useState(null);
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
  }, [newdata]);

  const handleModalOpen = (data) => {
    setSelectedData(data);
    console.log("this is api data", selectedData);
  };

  const handleModalClose = () => {
    setSelectedData(null);
  };
  const handleFavorite = async (data) => {
    console.log(data.id);
    if (!("isFavorite" in data)) {
      data.isFavorite = false;
    }
    await fetch(`http://localhost:9000/jobs/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, isFavorite: true }),
    });
    setnewData(data);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Successfully added to favorites",
      showConfirmButton: false,
      timer: 1000
    });
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
    <>
      <div className="jobs">
        {loading ? (
          <Loading />
        ) : (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
                        {data.isFavorite ? (
                          <button
                            onClick={() => handleFavorite2(data)}
                            key={data.id}
                            className="star"
                          >
                            <FaStar />
                          </button>
                        ) : (
                          <button
                            key={data.id}
                            onClick={() => handleFavorite(data)}
                            className="star"
                          >
                            <CiStar />
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
