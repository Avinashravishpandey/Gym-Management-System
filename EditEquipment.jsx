import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";

const EditEquipment = () => {
  const [data, setData] = useState({
    name: '',
    price: '',
    unit: '',
    date: '',
    description: ''
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8081/getEquipment/${id}`)
      .then(res => {
        const equipment = res.data.Result[0];
        setData(prevData => ({
          ...prevData,
          name: equipment.name,
          price: equipment.price,
          unit: equipment.unit,
          date: equipment.date,
          description: equipment.description
        }));
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedData = {
      name: data.name,
      price: data.price,
      unit: data.unit,
      date: data.date,
      description: data.description
    };
    axios.put(`http://localhost:8081/updateEquipment/${id}`, updatedData)
      .then(res => {
        if (res.data.Status === "Success") {
          navigate('/manageEquipment');
          alert("Update successful");
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="d-flex flex-column align-items-center pt-4">
      <br />
      <h2 style={{ fontWeight: 'bold' }}>Edit Equipment</h2>
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
            onChange={e => setData(prevData => ({ ...prevData, name: e.target.value }))}
            value={data.name}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputSalary" className="form-label">
           Price
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
            onChange={e => setData(prevData => ({ ...prevData, price: e.target.value }))}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputSalary" className="form-label">
          Unit
          </label>
          <input
            type="text"
            className="form-control"
            id="inputSalary"
            name="unit"
            required
            placeholder="Enter Unit"
            autoComplete="off"
            value={data.unit}
            onChange={e => setData(prevData => ({ ...prevData, unit: e.target.value }))}
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
            placeholder="Enter Date"
            autoComplete="off"
            value={data.date}
            onChange={e => setData(prevData => ({ ...prevData, date: e.target.value }))}
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
            onChange={e => setData(prevData => ({ ...prevData, description: e.target.value }))}
          />
        </div>
        <div className="col-12 p-2">
          <button className="btn btn-success" type="submit">
            Update
          </button>
        </div>
      </form>
      <br />
      <br />
    </div>
  );
}

export default EditEquipment;
