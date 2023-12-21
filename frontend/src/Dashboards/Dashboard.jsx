import Sidebar from '../Sidebars/Sidebar'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../redux/Store/Actions/AuthAction';



export default function Dashboard() {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.auth.auth);

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    if (!users) {
        return <p>No users found.</p>;
    }

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
                                        <button className="btn btn-outline-primary btn-sm mb-0 me-0 p-0" id="btn-admin">
                                            <p className="nav-link text-primary" >Welcome Admin</p>
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
                                            <h6 className="text-white text-capitalize ps-3">Syndics info</h6>
                                        </div>
                                    </div>
                                    <div className="card-body px-0 pb-2">
                                        <div className="table-responsive p-0">
                                            <table className="table align-items-center mb-0">
                                                <thead>
                                                    <tr>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">syndic name</th>
                                                        <th className="text-uppercase text-secondary text-xs font-weight-bold opacity-7 ps-2">syndic email</th>
                                                        <th className="text-secondary opacity-7"></th>
                                                        <th className="text-secondary opacity-7"></th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {users.map((user) => (

                                                        <tr key={user._id}>
                                                            <td>
                                                                <div className="d-flex px-2 py-1">
                                                                    <div>
                                                                        <img src="../assets/img/appartements/appartement 1.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="user1" />
                                                                    </div>
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        <h6 className="mb-0 text-sm">{user.name}</h6>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <p className="text-xs font-weight-bold mb-0">{user.email}</p>
                                                            </td>
                                                            <td className="align-middle text-center">
                                                                <span className="text-secondary text-xs font-weight-bold"></span>
                                                            </td>
                                                            <td className="align-middle">
                                                                <button className="btn border-none">
                                                                    <p  className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">

                                                                    </p>
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

