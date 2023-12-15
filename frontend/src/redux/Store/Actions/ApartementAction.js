import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8000"
axios.interceptors.request.use((req) => {
  if (!localStorage.getItem('userData')) return req
  const user  =JSON.parse(localStorage.getItem('userData'))
  const token = user.token
      req.headers.Authorization =`Bearer ${token}`;


    return req;
  });

export const GET_ALL_APARTMENTS_SUCCESS = 'GET_ALL_APARTMENTS_SUCCESS';
export const GET_ALL_APARTMENTS_FAILURE = 'GET_ALL_APARTMENTS_FAILURE';
export const CREATE_APARTMENT_SUCCESS = 'CREATE_APARTMENT_SUCCESS';
export const CREATE_APARTMENT_FAILURE = 'CREATE_APARTMENT_FAILURE';
export const GET_APARTMENT_BY_ID_SUCCESS = 'GET_APARTMENT_BY_ID_SUCCESS';
export const GET_APARTMENT_BY_ID_FAILURE = 'GET_APARTMENT_BY_ID_FAILURE';
export const UPDATE_APARTMENT_SUCCESS = 'UPDATE_APARTMENT_SUCCESS';
export const UPDATE_APARTMENT_FAILURE = 'UPDATE_APARTMENT_FAILURE';
export const DELETE_APARTEMENT_REQUEST = 'DELETE_APARTEMENT_REQUEST';
export const DELETE_APARTEMENT_SUCCESS = 'DELETE_APARTEMENT_SUCCESS';
export const DELETE_APARTEMENT_FAILURE = 'DELETE_APARTEMENT_FAILURE';
export const UPDATE_APARTMENT_STATUS = 'UPDATE_APARTMENT_STATUS';


export const getAllApartmentsSuccess = (apartments) => ({
  type: GET_ALL_APARTMENTS_SUCCESS,
  payload: apartments,
});

export const getAllApartmentsFailure = (error) => ({
  type: GET_ALL_APARTMENTS_FAILURE,
  payload: error,
});


export const getAllApartments = () => async (dispatch) => {
  try {
    const response = await axios.get('/apartement');
    dispatch(getAllApartmentsSuccess(response.data));
  } catch (error) {
    dispatch(getAllApartmentsFailure(error.message));
  }
};

export const createApartmentSuccess = (apartment) => ({
  type: CREATE_APARTMENT_SUCCESS,
  payload: apartment,
});

export const createApartmentFailure = (error) => ({
  type: CREATE_APARTMENT_FAILURE,
  payload: error,
});

export const createApartment = (apartmentData) => async (dispatch) => {
  try {
    const response = await axios.post('apartement', apartmentData);
    dispatch(createApartmentSuccess(response.data));
  } catch (error) {
    dispatch(createApartmentFailure(error.message));
  }
};
export const getApartmentByIdSuccess = (apartment) => ({
  type: GET_APARTMENT_BY_ID_SUCCESS,
  payload: apartment,
});

export const getApartmentByIdFailure = (error) => ({
  type: GET_APARTMENT_BY_ID_FAILURE,
  payload: error,
});

export const updateApartmentSuccess = (apartment) => ({
  type: UPDATE_APARTMENT_SUCCESS,
  payload: apartment,
});

export const updateApartmentFailure = (error) => ({
  type: UPDATE_APARTMENT_FAILURE,
  payload: error,
});


export const getApartmentById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/apartement/${id}`);
    dispatch(getApartmentByIdSuccess(response.data));
  } catch (error) {
    dispatch(getApartmentByIdFailure(error.message));
  }
};


export const updateApartment = (id, updatedData) => async (dispatch) => {
  try {
    const response = await axios.put(`/apartement/${id}`, updatedData);
    dispatch(updateApartmentSuccess(response.data));
  } catch (error) {
    dispatch(updateApartmentFailure(error.message));
  }
};

const deleteApartementRequest = () => ({
  type: DELETE_APARTEMENT_REQUEST,
});

const deleteApartementSuccess = (deletedApartement) => ({
  type: DELETE_APARTEMENT_SUCCESS,
  payload: deletedApartement,
});

const deleteApartementFailure = (error) => ({
  type: DELETE_APARTEMENT_FAILURE,
  payload: error,
});
export const deleteApartement = (apartementId) => async (dispatch) => {
  try {
    dispatch(deleteApartementRequest());
    const response = await axios.delete(`/apartement/${apartementId}`);

    dispatch(deleteApartementSuccess(response.data));
    alert('Apartment deleted successfully');
  } catch (error) {
    dispatch(deleteApartementFailure(error.message));
    alert(`Error deleting apartment: ${error.message}`);
  }
};

export const updateApartmentStatus = (apartmentId, newStatus) => async (dispatch) => {
  try {
    const response = await axios.put(`/apartement/${apartmentId}`, { status: newStatus });

    if (response.status === 200) {
      dispatch({
        type: UPDATE_APARTMENT_STATUS,
        payload: { apartmentId, newStatus },
      });
    }
  } catch (error) {
    console.error('Error updating apartment status:', error);
  }
};