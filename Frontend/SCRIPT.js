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
    return data;
}

/*Get anime info for card*/
function getAnimeInfo(data) {
    data.data.forEach(i  => { //Where i represents data.data[i]
        const id = i.id;
        const ageRating = i.attributes.ageRating;
        const coverImage = i.attributes.coverImage.original;
        const canonicalTitle = i.attributes.canonicalTitle;
        const episodeCount = i.attributes.episodeCount;
        const nsfw = i.attributes.nsfw;
        const synopsis = i.attributes.synopsis;

        console.log(canonicalTitle); //debugigng

        /*Create card*/
        const card =  document.createElement("div");
        

        const frontOfCard =  document.createElement("div");
        frontOfCard.classList.add("anime-card")
        
        /*Create Children and Append them to the card*/
        const image = document.createElement("img");
        image.src = coverImage
        frontOfCard.appendChild(image);

        const title = document.createElement("h2");
        title.textContent = canonicalTitle;
        frontOfCard.appendChild(title);

        const episodes = document.createElement("p");
        episodes.textContent = `Episodes: ${episodeCount}`;
        frontOfCard.appendChild(episodes);

        const age = document.createElement("p"); /*You can also use span instead of p for short phrases*/
        age.textContent = ageRating;
        frontOfCard.appendChild(age);

        const Nsfw = document.createElement("p");
        Nsfw.textContent = nsfw ? "18+ (NSFW)" : "Safe for Work"; //condition ? expression_if_true : expression_if_false;
        frontOfCard.appendChild(Nsfw);

        /*const backOfCard =  document.createElement("div");
        const summary = document.createElement("p");
        summary.textContent = `Summary: ${synopsis}`;
        backOfCard.classList.add("summary-card")
        backOfCard.appendChild(summary);
        card.appendChild(backOfCard);*/
        card.appendChild(frontOfCard)

        //Now we put the card divider/container into the dedicated div  we have for it
        const results = document.getElementById("results");
        results.appendChild(card);
    });
};

searchBar.addEventListener("keydown", async/*It uses get anime stats*/ (event) /*parameter to find info from*/ => {
    if (event.key === "Enter"){
        let data = await getAnimeStats();
        getAnimeInfo(data);
    }
});