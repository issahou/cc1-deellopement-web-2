const express = require("express");
const router = express.Router();
const { getProduits, addProduit } = require("../controllers/produitController");

// ✅ Récupérer tous les produits avec gestion des erreurs
router.get("/", async (req, res) => {
  try {
    await getProduits(req, res); // ✅ Correction : Passer `req, res`
  } catch (error) {
    console.error("Erreur lors de la récupération des produits:", error);
    if (!res.headersSent) { // ✅ Vérification avant d'envoyer une réponse
      res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
  }
});

// ✅ Ajouter un produit avec validation
router.post("/", async (req, res) => {
  try {
    await addProduit(req, res); // ✅ Correction : Passer `req, res`
  } catch (error) {
    console.error("Erreur lors de l’ajout du produit:", error);
    if (!res.headersSent) { // ✅ Vérification avant d'envoyer une réponse
      res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
  }
});

module.exports = router;
