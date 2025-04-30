const Produit = require("../models/produitModel");

// ✅ Récupérer tous les produits avec gestion des erreurs
exports.getProduits = async (req, res) => {
  try {
    const produits = await Produit.find();
    if (!produits.length) {
      return res.status(404).json({ message: "Aucun produit trouvé." }); // ✅ Gestion du cas vide
    }
    res.status(200).json(produits);
  } catch (error) {
    console.error("Erreur lors de la récupération des produits:", error);
    if (!res.headersSent) { // ✅ Vérification avant d'envoyer une réponse
      res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
  }
};

// ✅ Ajouter un produit avec validation
exports.addProduit = async (req, res) => {
  try {
    const { libelle, prix } = req.body;

    // ✅ Vérification des données
    if (!libelle || prix <= 0) {
      return res.status(400).json({ message: "Libellé et prix valides requis." });
    }

    const newProduit = new Produit({ libelle, prix });
    await newProduit.save();
    res.status(201).json(newProduit);
  } catch (error) {
    console.error("Erreur lors de l’ajout du produit:", error);
    if (!res.headersSent) { // ✅ Vérification avant d'envoyer une réponse
      res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
  }
};
