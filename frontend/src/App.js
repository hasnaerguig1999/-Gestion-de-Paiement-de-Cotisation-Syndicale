import './App.css';
import Dashboard from './Dashboards/Dashboard';
import ApartementManagement from './Components/ApartementManagement'
import SignUp from './Auth/SignUp'
import SignIn from './Auth/SignIn'
import AddApartement from './Components/AddApartement'
import EditApartement from './Components/EditApartement'
import AdminRoute from './routes/AdminRoute'
import UserRoute from './routes/UserRoute'
import Month from './Calendars/Month'
import Calendar from './Calendars/Calendar'
import  PrintableInvoice  from './facture/PrintableInvoice '


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
            <Route path="/Dashboard" element={<AdminRoute><Dashboard /></AdminRoute>} />
             <Route path="/SignIn" element={<SignIn />} />
             <Route path="/SignUp" element={<SignUp />} />
            <Route path="/AddApartement" element={<AddApartement />}></Route>
            <Route path="/ApartementManagement" element={<ApartementManagement />}></Route>
            <Route path="/Month" element={<Month />}></Route>
            <Route path="/Calendar" element={<Calendar />}></Route>
            <Route path="/ PrintableInvoice " element={< PrintableInvoice />}></Route>

          </Routes>
      

        </Router>
      </div>
    </>
  );
}

export default App;
