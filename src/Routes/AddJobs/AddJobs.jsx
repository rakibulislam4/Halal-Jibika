
import { useState } from 'react';
import './AddJobs.css';
import Swal from "sweetalert2";
export default function AddJobs() {
  const [formData, setFormData] = useState({
    id: "",
    companyName: "",
    title: "",
    position: "",
    description: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:9000/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your job post have been added successfully",
          showConfirmButton: false,
          timer: 3000,
        });
      } else {
        console.error('Error:', response.statusText);
        alert('Failed to submit data. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting data.');
    }

    // Clear the form inputs after submission
    setFormData({
      id: "",
      companyName: "",
      title: "",
      position: "",
      description: ""
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="form-container">
      <form className="job-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">ID:</label>
          <input
            type="number"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position:</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Short Description:</label>
          <textarea
            rows="4"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
