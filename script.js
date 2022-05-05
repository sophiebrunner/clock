//Code and documentary by WebDevSimplified
//Code for the analogue clock
//Function setClock will be called every 1000 ms
setInterval(setClock, 1000);

//Grab DOM-elements of the hands and store them in variables
const secondsHand = document.querySelector("#seconds");
const minutesHand = document.querySelector("#minutes");
const hoursHand = document.querySelector("#hours");

//Function to setup the clock using the new Date() method
//Using get-methods to get the current seconds, minutes and hours
//60 and 12 are used to tell the hand, how far it can rotate
function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(secondsHand, secondsRatio);
  setRotation(minutesHand, minutesRatio);
  setRotation(hoursHand, hoursRatio);
}

//Function to define the position (rotationRatio) of the hands (parameter: element)
//Using the custom variable --rotation from CSS
//Complete rotation is 360
function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

//Call function
setClock();

//Code and documentary found on flexiple.com
//Define function for the digital clock
function currentTimeDigital() {
  //Current time stored in a variable using the new Date() constructor
  //This constructor returns the browser's date along with the time zone
  const date = new Date();
  //Extracting the hours, minutes and seconds from the date-variable using methods
  //Store the return-value of the method in different variables
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  //Using ternary operator ? to insert a 0 before a single-digit number (1 - 9)
  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  //Store time in the desired format in a variable
  const time = hh + ":" + mm + ":" + ss + " ";

  //Connect function to the DOM
  document.getElementById("digital-clock").innerText = time;

  //Since date() returns a static value, we have to update it
  //This works with the setTimeout() method
  //This method calls or runs a function after a specified number of milliseconds
  //Since it's a clock we want to update it every 1000 ms
  const t = setTimeout(function () {
    currentTimeDigital();
  }, 1000);
}

//Call function
currentTimeDigital();
