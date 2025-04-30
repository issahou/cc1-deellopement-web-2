const mongoose = require("mongoose");

const ligneCommandeSchema = new mongoose.Schema({
  commande_id: { type: mongoose.Schema.Types.ObjectId, ref: "Commande", required: true },
  produit_id: { type: mongoose.Schema.Types.ObjectId, ref: "Produit", required: true },
  quantite: { type: Number, required: true },
  total: { type: Number, required: true }
});

module.exports = mongoose.model("LigneCommande", ligneCommandeSchema);
 
