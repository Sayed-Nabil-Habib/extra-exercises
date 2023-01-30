const celsius = prompt(`please enter the celsius value:`);
//make sure if the value is a number
if(!isNaN(celsius)){
  alert(`nice, check console`)
}else{
  alert(`please enter a number`)
}

// calcualte fahrenheit
const fahrenheit = (celsius * 1.8) + 32;

console.log(`${celsius} celsius is equal to ${fahrenheit} degree fahrenheit`);