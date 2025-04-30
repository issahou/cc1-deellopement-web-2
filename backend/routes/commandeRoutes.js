const express = require("express");
const router = express.Router();
const { getCommandes, addCommande } = require("../controllers/commandeController");

router.get("/", getCommandes);
router.post("/", addCommande);

module.exports = router;
 
