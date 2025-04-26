import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './Footer';
// import image from '../../../public/img/trainer/download.jpg';
const AdminHome = () => {
  const navigate = useNavigate();

  const [enquiryCount, setEnquiryCount] = useState()
  const [equipmentCount, setEquipmentCount] = useState()
  const [planCount, setPlanCount] = useState()
  const [memberCount, setMemberCount] = useState()

  useEffect(() => {
      axios.get('http://localhost:8081/enquiryCount')
          .then(res => {
              setEnquiryCount(res.data[0].enquiry)
          }).catch(err => console.log(err));

      axios.get('http://localhost:8081/equipmentCount')
          .then(res => {
              setEquipmentCount(res.data[0].equipment)
          }).catch(err => console.log(err));
          
      axios.get('http://localhost:8081/planCount')
          .then(res => {
              setPlanCount(res.data[0].plan)
          }).catch(err => console.log(err));

      axios.get('http://localhost:8081/memberCount')
          .then(res => {
              setMemberCount(res.data[0].member)
          }).catch(err => console.log(err));
  }, [])

  return (
    <div>

<div>

<div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active d-flex justify-content-center align-items-center" data-bs-interval="2000">
          <img src="img\slider-img\Gymimg1.jpg" className="d-block   " alt="First slide " />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src="img\slider-img\Gymimg2.jpg" className="d-block " alt="Second slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="img\slider-img\Gymimg3.jpg" className="d-block " alt="Third slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button> */}
    </div>


</div>

      
      <br /><br /><br />
      <div className='text-center'><h3 style={{ fontWeight: 'bold', color: "green" }}>Admin&nbsp; Dashboard</h3></div>
      <br />
      <div className='p-3 d-flex justify-content-around mt-3'>
        <div style={{ backgroundColor: "teal" }} className='px-2 pt-2 pb-3 border shadow-sm w-25'>
          <Link to="/manageEnquiry">
          <div className='text-center text-black pb-1'>
            <h4>Enquiry</h4>
          </div>
          <hr /> 
          <div>
            <h4 className=' text-black'>Total: {enquiryCount}</h4>
          </div>
          </Link>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div style={{ backgroundColor: "gray" }} className='px-2 pt-2 pb-3 border shadow-sm w-25'>
        <Link to="/managePlan">
          <div className='text-center text-black pb-1'>
            <h4 className=' text-black'>Plan</h4>
          </div>
          <hr />
          <div>
            <h4 className=' text-black'>Total: {planCount}</h4>
          </div>
          </Link>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div style={{ backgroundColor: "tan" }} className='px-2 pt-2 pb-3 border shadow-sm w-25'>
        <Link to="/manageEquipment">
          <div className='text-center text-black pb-1'>
            <h4>Equipment</h4>
          </div>
          <hr />
          <div>
            <h4 className=' text-black'>Total: {equipmentCount}</h4>
          </div>
          </Link>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div style={{ backgroundColor: "yellow" }} className='px-2 pt-2 pb-3 border shadow-sm w-25'>
        <Link to="/manageMember">
          <div className='text-center text-black pb-1'>
            <h4>Member</h4>
          </div>
          <hr />
          <div>
            <h4 className=' text-black'>Total: {memberCount}</h4>
          </div>
          </Link>
        </div>
      </div>
      <br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br />
      <br /><br /><br /><br />
      <br /><br /><br />
      <br />

    </div>
  );
};

export default AdminHome;