import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPlan = () => {
  const [data, setData] = useState({
    name: '',
    amount: '',
    duration: ''
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:8081/addPlan', data);
      alert('Plan added successfully');
      navigate('/managePlan');
    } catch (error) {
      console.log(error);
    }
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
      <br />
      <h2 style={{ fontWeight: 'bold' }}>Add Plan</h2>
      <br />
      <form className="row g-3 w-50 container border p-4" onSubmit={handleSubmit}>
        <div className="col-12">
          <label htmlFor="inputName4" className="form-label">
            Plan Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName4"
            name="name"
            required
            placeholder="Enter Plan Name"
            autoComplete="off"
            value={data.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputSalary" className="form-label">
           Amount
          </label>
          <input
            type="text"
            className="form-control"
            id="inputSalary"
            name="amount"
            required
            placeholder="Enter Amount(In RS.)"
            autoComplete="off"
            value={data.amount}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
           Duration
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            name="duration"
            required
            placeholder="Enter Duration(In Months)"
            autoComplete="off"
            value={data.duration}
            onChange={handleInputChange}
          />
        </div>
        &nbsp;&nbsp;
        <div className="col-12 p-2">
          <button className="btn btn-success" type="submit">
            Add
          </button>
        </div>
      </form>
      <br /><br /><br /><br />
      <br /><br /><br /><br />
      <br />
    </div>
  );
}

export default AddPlan;
