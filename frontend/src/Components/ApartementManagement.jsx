import { Link } from 'react-router-dom';
import Sidebar from '../Sidebars/Sidebar'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllApartments, deleteApartement, updateApartmentStatus } from '../redux/Store/Actions/ApartementAction';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


export default function ApartementManagement() {
  const dispatch = useDispatch();
  const apartments = useSelector((state) => {
    return state.apartements.apartments;
  });

  const handleDelete = (apartmentId) => {
    if (window.confirm('Are you sure you want to delete this apartment?')) {
      dispatch(deleteApartement(apartmentId));
      showAlert('Apartment deleted successfully!', '#E91E63');
    }
  };

  const showAlert = (message, color) => {
    const alertDiv = document.createElement('div');
    alertDiv.style.backgroundColor = color;
    alertDiv.style.color = 'white';
    alertDiv.style.padding = '10px';
    alertDiv.style.borderRadius = '5px';
    alertDiv.style.position = 'fixed';
    alertDiv.style.top = '10px';
    alertDiv.style.left = '50%';
    alertDiv.style.transform = 'translateX(-50%)';
    alertDiv.innerHTML = message;

    document.body.appendChild(alertDiv);
    setTimeout(() => {
      alertDiv.remove();
    }, 5000);
  };


  const handleStatusChange = (apartmentId, currentStatus) => {
    const newStatus = !currentStatus;
    dispatch(updateApartmentStatus(apartmentId, newStatus));
    showAlert(`Apartment status changed to ${newStatus ? 'Payé' : 'Impayé'}!`, '#E91E63');
  };



  useEffect(() => {
    dispatch(getAllApartments());
  }, []);
  return (
    <>
      <div className="g-sidenav-show  bg-gray-200" style={{ height: '158vh' }} >
        <Sidebar />
        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg " >
          <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" data-scroll="true">
            <div className="container-fluid py-1 px-3">
              <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                  <div className="input-group input-group-outline">
                    <button className="btn btn-outline-primary btn-sm mb-0 me-0 p-0">
                      <Link className="nav-link text-primary" to="/AddApartement">Add More</Link>
                    </button>

                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="container-fluid py-4" >
            <div className="row">
              <div className="col-12">
                <div className="card my-2 w-75" id="containere">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3" id="gradient">
                      <h6 className="text-white text-capitalize ps-3">Apartment info</h6>
                    </div>
                  </div>
                  <div className="card-body px-0 pb-2">
                    <div className="table-responsive p-0">
                      <table className="table align-items-center mb-0">
                        <thead>
                          <tr>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Clients</th>
                            <th className="text-uppercase text-secondary text-xs font-weight-bold opacity-7 ps-2">Number</th>
                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Date</th>
                            <th className="text-secondary opacity-7"></th>
                            <th className="text-secondary opacity-7"></th>

                          </tr>
                        </thead>
                        <tbody>
                          {apartments && apartments.map((apartment) => (
                            <tr key={apartment._id}>
                              <td>
                                <div className="d-flex px-2 py-1">
                                  <div>
                                    <img src="../assets/img/appartements/appartement 1.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="user1" />
                                  </div>
                                  <div className="d-flex flex-column justify-content-center">
                                    <h6 className="mb-0 text-sm">{apartment.client}</h6>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <p className="text-xs font-weight-bold mb-0">{apartment.number}</p>
                              </td>
                              <td className="align-middle text-center text-sm">
                                <button className={`btn border-none badge badge-sm ${apartment.status ? 'bg-gradient-success' : 'bg-gradient-secondary'}`} onClick={() => handleStatusChange(apartment._id, apartment.status)}>
                                  {apartment.status ? 'Payé' : 'Impayé'}
                                </button>
                              </td>
                              <td className="align-middle text-center">
                                <span className="text-secondary text-xs font-weight-bold">{apartment.date}</span>
                              </td>
                              <td className="align-middle">
                                <button className="btn border-none">
                                  <Link to={`/EditApartement/${apartment._id}`} className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                    <FaEdit />
                                  </Link>
                                </button>
                              </td>


                              <td className="align-middle">
                                <button className="btn border-none" onClick={() => handleDelete(apartment._id)}>
                                  <a href="" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                    <MdDelete />
                                  </a>
                                </button>
                              </td>
                            </tr>

                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </main>
      </div>
    </>
  )
}

