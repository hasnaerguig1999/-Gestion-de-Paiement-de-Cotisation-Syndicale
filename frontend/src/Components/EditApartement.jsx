import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getApartmentById, updateApartment } from '../redux/Store/Actions/ApartementAction';

export default function EditApartement() {
  const { id } = useParams();
  const dispatch = useDispatch();


  const apartment = useSelector((state) => state.apartment); 

  console.log(apartment);

  const [apartmentData, setApartmentData] = useState({
    client: '',
    number: '',
    date: '',
  });

  useEffect(() => {
    // Dispatch an action to get apartment details by ID
    if (id) {
      dispatch(getApartmentById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    // Update local state when apartment details change
    if (apartment) {
      setApartmentData(apartment);
    }
  }, [apartment]);

  const handleInputChange = (e) => {
    setApartmentData({ ...apartmentData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Dispatch an action to update the apartment
    dispatch(updateApartment(id, apartmentData));
  };

  // if (!apartment) {
  //   return <p>Loading...</p>;
  // }

  return (
    <>
    <div className="main-content mt-0">
     <div className='page-header align-items-start min-vh-100'>
     <span className="mask bg-gradient-dark opacity-6"></span>
      <div className="container my-auto">
        <div className="row">
          <div className="col-lg-4 col-md-8 col-12 mx-auto">
            <div className="card z-index-0 fadeIn3 fadeInBottom  mt-2">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                  <h4 className="text-white font-weight-bolder text-center mt-2 mb-0  mt-2">Edit Apartement</h4>
                  <div className="row mt-3">
                    <div className="col-2 text-center ms-auto">
                    </div>
                    <div className="col-2 text-center px-1">
                    </div>
                    <div className="col-2 text-center me-auto">
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="card-body">
                <form role="form">
                        <div className="input-group input-group-outline mb-3">
                          <input type="hidden" className="form-control" name="id" value={id} readOnly />
                        </div>
                        <div className="input-group input-group-outline mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Client"
                            name="client"
                            value={apartmentData.client || ''}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="input-group input-group-outline mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Numero"
                            name="number"
                            value={apartmentData.number || ''}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="input-group input-group-outline mb-3">
                          <input
                            type="date"
                            className="form-control"
                            name="date"
                            value={apartmentData.date || ''}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="text-center">
                          <button
                            type="button"
                            className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0"
                            onClick={handleSave}
                          >
                            Save
                          </button>
                        </div>
                      </form>
                </div>
                <div className="card-footer text-center pt-0 px-lg-2 px-1">
                    <a href="./Dashboard" className="text-primary text-gradient font-weight-bold">return to dashboard</a>
                  
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
     </div>
    </div>
    </>
  )
}
