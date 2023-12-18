import './App.css';
import Dashboard from './Dashboards/Dashboard';
import ApartementManagement from './Components/ApartementManagement'
import SignUp from './Auth/SignUp'
import SignIn from './Auth/SignIn'
import AddApartement from './Components/AddApartement'
import EditApartement from './Components/EditApartement'
import AdminRoute from './routes/AdminRoute'
import UserRoute from './routes/UserRoute'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"



function App() {
  return (
    <>
      <div className="App">


        <Router>
          <Routes>
            {/* <Route path="/ApartementManagement" element={<ApartementManagement />}></Route> */}
            <Route path="/SignUp" element={<SignUp />}></Route>
            <Route path="/SignIn" element={<SignIn />}></Route>
            <Route path="/ApartementManagement" element={<UserRoute><ApartementManagement /></UserRoute>} />
             <Route path="/AddApartement" element={<UserRoute><AddApartement /></UserRoute>} />
             <Route path="/EditApartement" element={<UserRoute><EditApartement /></UserRoute>} >
              <Route path="/EditApartement/:id" element={<EditApartement />} />
             </Route>
            {/* <Route path="/AddApartement" element={<AddApartement />}></Route> */}
            {/* <Route path="/Dashboard" element={<Dashboard />}></Route> */}
            {/* <Route path="/Dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} /> */}
            <Route path="/Dashboard" element={<AdminRoute><Dashboard /></AdminRoute>} />
             <Route path="/SignIn" element={<SignIn />} />
             <Route path="/SignUp" element={<SignUp />} />
            {/* <Route path="/EditApartement" element={<EditApartement />}>
              <Route path="/EditApartement/:id" element={<EditApartement />} />
              
            </Route> */}
            <Route path="/AddApartement" element={<AddApartement />}></Route>
            <Route path="/ApartementManagement" element={<ApartementManagement />}></Route>
          </Routes>


        </Router>
      </div>
    </>
  );
}

export default App;
