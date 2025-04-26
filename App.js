import './App.css';
import About from './components/About';
import Home from './components/Home';
import AddEnquiry from './components/Admin/AddEnquiry';
import AddEquipment from './components/Admin/AddEquipment';
import AddMember from './components/Admin/AddMember';
import AddPlan from './components/Admin/AddPlan';
import AdminHome from './components/Admin/AdminHome';
import AdminIndex from './components/Admin/AdminIndex';
import EditEnquiry from './components/Admin/EditEnquiry';
import EditEquipment from './components/Admin/EditEquipment';
import EditMember from './components/Admin/EditMember';
import EditPlan from './components/Admin/EditPlan';
import ManageEnquiry from './components/Admin/ManageEnquiry';
import ManageEquipment from './components/Admin/ManageEquipment';
import ManageMember from './components/Admin/ManageMember';
import ManagePlan from './components/Admin/ManagePlan';
import Contact from './components/Contact';
import Index from './components/Index';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminIndex />}>
        <Route path='' element={<AdminHome />} />
        <Route path="/addEnquiry" element={<AddEnquiry />} />
        <Route path="/manageEnquiry" element={<ManageEnquiry />} />
        <Route path="/editEnquiry/:id" element={<EditEnquiry />} />
        <Route path="/addPlan" element={<AddPlan />} />
        <Route path="/managePlan" element={<ManagePlan />} />
        <Route path="/editPlan/:id" element={<EditPlan />} />
        <Route path="/addEquipment" element={<AddEquipment />} />
        <Route path="/manageEquipment" element={<ManageEquipment />} />
        <Route path="/editEquipment/:id" element={<EditEquipment />} />
        <Route path="/addMember" element={<AddMember />} />
        <Route path="/manageMember" element={<ManageMember />} />
        <Route path="/editMember/:id" element={<EditMember />} />
      </Route>
      <Route path="/index" element={<Index />} >
        <Route path="" element={<Home />} />
        <Route path="/index/about" element={<About />} />
        <Route path="/index/contact" element={<Contact />} />
      </Route>
    </Routes>

  );
}

export default App;
