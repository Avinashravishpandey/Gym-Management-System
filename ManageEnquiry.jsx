import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";

const ManageEnquiry = () => {
  const [showPassword, setShowPassword] = useState({});
  const [showPassword1, setShowPassword1] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/getEnquiry')
      .then(res => {
        if (res.data.Status === "Success") {
          const enquiry = res.data.Result;
          const initialShowPasswordState = enquiry.reduce((state, enquiry) => {
            return {
              ...state,
              [enquiry.id]: false
            };
          }, {});
          setShowPassword(initialShowPasswordState);
          setShowPassword1(initialShowPasswordState);
          setData(enquiry);
        } else {
          alert("Error");
        }
      })
      .catch(err => console.log(err));
  }, []);

  const togglePasswordVisibility = (id) => {
    setShowPassword(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  const togglePasswordVisibility1 = (id) => {
    setShowPassword1(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this enquiry?");
    if (confirmed) {
      axios.delete('http://localhost:8081/deleteEnquiry/' + id)
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
        <h3 style={{ fontWeight: 'bold' }}>Enquiry List</h3>
      </div><br /><br />
      <table className='table table-striped  text-center'>
        <thead className='table-dark'>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((enquiry, index) => {
            const isPasswordVisible = showPassword[enquiry.id];
            const isPasswordVisible1 = showPassword1[enquiry.id];
            return (
              <tr key={index}>
                <td>{enquiry.name}</td>
                <td>
                  <div className="contact-field">
                    <span
                      className={`fa ${isPasswordVisible ? "fa-eye-slash" : "fa-eye"} field-icon toggle-password-2`}
                      onClick={() => togglePasswordVisibility(enquiry.id)}
                    ></span>
                    {isPasswordVisible ? enquiry.contact : "********"}
                  </div>
                </td>
                <td>{enquiry.age}</td>
                <td>{enquiry.gender}</td>
                <td>
                  <div className="contact-field">
                    <span
                      className={`fa ${isPasswordVisible1 ? "fa-eye-slash" : "fa-eye"} field-icon toggle-password-2`}
                      onClick={() => togglePasswordVisibility1(enquiry.id)}
                    ></span>
                    {isPasswordVisible1 ? enquiry.email : "********"}
                  </div>
                </td>
                <td>
                  <div className="action-buttons">
                    <Link to={`/editEnquiry/${enquiry.id}`} className='btn btn-primary'>Update</Link>
                    <span style={{ marginLeft: '10px' }}></span>
                    <button onClick={() => handleDelete(enquiry.id)} className='btn btn-danger'>Delete</button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br />
      <br />
    </div>
  );
};

export default ManageEnquiry;
