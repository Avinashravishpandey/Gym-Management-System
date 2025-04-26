import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";

const EditEnquiry = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [data, setData] = useState({
    name: '',
    email: '',
    contact: '',
    age: '',
    gender: ''
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8081/getEnquiry/${id}`)
      .then(res => {
        const enquiry = res.data.Result[0];
        setData(prevData => ({
          ...prevData,
          name: enquiry.name,
          contact: enquiry.contact,
          age: enquiry.age,
          email: enquiry.email,
          gender: enquiry.gender,
        }));
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedData = {
      name: data.name,
      contact: data.contact,
      age: data.age,
      email: data.email,
      gender: data.gender,
    };
    axios.put(`http://localhost:8081/updateEnquiry/${id}`, updatedData)
      .then(res => {
        if (res.data.Status === "Success") {
          navigate('/manageEnquiry');
          alert("Update successful");
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="d-flex flex-column align-items-center pt-4">
      <br />
      <h2 style={{ fontWeight: 'bold' }}>Edit Enquiry</h2>
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
            onChange={e => setData(prevData => ({ ...prevData, name: e.target.value }))}
            value={data.name}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputContact4" className="form-label">Contact</label>
          <div className="input-group">
          <input
            type="text"
            className="form-control"
            id="inputContact4"
            placeholder="Enter Contact"
            autoComplete="off"
            value={showPassword ? data.contact : "********"}
            onChange={(e) => {
                if (showPassword) {
                setData(prevData => ({ ...prevData, contact: e.target.value }));
                }
            }}
            required
            />
            <span style={{ color: 'blue' }}
              className={`input-group-text toggle-password-2 ${showPassword ? "fa fa-eye-slash" : "fa fa-eye"}`}
              onClick={togglePasswordVisibility}
            ></span>
          </div>
        </div>
        <div className="col-12">
          <label htmlFor="inputEmail4" className="form-label">Email</label>
          <div className="input-group">
          <input
            type="text"
            className="form-control"
            id="inputEmail4"
            placeholder="Enter Email"
            autoComplete="off"
            value={showPassword1 ? data.email : "********"}
            onChange={(e) => {
                if (showPassword1) {
                setData(prevData => ({ ...prevData, email: e.target.value }));
                }
            }}
            required
            />
            <span style={{ color: 'blue' }}
              className={`input-group-text toggle-password-2 ${showPassword1 ? "fa fa-eye-slash" : "fa fa-eye"}`}
              onClick={togglePasswordVisibility1}
            ></span>
          </div>
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
            onChange={e => setData(prevData => ({ ...prevData, age: e.target.value }))}
            value={data.age}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputGender" className="form-label">Gender</label><br />
          <input
            id="inputGenderMale"
            type="radio"
            name="gender"
            value="Male"
            checked={data.gender === "Male"}
            onChange={e => setData(prevData => ({ ...prevData, gender: e.target.value }))}
          />&nbsp;
          Male
          &nbsp;&nbsp;&nbsp;
          <input
            id="inputGenderFemale"
            type="radio"
            name="gender"
            value="Female"
            checked={data.gender === "Female"}
            onChange={e => setData(prevData => ({ ...prevData, gender: e.target.value }))}
          />&nbsp;
          Female
        </div>
        <div className="col-12 p-2">
          <button className="btn btn-success" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditEnquiry;
