const express = require("express");
const router = express.Router();
const { getLignesCommande, addLigneCommande } = require("../controllers/ligneCommandeController");

router.get("/", getLignesCommande);
router.post("/", addLigneCommande);

module.exports = router;
 
