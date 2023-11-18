const fs = require('fs')

//module HTTP
//Un écouteur de demandes est une fonction qui s'éxecutera pour chaque demande entrante
//Cette fonction doit recevoir deux arguments REQ "une demande de type message entrant" et RES "un objet de réponse" (utilisé pour renvoyer une réponse à la personne qui a envoyé cette demande)
//La méthode GET est utilisée par le navigateur pour demander au serveur de renvoyer une certaine ressource.
//La méthode POST est utilisée par le navigateur pour demander au serveur une réponse prenant en compte les données contenues dans le corps de la requête HTTP << Hé serveur ! vois ces données et renvoie-moi le résultat approprié >>
//fs nous permet de travailler avec le système de fichiers
//Les codes d'état sont un ensemble de codes de développement web utilisés pour créer des applications dans le monde entier.
//Réponses informatives (100-199)
//Réponses réussies     (200-299)
//Redirections          (300-399)
//Erreurs du client     (400-499)
//"return" afin de ne pas executer la suite du programme
// req.on pour écouter l'événement de données (celui ci sera déclenché chaque fois qu'un nouveau morceau est prêt à être lu)

const requestHandler = (req, res) => {
    const url = req.url
    const method = req.method
    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter Message</title><head>')
        res.write(
            '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
        )
        res.write('</html>')
        return res.end()
    }
    if (url === '/message' && method === 'POST') {
        const body = []
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk)
        })
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302
                res.setHeader('Location', '/')
                return res.end()
            }) //"writeFileSync" bloque le code jusqu'à ce que le fichier soit créé
        })
    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My First Page</title><head>')
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
    res.write('</html>')
    res.end()
}

// module.exports = requestHandler

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// }

// module.exports.handler = requestHandler
// module.exports.someText = 'Some hard coded text'

exports.handler = requestHandler
exports.someText = 'Some hard coded text'
