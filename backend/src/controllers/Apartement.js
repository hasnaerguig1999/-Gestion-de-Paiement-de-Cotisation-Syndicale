// const { ApartementModel } = require("../models/Apartement");
const Apartement= require('../models/Apartement');

// Create a new apartement
exports.createApartement = async (req, res) => {
  try {
    const { client, number, status, date } = req.body;
    const newApartement = new Apartement({ client, number, status, date });
    const savedApartement = await newApartement.save();
    res.status(201).json(savedApartement);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all apartements
exports.getAllApartements = async (req, res) => {
  try {
    const apartements = await Apartement.find();
    res.status(200).json(apartements);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get apartementby ID
exports.getApartementById = async (req, res) => {
  try {
    const apartement = await Apartement.findById(req.params.id);
    if (!apartement) {
      return res.status(404).json({ error: 'Apartement not found' });
    }
    res.status(200).json(apartement);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update apartement by ID
exports.updateApartementById = async (req, res) => {
  try {
    const updatedApartement = await Apartement.findByIdAndUpdate(
      req.params.id,
      req.body,
      
      
      { new: true }
    );
    if (!updatedApartement) {
      return res.status(404).json({ error: 'Apartement not found' });
    }
    res.status(200).json(updatedApartement);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete apartment by ID
exports.deleteApartementById = async (req, res) => {
  try {
    const deletedApartement = await Apartement.findByIdAndDelete(req.params.id);
    if (!deletedApartement) {
      return res.status(404).json({ error: 'Apartment not found' });
    }
    res.status(200).json(deletedApartement);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
