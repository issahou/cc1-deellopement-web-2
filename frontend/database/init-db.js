const mongoose = require("mongoose");
const Client = require("./models/clientModel");
const Produit = require("./models/produitModel");

mongoose.connect("mongodb://localhost:27017/vente-system", { useNewUrlParser: true, useUnifiedTopology: true });

const seedData = async () => {
  await Client.create({ nom: "Alice", age: 28, email: "alice@example.com" });
  await Produit.create({ libelle: "Ordinateur", prix: 1200 });
  console.log("✅ Données insérées !");
  mongoose.disconnect();
};

seedData();
