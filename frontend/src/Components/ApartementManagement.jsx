import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebars/Sidebar'
import AddApartement from './AddApartement'

export default function  ApartementManagement() {
  return (
    <>
    <div className="g-sidenav-show  bg-gray-200"  style={{ height: '158vh' }} >
    <Sidebar />
    <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg " >
    <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" data-scroll="true">
      <div className="container-fluid py-1 px-3">
        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <div className="ms-md-auto pe-md-3 d-flex align-items-center">
            <div className="input-group input-group-outline">
              <button className="btn btn-outline-primary btn-sm mb-0 me-0 p-0">
                <Link className="nav-link text-primary"  to="/AddApartement">Add More</Link>
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
              <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3"  id="gradient">
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
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img src="../assets/img/appartements/appartement 1.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="user1" />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">John Michael</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-xs font-weight-bold mb-0">lamia</p>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="badge badge-sm bg-gradient-success">Payé</span>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
                      </td>
                      <td className="align-middle">
                        <a href="./EditApartement" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                          Edit
                        </a>
                      </td>
                      
                      
                      <td className="align-middle">
                        <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                          Delete
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img src="../assets/img/appartements/appartement 1.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="user2" />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">Alexa Liras</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-xs font-weight-bold mb-0">lamia</p>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="badge badge-sm bg-gradient-secondary">impayé</span>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-xs font-weight-bold">11/01/19</span>
                      </td>
                      <td className="align-middle">
                        <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                          Edit
                        </a>
                      </td>
                      
                      <td className="align-middle">
                        <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                          Delete
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img src="../assets/img/appartements/appartement 1.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="user3" />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">Laurent Perrier</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-xs font-weight-bold mb-0">lamia</p>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="badge badge-sm bg-gradient-success">Payé</span>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-xs font-weight-bold">19/09/17</span>
                      </td>
                      <td className="align-middle">
                        <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                          Edit
                        </a>
                      </td>
                      
                      <td className="align-middle">
                        <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                          Delete
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img src="../assets/img/appartements/appartement 1.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="user4" />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">Michael Levi</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-xs font-weight-bold mb-0">Matar</p>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="badge badge-sm bg-gradient-success">Payé</span>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-xs font-weight-bold">24/12/08</span>
                      </td>
                      <td className="align-middle">
                        <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                          Edit
                        </a>
                      </td>
                      
                      <td className="align-middle">
                        <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                          Delete
                        </a>
                      </td>
                    </tr>
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
