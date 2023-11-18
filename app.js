const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");
const errorController = require("./controllers/error.js");

// app.engine('handlebars', handlebars())
app.set("view engine", "ejs"); //Nous voulons dire à express que nous voulons compiler des modèles dynamiques avec le moteur ejs
app.set("views", "views"); // le lieu où trouver les modèles

// app.use est une méthode qui est utilisée pour configurer le middleware dans une application Express.
app.use(bodyParser.urlencoded({ extended: false })); //configure le middleware express.urlencoded pour analyser les données de formulaire envoyées dans le corps des requêtes HTTP POST, en spécifiant que les valeurs peuvent être des chaînes ou des tableaux, mais pas des objets imbriqués.
app.use(express.static(path.join(__dirname, "public"))); //cette ligne permet à Express de servir des fichiers statiques, tels que des images, des feuilles de style (CSS), des fichiers JavaScript, etc situés dans le répertoire 'public' de manière à ce qu'ils soient accessibles via l'URL de l'application.

app.use("/admin", adminRoutes); //cette ligne de code indique à l'application Express d'utiliser les routes spécifiées dans adminRoutes chaque fois que l'URL commence par "/admin".
app.use(shopRoutes);

// middlewar est une fct qui est utilisé pour effectuer des opérations sur les requêtes entrantes et sortantes
app.use(errorController.get404);

app.listen(3000);
