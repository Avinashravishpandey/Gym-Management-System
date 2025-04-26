import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

function EditMember() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const [data, setData] = useState({
    planId: '',
    name: '',
    contact: '', 
    email: '',
    age: '',
    gender: '',
    jdate: '',
    edate: '',
    inamount: '',
  });
  const [myPlans, setMyPlans] = useState([]);
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/getMember/${id}`);
        if (response.data.Status === 'Success') {
          const member = response.data.Result[0];
          setData({
            planId: member.planId,
            name: member.name,
            contact: member.contact,
            email: member.email,
            age: member.age,
            gender: member.gender,
            jdate: member.jdate,
            edate: member.edate,
            inamount: member.inamount,
          });
        } else {
          setError('Failed to fetch member data.');
        }
      } catch (error) {
        setError('Failed to fetch member data.');
        console.log(error);
      }
    };

    fetchMember();

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
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedData = {
      planId: data.planId,
      name: data.name,
      contact: data.contact,
      email: data.email,
      age: data.age,
      gender: data.gender,
      jdate: data.jdate,
      edate: data.edate,
      inamount: data.inamount,
    };
    axios
      .put(`http://localhost:8081/updateMember/${id}`, updatedData)
      .then((res) => {
        if (res.data.Status === 'Success') {
          navigate('/manageMember');
          alert('Update successfully');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex flex-column align-items-center pt-4">
      <br />
      {error && <div className="alert alert-danger">{error}</div>}
      <h2 style={{ fontWeight: 'bold' }}>Edit Member</h2>
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
            value={data.age}
            onChange={(e) => setData({ ...data, age: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputGender" className="form-label">
            Gender
          </label>
          <br />
          <input
            id="inputGenderMale"
            type="radio"
            name="gender"
            value="Male"
            checked={data.gender === 'Male'}
            onChange={(e) => setData({ ...data, gender: e.target.value })}
          />
          &nbsp; Male &nbsp;&nbsp;&nbsp;
          <input
            id="inputGenderFemale"
            type="radio"
            name="gender"
            value="Female"
            checked={data.gender === 'Female'}
            onChange={(e) => setData({ ...data, gender: e.target.value })}
          />
          &nbsp; Female
        </div>
        <div className="col-12">
          <label htmlFor="inputPlan" className="form-label">
            Plan
          </label>
          <select
            className="form-control"
            id="inputPlan"
            value={data.planId}
            onChange={(e) => setData({ ...data, planId: e.target.value })}
          >
            <option value="">Select Plan</option>
            {myPlans.map((plan) => (
              <option key={plan.id} value={plan.name}>
                {plan.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-12">
          <label htmlFor="inputJoiningDate" className="form-label">
            Joining Date
          </label>
          <input
            type="date"
            className="form-control"
            id="inputJoiningDate"
            name="jdate"
            required
            placeholder="Enter Joining date"
            autoComplete="off"
            value={data.jdate}
            onChange={(e) => setData({ ...data, jdate: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputExpireDate" className="form-label">
            Plan Expire Date
          </label>
          <input
            type="date"
            className="form-control"
            id="inputExpireDate"
            name="edate"
            required
            placeholder="Enter Expire date"
            autoComplete="off"
            value={data.edate}
            onChange={(e) => setData({ ...data, edate: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputInitialAmount" className="form-label">
            Initial Amount (In RS.)
          </label>
          <input
            type="text"
            className="form-control"
            id="inputInitialAmount"
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
            Update
          </button>
        </div>
      </form>
      <br /><br /><br /><br />
      <br /><br /><br /><br />
    </div>
  );
}

export default EditMember;
