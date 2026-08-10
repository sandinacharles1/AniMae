/*
//IF we select an item with querySelector, you can do by id (#), class (.), or jhtml element (h1, p, etc). If you select by id, it will only select the first one. It will only choose the first though. querySelectorAll() returns all matching
// array.forEach(array =>{func ;})

// OPENING SEARCH AREA
const button = document.getElementById('search-button'); //From html document where we assigened an id, get the id and assign to a variable
const submitSearch = document.getElementById('submit-search');
const searchArea = document.querySelector("#search-area");
button.addEventListener("click", () => { //add an event listener to the button, when clicked, it will run the function
    searchArea.classList.remove("hidden");
})

//SEARCH INPUT 
const submit = document.getElementById('submit-search')
async function getUserInput(){
    const text = document.getElementById('search-bar');
    const language = document.getElementById('Language');
    const rating = document.getElementById('18');

    const textInput = text.value;
    const languageInput = language.value;
    const ratingInput = rating.checked;  //All use values unles sis true or false

    console.log(textInput);
    console.log(languageInput);
    console.log(ratingInput);

     //API REQUESTS FOR INFORMATION
    const query = `?q=${encodeURIComponent(textInput)}`;  //Uses backtick cause it mixes string and variable.  Turns into url
    const response = await fetch('https://api.jikan.moe/v4/anime/${query}/episodes');
    const data = await response.json();
    console.log(data)
}
submit.addEventListener("click", () => {
    getUserInput();
})
*/
/*Connect Search Bar Pressing Enter (keydown whenn key is enter) to Kitsu API. https://hummingbird-me.github.io/api-docs/#section/JSON:API/Request-Headers*/
const searchBar = document.getElementById('search-bar2');
async function getAnimeStats(){
    const textInput = searchBar.value;
    const query =  `?filter[text]=${encodeURIComponent(textInput)}` /*include variables with $var and backticks*/
    const response = await fetch(`https://kitsu.io/api/edge/anime${query}`);
    const data = await response.json()
    console.log(data);
}
searchBar.addEventListener("keydown", (event /*parameter to find info from*/) => {
    if (event.key === "Enter"){
        getAnimeStats();
    }
});