import { useState } from 'react';
import './Contact.css'; // Import a separate CSS file for styling
import Swal from 'sweetalert2';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const resetFormdata = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      resetFormdata()
    },1000)
    setTimeout(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your message was received by our team",
        showConfirmButton: false,
        timer: 2000,
      });    
    },1500)
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Your Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Your Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Your Message:
          </label>
          <textarea style={{resize: 'none'}}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-input"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
