const mongoose = require("mongoose");

const commandeSchema = new mongoose.Schema({
  date_commande: { type: Date, default: Date.now },
  client_id: { type: mongoose.Schema.Types.ObjectId, ref: "Client", required: true },
  lignes_commande: [
    {
      produit_id: { type: mongoose.Schema.Types.ObjectId, ref: "Produit", required: true },
      quantite: { type: Number, required: true },
      total: { type: Number, required: true }
    }
  ]
});

module.exports = mongoose.model("Commande", commandeSchema);
 
