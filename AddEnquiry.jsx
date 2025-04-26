import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEnquiry = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    contact: '',
    age: '',
    gender: ''
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:8081/addEnquiry', data);
      alert('Enquiry added successfully');
      navigate('/manageEnquiry');
    } catch (error) {
      console.log(error);
    }
    navigate('/');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };


  return (
    <div className="d-flex flex-column align-items-center pt-4">
      <br /><br />
      <h2 style={{ fontWeight: 'bold' }}>Add Enquiry</h2>
      <br />
      <form className="row g-3 w-50 container border p-4" onSubmit={handleSubmit}>
        <div className="col-12">
          <label htmlFor="inputName4" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName4"
            name="name"
            required
            placeholder="Enter Name"
            autoComplete="off"
            value={data.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputSalary" className="form-label">
            Contact
          </label>
          <input
            type="number"
            className="form-control"
            id="inputSalary"
            name="contact"
            required
            placeholder="Enter Contact"
            autoComplete="off"
            value={data.contact}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
           Email
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            name="email"
            required
            placeholder="Enter Email"
            autoComplete="off"
            value={data.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAge" className="form-label">
           Age
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAge"
            name="age"
            required
            placeholder="Enter Age"
            autoComplete="off"
            value={data.age}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputGender" className="form-label">Gender</label><br />
          <input
            id="inputGender"
            type="radio"
            name="gender"
            value="Male"
            checked={data.gender === "Male"}
            onChange={handleInputChange}
          />&nbsp;
          Male
          &nbsp;&nbsp;&nbsp;
          <input
            id="inputGender"
            type="radio"
            name="gender"
            value="Female"
            checked={data.gender === "Female"}
            onChange={handleInputChange}
          />&nbsp;
          Female
        </div>&nbsp;&nbsp;
        <div className="col-12 p-2">
          <button className="btn btn-success" type="submit">
            Add
          </button>
        </div>
      </form>
      <br /><br /><br /><br />
    </div>
  );
}

export default AddEnquiry;
