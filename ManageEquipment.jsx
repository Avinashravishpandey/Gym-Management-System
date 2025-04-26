import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";

const ManageEquipment = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/getEquipment')
      .then(res => {
        if (res.data.Status === "Success") {
          const equipment = res.data.Result;
          setData(equipment);
        } else {
          alert("Error");
        }
      })
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this equipment?");
    if (confirmed) {
      axios.delete('http://localhost:8081/deleteEquipment/' + id)
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
        <h3 style={{ fontWeight: 'bold' }}>Equipment List</h3>
      </div><br /><br />
      <table className='table table-striped  text-center'>
        <thead className='table-dark'>
          <tr>
            <th>Equipment Name</th>
            <th>Price(In Rs.)</th>
            <th>Unit</th>
            <th>Date</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((equipment, index) => (
            <tr key={index}>
              <td>{equipment.name}</td>
              <td>{equipment.price}</td>
              <td>{equipment.unit}</td>
              <td>{equipment.date}</td>
              <td>{equipment.description.slice(0, 20)}...</td>
              <td>
                <div className="action-buttons">
                  <Link to={`/editEquipment/${equipment.id}`} className='btn btn-primary'>Update</Link>
                  <span style={{ marginLeft: '10px' }}></span>
                  <button onClick={() => handleDelete(equipment.id)} className='btn btn-danger'>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br /><br /><br /><br /><br /><br /><br /><br />
      <br />
      <br />
    </div>
  );
};

export default ManageEquipment;
