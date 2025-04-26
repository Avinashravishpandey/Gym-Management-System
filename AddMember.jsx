import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddMember = () => {
  const [data, setData] = useState({
    planId: '',
    name: '',
    contact: '',
    email: '',
    age: '',
    gender: '',
    jdate: '',
    edate: '',
    inamount: ''
  });

  const [myPlans, setMyPlans] = useState([]);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch doctors and patients data
    const fetchPlans = async () => {
      try {
        const response = await axios.get('http://localhost:8081/getPlans');
        if (Array.isArray(response.data)) {
          setMyPlans(response.data);
        } else {
          setError('Failed to fetch plans. Invalid response.');
        }
      } catch (error) {
        setError('Failed to fetch plans.');
        console.log(error);
      }
    };

    fetchPlans();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Client-side validation
    if (!data.planId ||
        !data.name ||
        !data.contact ||
        !data.email ||
        !data.age ||
        !data.gender ||
        !data.jdate ||
        !data.edate ||
        !data.inamount) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      await axios.post('http://localhost:8081/addMember', data);
      navigate('/manageMember');
      alert('Member added successfully');
    } catch (error) {
      setError('Failed to add member.');
      console.log(error);
    } 
  };

  return (
    <div className="d-flex flex-column align-items-center pt-4">
      <br />
      <br />
      {error && <div className="alert alert-danger">{error}</div>}
      <h2 style={{ fontWeight: 'bold' }}>Add Member</h2>
      <br />
      <form className="row g-3 w-50 container border p-4" onSubmit={handleSubmit}>
        <div className="col-12">
          <label htmlFor="inputName4" className="form-label">
           Member Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName4"
            name="name"
            required
            placeholder="Enter Member Name"
            autoComplete="off"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputName4" className="form-label">
          Contact
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName4"
            name="contact"
            required
            placeholder="Enter Contact Number"
            autoComplete="off"
            value={data.contact}
            onChange={(e) => setData({ ...data, contact: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputName4" className="form-label">
          Email Id
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName4"
            name="email"
            required
            placeholder="Enter Email"
            autoComplete="off"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputName4" className="form-label">
           Age
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName4"
            name="age"
            required
            placeholder="Enter Age"
            autoComplete="off"
            value={data.age}
            onChange={(e) => setData({ ...data, age: e.target.value })}
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
            onChange={(e) => setData({ ...data, gender: e.target.value })}
          />&nbsp;
          Male
          &nbsp;&nbsp;&nbsp;
          <input
            id="inputGender"
            type="radio"
            name="gender"
            value="Female"
            checked={data.gender === "Female"}
            onChange={(e) => setData({ ...data, gender: e.target.value })}
          />&nbsp;
          Female
        </div>
        <div className="col-12">
          <label htmlFor="inputDoctor" className="form-label">
            Plan
          </label>
          <select
            className="form-control"
            id="inputDoctor"
            value={data.planId}
            onChange={(e) => setData({ ...data, planId: e.target.value })}
          >
            <option value="">Select Plan</option>
            {myPlans.map((plan) => (
              <option key={plan.name} value={plan.name}>
                {plan.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
           Joining Date
          </label>
          <input
            type="date"
            className="form-control"
            id="inputAddress"
            name="jdate"
            required
            placeholder="Enter Joining date"
            autoComplete="off"
            value={data.jdate}
            onChange={(e) => setData({ ...data, jdate: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
           Plan Expire Date
          </label>
          <input
            type="date"
            className="form-control"
            id="inputAddress"
            name="edate"
            required
            placeholder="Enter Expire date"
            autoComplete="off"
            value={data.edate}
            onChange={(e) => setData({ ...data, edate: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputSalary" className="form-label">
           Initial Amount(In RS.)
          </label>
          <input
            type="text"
            className="form-control"
            id="inputSalary"
            name="inamount"
            required
            placeholder="Enter Initial Amount Paid"
            autoComplete="off"
            value={data.inamount}
            onChange={(e) => setData({ ...data, inamount: e.target.value })}
          />
        </div>
        &nbsp;&nbsp;
        <div className="col-12 p-2">
          <button className="btn btn-success" type="submit">
            Add
          </button>
        </div>
      </form>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
}

export default AddMember;
