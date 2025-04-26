import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";

const EditPlan = () => {
  const [data, setData] = useState({
    name: '',
    amount: '',
    duration: ''
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8081/getPlan/${id}`)
      .then(res => {
        const plan = res.data.Result[0];
        setData(prevData => ({
          ...prevData,
          name: plan.name,
          amount: plan.amount,
          duration: plan.duration
        }));
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedData = {
      name: data.name,
      amount: data.amount,
      duration: data.duration
    };
    axios.put(`http://localhost:8081/updatePlan/${id}`, updatedData)
      .then(res => {
        if (res.data.Status === "Success") {
          navigate('/managePlan');
          alert("Update successful");
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="d-flex flex-column align-items-center pt-4">
      <br />
      <h2 style={{ fontWeight: 'bold' }}>Edit Plan</h2>
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
            onChange={e => setData(prevData => ({ ...prevData, name: e.target.value }))}
            value={data.name}
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
            onChange={e => setData(prevData => ({ ...prevData, amount: e.target.value }))}
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
            onChange={e => setData(prevData => ({ ...prevData, duration: e.target.value }))}
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

export default EditPlan;
