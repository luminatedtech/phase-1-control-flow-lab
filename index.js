
function scuberGreetingForFeet(rideLength){
  switch (true) {
    case rideLength <= 400:
      return "This one is on me!"
      break;
    case rideLength>400 && rideLength<2000:
      return "That will be twenty bucks."
      break;
    case rideLength>2000 && rideLength<2500:
      return "I will gladly take your thirty bucks."
      break;
    case rideLength>2500:
      return "No can do."
      break;

  }
 console.log(scuberGreetingForFeet(2600))
}

currentCity ="SFC"
function ternaryCheckCity(currentCity){
  const messageCity = (currentCity === "NYC") ? "Ok, sounds good." : "No go."
  return messageCity
}


const tipAmmount ="not as generous"
function switchOnCharmFromTip(tipAmmount){
  switch (tipAmmount) {
    case "generous":
      return "Thank you so much."
      break;
    case "not as generous":
      return "Thank you."
      break;
    default:
      return "Bye."
      break;
  }
}
