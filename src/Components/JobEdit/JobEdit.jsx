import { useState } from "react";
import "./JobEdit.css";
export default function JobEdit({ data, onClose, setNewData }) {
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({
      title: "",
      companyName: "",
      position: "",
      description: "",
    });
    await fetch(`http://localhost:9000/jobs/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    setNewData(data);
    onClose();
  };

  return (
    <div className="job-edit">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="position">Position:</label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <button className="edit-submit" type="submit">Submit</button>
        <button className="edit-back"
          type="button"
          onClick={onClose}
        >
          Back
        </button>

      </form>
    </div>
  );
}
