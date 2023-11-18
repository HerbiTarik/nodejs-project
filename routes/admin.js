const express = require("express");
const path = require("path");
const router = express.Router();
const productsController = require("../controllers/products");
// /admin/add-request => GET
router.get("/add-product", productsController.getAddProduct); //"use" Permet d'ajouter des fonctions

// /admin/add-product => POST
router.post("/add-product", productsController.postAddProduct);

//la méthode GET est généralement utilisée pour récupérer des données, tandis que la méthode POST est utilisée pour soumettre des données. GET expose les données dans l'URL, ce qui les rend moins sécurisées, tandis que POST les envoie dans le corps de la requête, offrant une sécurité accrue.
module.exports = router;
