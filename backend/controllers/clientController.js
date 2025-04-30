 
const Client = require("../models/clientModel");

// Obtenir tous les clients
exports.getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Ajouter un client
exports.addClient = async (req, res) => {
  try {
    const { nom, age, email } = req.body;
    const newClient = new Client({ nom, age, email });
    await newClient.save();
    res.status(201).json(newClient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
