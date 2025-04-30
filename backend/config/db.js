 
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connexion réussie à MongoDB"))
.catch(err => console.error("❌ Erreur MongoDB:", err));
