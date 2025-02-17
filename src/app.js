// import "bootstrap";
// import "./style.css";


// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  // console.log("Hello Rigo from the console!");
document.querySelector("#excusa").innerHTML = generarExcusa()
};


function generarExcusa(){
  let who = ['I', 'My neighbor', 'my brother', 'The Police'];

  let action = ['ate', 'peed', 'crushed', 'broke', 'stole'];

  let what = ['my house', 'my phone', 'the car', 'my computer'];

  let when = ['before the class', 'last night', '5 mins ago', 'while I was studying'];

  let sujeto = who[Math.floor(Math.random()*who.length)]
  let accion = action[Math.floor(Math.random()*action.length)]
  let elQue = what[Math.floor(Math.random()*what.length)]
  let cuando = when[Math.floor(Math.random()*when.length)]

  return `${sujeto} ${accion} ${elQue} ${cuando}`

}


