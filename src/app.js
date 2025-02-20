// import "bootstrap";
// import "./style.css";


// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  // console.log("Hello Rigo from the console!");
document.querySelector("#excusa").innerHTML = generarExcusa()
};

function generateRandomIndex(array){
  return array[Math.floor(Math.random()*array.length)]
}

function generarExcusa(){
  let who = ['I', 'My neighbor', 'my brother', 'The Police'];

  let action = ['ate', 'peed', 'crushed', 'broke', 'stole'];

  let what = ['my house', 'my phone', 'the car', 'my computer'];

  let when = ['before the class', 'last night', '5 mins ago', 'while I was studying'];

  let sujeto = generateRandomIndex(who)
  let accion = generateRandomIndex(action)
  let elQue = generateRandomIndex(what)
  let cuando = generateRandomIndex(when)

  return `${sujeto} ${accion} ${elQue} ${cuando}`

}




// function excuseGenerator(index, array1, array2){

// }

// console.log(excuseGenerator(generateRandomIndex(), who, what))



// - - - -- - - -


// let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];

// let action = ['ate', 'peed', 'crushed', 'broke'];

// let what = ['my homework', 'my phone', 'the car'];

// let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

// function getRandomIndex(partOfTheExcuse){
// return Math.floor(Math.random * (partOfTheExcuse.length)) 

// }
// console.log(getRandomIndex(who))
// console.log(getRandomIndex(when))

// function excuseAssembler(randomIndex, array1, array2, array3, array4){
//   return `${array1[randomIndex]} ${array2[randomIndex]} ${array3[randomIndex]} ${array4[randomIndex]}`
// }

// console.log(excuseAssembler(getRandomIndex(who), who, action, what, when))