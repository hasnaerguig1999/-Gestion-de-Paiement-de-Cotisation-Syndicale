
const authMiddleware = require('../middlewares/authMiddleware');


const express = require('express');
const {  createApartement, getAllApartements , updateApartementById  ,deleteApartementById,getApartementById  } = require('../controllers/Apartement');

const Apartementrouter = express.Router();
Apartementrouter.use(authMiddleware);

Apartementrouter.get("/", getAllApartements);
Apartementrouter.post('/', createApartement);
Apartementrouter.delete('/:id', deleteApartementById);
Apartementrouter.put('/:id', updateApartementById);
Apartementrouter.get('/:id', getApartementById);




module.exports = Apartementrouter;


