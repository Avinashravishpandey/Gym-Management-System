import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEquipment = () => {
  const [data, setData] = useState({
    name: '',
    price: '',
    unit: '',
    date: '',
    description: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:8081/addEquipment', data);
      alert('Equipment added successfully');
      navigate('/manageEquipment');
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
      <h2 style={{ fontWeight: 'bold' }}>Add Equipment</h2>
      <br />
      <form className="row g-3 w-50 container border p-4" onSubmit={handleSubmit}>
        <div className="col-12">
          <label htmlFor="inputName4" className="form-label">
          Equipment Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName4"
            name="name"
            required
            placeholder="Enter Equipment Name"
            autoComplete="off"
            value={data.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputSalary" className="form-label">
           Price(In RS.)
          </label>
          <input
            type="text"
            className="form-control"
            id="inputSalary"
            name="price"
            required
            placeholder="Enter Price(In RS.)"
            autoComplete="off"
            value={data.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
           Unit
          </label>
          <input
            type="number"
            className="form-control"
            id="inputAddress"
            name="unit"
            required
            placeholder="Enter Unit"
            autoComplete="off"
            value={data.unit}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
           Date
          </label>
          <input
            type="date"
            className="form-control"
            id="inputAddress"
            name="date"
            required
            placeholder="Enter date"
            autoComplete="off"
            value={data.date}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
           Description
          </label>
          <textarea
            type="text"
            className="form-control"
            id="inputAddress"
            name="description"
            required
            placeholder="Enter Description"
            autoComplete="off"
            value={data.description}
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
      <br /><br /><br />
    </div>
  );
}

export default AddEquipment;
