// Write your code here!
// document.querySelector("main").remove();

// const newHeader = document.createElement("h1");
// newHeader.id = "victory";
// newHeader.textContent ="Brandi is the champion";

// document.body.append(newHeader);




const removeMainElement = document.querySelector('main');
removeMainElement.remove();

const newHeader = document.createElement('h1'); // create a new h1
// console.log(newHeader)
//giving to element an id
newHeader.id = 'victory'
newHeader.textContent = "Brandi is the champion"
// now i need to append it to the DOM
const getBodyToAppend = document.querySelector('body'); // needed to grab where i need to append to
getBodyToAppend.append(newHeader); // appended new element to the body

//

