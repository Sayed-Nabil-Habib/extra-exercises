const kilomters = prompt("Enter value in kilometers: ");

// make sure if the value is a number
if(!isNaN(kilomters)){
  console.log(`nice, check console for result`)
}else{
  console.log(`please enter a number`)
}
//converting kilometers into miles
const factor = 0.621371;

// calculate miles
const miles = kilomters * factor;


console.log(`${kilomters} kilometers is equal to ${miles} miles.`)