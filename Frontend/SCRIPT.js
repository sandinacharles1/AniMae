//IF we select an item with querySelector, you can do by id (#), class (.), or jhtml element (h1, p, etc). If you select by id, it will only select the first one. It will only choose the first though. querySelectorAll() returns all matching
// array.forEach(array =>{func ;})

const button = document.getElementById('search-button'); //From html document where we assigened an id, get the id and assign to a variable
const searchArea = document.querySelector("#search-area");
button.addEventListener("click", () => { //add an event listener to the button, when clicked, it will run the function
    searchArea.classList.remove("hidden");
})