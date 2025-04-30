const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Connexion MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connexion réussie à MongoDB"))
.catch(err => console.error("❌ Erreur MongoDB:", err));

// Importation des routes
const clientRoutes = require("./routes/clientRoutes");
const commandeRoutes = require("./routes/commandeRoutes");
const produitRoutes = require("./routes/produitRoutes");

// Utilisation des routes
app.use("/clients", clientRoutes);
app.use("/commandes", commandeRoutes);
app.use("/produits", produitRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Serveur démarré sur le port ${PORT}`));
