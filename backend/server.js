const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config(); // ✅ Chargement des variables d'environnement

const produitRoutes = require("./routes/produitRoutes");

const app = express();
app.use(express.json()); // ✅ Middleware pour JSON
app.use(cors()); // ✅ Autoriser les requêtes cross-origin

// ✅ Vérification de la variable d'environnement MONGO_URI
if (!process.env.MONGO_URI) {
  console.error("❌ Erreur: MONGO_URI est undefined. Vérifie ton fichier .env !");
  process.exit(1); // ✅ Arrête le serveur si la variable est absente
}

// ✅ Connexion à MongoDB avec gestion des erreurs
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connexion réussie à MongoDB"))
.catch(err => {
  console.error("❌ Erreur MongoDB:", err);
  process.exit(1); // ✅ Arrête le serveur en cas d'échec
});

// ✅ Définition des routes
app.use("/produits", produitRoutes);

// ✅ Gestion des erreurs globales
app.use((err, req, res, next) => {
  console.error("Erreur serveur:", err);
  res.status(500).json({ message: "Erreur interne du serveur", error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`));
