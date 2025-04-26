import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ManageMember = () => {
  const [showPassword, setShowPassword] = useState({});
  const [showPassword1, setShowPassword1] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get('http://localhost:8081/getMember');
        if (response.data.Status === 'Success') {
          setData(response.data.Result);
        } else {
          alert('Error');
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchMembers();
  }, []);

  const handleDelete = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this member?');
    if (confirmed) {
      axios
        .delete(`http://localhost:8081/deleteMember/${id}`)
        .then((res) => {
          if (res.data.Status === 'Success') {
            window.location.reload(true);
          } else {
            alert('Error');
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const togglePasswordVisibility = (id) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const togglePasswordVisibility1 = (id) => {
    setShowPassword1((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="px-5 pt-3">
      <br />
      <div className="d-flex justify-content-center">
        <h3 style={{ fontWeight: 'bold' }}>Member List</h3>
      </div>
      <br />
      <br />
      <table className="table table-striped text-center">
        <thead className="table-dark">
          <tr>
            <th>Member Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((member, index) => {
            const isPasswordVisible = showPassword[member.id];
            const isPasswordVisible1 = showPassword1[member.id];
            return (
              <tr key={index}>
                <td>{member.name}</td>
                <td>
                  <div className="contact-field">
                    <span
                      className={`fa ${isPasswordVisible ? 'fa-eye-slash' : 'fa-eye'} field-icon toggle-password-2`}
                      onClick={() => togglePasswordVisibility(member.id)}
                    ></span>
                    {isPasswordVisible ? member.contact : '********'}
                  </div>
                </td>
                <td>
                  <div className="contact-field">
                    <span
                      className={`fa ${isPasswordVisible1 ? 'fa-eye-slash' : 'fa-eye'} field-icon toggle-password-2`}
                      onClick={() => togglePasswordVisibility1(member.id)}
                    ></span>
                    {isPasswordVisible1 ? member.email : '********'}
                  </div>
                </td>
                <td>{member.gender}</td>
                <td>{member.age}</td>
                <td>
                  <div className="action-buttons">
                    <Link to={`/editMember/${member.id}`} className="btn btn-primary">
                      Update
                    </Link>
                    <span style={{ marginLeft: '10px' }}></span>
                    <button onClick={() => handleDelete(member.id)} className="btn btn-danger">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default ManageMember;
