import { useState } from "react";
import "./Jobs.css";
import { useEffect } from "react";

export default function Jobs() {
  const [apiData, setApiData] = useState([]);

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
                <p>{data.description}</p>
                <p>{data.position}</p>
                <p>
                  <span> $100500 / Month</span>{" "}
                </p>
                <button>See Details</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
