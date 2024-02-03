// const contries = ['Maroc' , 'Espagne' , 'Italy']
// contries[0]= 'egypt'
// //console.table(contries)

// const animal = {
//     color : 'black',
//     age : 2
// }
// animal.gender = 'F',
// animal.owner = 'Arif'



// const displayAnimal = function(animal){
//     document.write(JSON.stringify(animal))
// }
// displayAnimal(animal)
 
// //FUCNTION FLéCHé

// const somme = function(a,b){
//     return a+b
// }

// const sum = (a,b) => {
//     return a+b
// }

// const summ = (a = 0, b = 0 ) => a+b // =0 c est la valeur par defaut
// // si on un seul parametre on n ecrit pas les parentheses mais s il a une aleur on n ecrit les parenthese
// const summ3 = (a = 0, b = 0, c = 0 ) => a+b+c

// //Rest parametre
// const sumRest = (...numbers) =>{
//     let somme = 0
//     for(let i=0;i<numbers.length;i++){
//         let n = numbers[i]
//         somme += n
//     }
//     return somme
   
// }
// document.write(sumRest(1,3,2,4,5))

// //Template literals (concatenation)

// let nom = 'Arif'
// let prenom = 'Salma'
// let age = 20

// let isAdult = 'Adulte'
// if(age< 18){
//     isAdult = ' Mineur'
// }
// //old method( on ecrit "" et '' en ajoutent \ )
// let str = 'Bonjour'+' '+nom+' \n '+prenom + ' , ' + isAdult // \n : retour a la ligne (anti slash : alt gr 8)
// // new method ( on ecrit "" et '' avec aucun prb)
// let newStr = `Bonjour ${nom} \n ${prenom}
// ${(age< 18 ? 'Mineur' : 'Adulte').toUpperCase() }` //ila madertch ${} radi tktb nom mashi arif
// document.write(newStr) 
// document.querySelector('#oldStr').innerHTML = str
// document.querySelector('#newStr').innerHTML = newStr

// //Spread syntax (bhl ila andna un tableau kaychedu katqesmu)

// const contriess = ['Maroc' , 'Alg' , 'Tunisie']
// const contriess2 = ['USA' , 'CANADA' , 'EGYPET']

// console.table([...contriess])
// console.table([...contriess2])
// //Array merge (concat)
// console.table([...contriess,...contriess2])


console.log('hello')