const express = require('express')
const router = express.Router()
const path = require('path')
const productsController = require('../controllers/products')


router.get('/', productsController.getProducts)
//"use" Permet d'ajouter des fonctions
//__direname est une variable globale qui contient simplement le chemin absolu de notre système d'exploitation vers ce dossier de projet

module.exports = router
