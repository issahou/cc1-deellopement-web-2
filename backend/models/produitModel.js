const mongoose = require("mongoose");

const produitSchema = new mongoose.Schema({
  libelle: { type: String, required: true },
  prix: { type: Number, required: true }
}, { collection: "produit" }); // ✅ Correction : Nom de la collection

module.exports = mongoose.model("Produit", produitSchema);
