const mongoose = require("mongoose");
const Commande = require("./models/commandeModel");

mongoose.connect("mongodb://localhost:27017/vente-system");

const seedCommandes = async () => {
  await Commande.create({
    client_id: "ID_CLIENT",
    lignes_commande: [{ produit_id: "ID_PRODUIT", quantite: 2, total: 2400 }]
  });
  console.log("✅ Commandes ajoutées !");
  mongoose.disconnect();
};

seedCommandes();
