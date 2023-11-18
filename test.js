// const tab =["Dyhiouch", "Enzo", "Silver"]

// //Le spread operateur -------------------------------------------------------------------
// // Permet de déconstruire les itérables (tableaux/objets/chaînes) en éléments uniques
// // Il est utilisé pour :
// // déconstruire un tableau
// // console.log(...tab)

// // Modifier/ajouter à un tableau
// const newTab = ["Nelya", ...tab, "Asmahan"]
// // console.log(newTab)

// // Copier un tableau
// const copyTab = [...tab]
// // console.log(copyTab)

// // Joindre 2 tableaux
// const tab1 = [1,2,3]
// const tab2 = [4,5,6]
// const allTab = [...tab1, ...tab2]
// // console.log(allTab)

// // Les strings 
// const name = "Dyhiouch"
// const lettres = [...name]
// // console.log(lettres)

// //Utiliser le spread opérateur comme paramètre d'une fonction 
// numbers = [1,2,3]
// const sumNumbers = function (num1, num2, num3) {
//     return num1 + num2 + num3
// }
// //sans spread opérateur 
// sumNumbers(numbers[0], numbers[1], numbers[2])

// //Avec spread opérateur
// const res = sumNumbers(...numbers)
// // console.log(res)

// // Déconstruire les objets
// const person = {
//     firstName: 'Mike',
//     lastName: 'Taylor'
// }

// // console.log({...person})

// // Copier les valeurs d'un objet
// const newPerson = {...person}

// //Etendre un objet
// const customer = {...person, creditLimit: 1000}
// // console.log(customer)


// // Le REST (le reste) operateur ----------------------------------------------------------------------
// // Rassemble tous les éléments restants dans un tableau
// const [n1, n2, ...others] = [1,2,3,4, 5]
// // console.log(n1, n2, others)

// const person2 = {
//     firstName: 'Mike',
//     lastName: 'Taylor',
//     age: 25
// }

// const {age, ...person2Name} = person2;
// // personName va assigner le "rest" des propriétés non utilisées 
// // console.log(age, person2Name)


