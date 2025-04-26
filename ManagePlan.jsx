import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";

const ManagePlan = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/getPlan')
      .then(res => {
        if (res.data.Status === "Success") {
          const plan = res.data.Result;
          setData(plan);
        } else {
          alert("Error");
        }
      })
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this plan?");
    if (confirmed) {
      axios.delete('http://localhost:8081/deletePlan/' + id)
        .then(res => {
          if (res.data.Status === "Success") {
            window.location.reload(true);
          } else {
            alert("Error");
          }
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className='px-5 pt-3'>
      <br />
      <div className='d-flex justify-content-center'>
        <h3 style={{ fontWeight: 'bold' }}>Plan List</h3>
      </div><br /><br />
      <table className='table table-striped  text-center'>
        <thead className='table-dark'>
          <tr>
            <th>Plan Name</th>
            <th>Amount(In Rs.)</th>
            <th>Duration(In Months)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((plan, index) => (
            <tr key={index}>
              <td>{plan.name}</td>
              <td>{plan.amount}</td>
              <td>{plan.duration}</td>
              <td>
                <div className="action-buttons">
                  <Link to={`/editPlan/${plan.id}`} className='btn btn-primary'>Update</Link>
                  <span style={{ marginLeft: '10px' }}></span>
                  <button onClick={() => handleDelete(plan.id)} className='btn btn-danger'>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br />
      <br />
      <br />
    </div>
  );
};

export default ManagePlan;
