import './App.css';
import Dashboard from './Dashboards/Dashboard';
import ApartementManagement from './Components/ApartementManagement'
import SignUp from './Auth/SignUp'
import SignIn from './Auth/SignIn'
import AddApartement from './Components/AddApartement'
import EditApartement from './Components/EditApartement'
import {BrowserRouter as Router,Routes,Route, Form} from "react-router-dom"

function App() {
  return (
    <>
    <div className="App">
    {/* <div className="g-sidenav-show  bg-gray-200" >
      <Sidebar />
      </div> */}
    </div>
    <Router>
        <Routes>
        <Route path="/ApartementManagement" element={<ApartementManagement/>}></Route>
        <Route path="/SignUp" element={<SignUp/>}></Route>
        <Route path="/SignIn" element={<SignIn/>}></Route>
        <Route path="/AddApartement" element={<AddApartement/>}></Route>
        <Route path="/Dashboard" element={<Dashboard/>}></Route>
        <Route path="/EditApartement" element={<EditApartement/>}></Route>
        <Route path="/AddApartement" element={<AddApartement/>}></Route>
        <Route path="/ApartementManagement" element={<ApartementManagement/>}></Route>


      
      </Routes>
    
      
    </Router>
    </>
  );
}

export default App;
