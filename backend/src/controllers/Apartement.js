
const Apartement= require('../models/Apartement');

// Create a new apartement
exports.createApartement = async (req, res) => {
  try {
    let creator = req.id; 
    const { client, number} = req.body;
    const newApartement = new Apartement({ client, number,  creator });
    const savedApartement = await newApartement.save();
    res.status(201).json(savedApartement);
  }catch (error) {
    throw error;
  }
};

// Get all apartements
exports.getAllApartements = async (req, res) => {
  try {
    const apartements = await Apartement.find({ creator: req.id});
    res.status(200).json(apartements);
  } catch (error) {
    throw error;
  }
};

// Get apartementby ID
exports.getApartementById = async (req, res) => {
  try {
    const apartement = await Apartement.findOne({ _id: req.params.id, creator: req.id});
    if (!apartement) {
      return res.status(404).json({ error: 'Apartement not found' });
    }
    res.status(200).json(apartement);
  } catch (error) {
    throw error;
    }
};




// Update apartment by ID
exports.updateApartementById = async (req, res) => {
  try { 
    const updatedApartement = await Apartement.findOneAndUpdate(
      { _id: req.params.id, creator: req.id }, 
      req.body, 
      { new: true } 
    );
    
    if (!updatedApartement) {
      return res.status(404).json({ error: 'Apartment not found' });
    }
    res.status(200).json(updatedApartement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete apartment by ID
exports.deleteApartementById = async (req, res) => {
  try {
    const deletedApartement = await Apartement.findOneAndDelete({_id: req.params.id, creator: req.id});
    if (!deletedApartement) {
      return res.status(404).json({ error: 'Apartment not found' });
      
    }
    res.status(200).json(deletedApartement);
  } catch (error) {
    throw error;
    }
};

exports.addPayment = async (req, res) => {
  const { id } = req.params; 
  const { month } = req.body;
  const creator = req.id;
  


  try {
  
    const apartment = await Apartement.findOne({ _id: id, creator });

    if (!apartment) {
      return res.status(404).json({ message: 'Apartment not found' });
    }
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
