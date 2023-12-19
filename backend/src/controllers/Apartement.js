
const Apartement= require('../models/Apartement');

// Create a new apartement
exports.createApartement = async (req, res) => {
  try {
    const { client, number, status, date } = req.body;
    const newApartement = new Apartement({ client, number, status, date });
    const savedApartement = await newApartement.save();
    res.status(201).json(savedApartement);
  } catch (error) {
    throw error;
  }
};

// Get all apartements
exports.getAllApartements = async (req, res) => {
  try {
    const apartements = await Apartement.find();
    res.status(200).json(apartements);
  } catch (error) {
    throw error;
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
    throw error;
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
    throw error;
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
    throw error;
    }
};

exports.addPayment = async (req, res) => {
  const { id } = req.params; // ID of the apartment
  const { month } = req.body; 

  try {
    const apartment = await Apartement.findById(id);
    if (!apartment) {
      return res.status(404).json({ message: 'Apartment not found' });
    }

    // Add the month to the paidMonths array
    if (!apartment.paidMonths.includes(month)) {
     
      apartment.paidMonths.push(month);

      // Save the updated apartment
      const updatedApartment = await apartment.save();

      res.status(200).json(updatedApartment);
    } else {
      res.status(400).json({ message: 'Payment for this month already exists' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
