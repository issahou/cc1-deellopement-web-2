const Commande = require("../models/commandeModel");

// Obtenir toutes les commandes
exports.getCommandes = async (req, res) => {
  try {
    const commandes = await Commande.find().populate("client_id").populate("lignes_commande.produit_id");
    res.status(200).json(commandes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Ajouter une commande
exports.addCommande = async (req, res) => {
  try {
    const { client_id, lignes_commande } = req.body;
    const nouvelleCommande = new Commande({ client_id, lignes_commande, date_commande: new Date() });
    await nouvelleCommande.save();
    res.status(201).json(nouvelleCommande);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
 
