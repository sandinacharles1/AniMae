//! This is to create the anime pages, which are hyperlinked to the cards

//* Have the card hyperlink to the anime page on line 107 in search.js
/*card.addEventListener("click", () => {
            window.location.href = `anime.html?id=${id}`; */
//Notes: The ? separates the link from the extra info. id = id assigns the id to the variable id
//*Get anime ID in url from query. Everything after ? parameters

//*1. Get query string (after ?) from browser
const query = window.location.search;

//*2. Make them easy to get with URLSearchParams
const params = new URLSearchParams(query); // Doesn't show a list, has to be seen using .get()
const id =params.get("id");

//*3.Request Anime Information
async function getAnimeInfo(id) {
    const url = `https://kitsu.io/api/edge/anime/${id}`; //Doesn't include encoding since theres no special characters
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        return data.data;
    } catch (error) {
        console.error("Error fetching anime: ", error)
    }
}
//getAnimeInfo(id);  
//*4.Print Anime Information
function printAnimeInfo(i) {
    const ageRating = i.attributes.ageRating;
    const coverImage = i.attributes.coverImage.original;
    const canonicalTitle = i.attributes.canonicalTitle;
    const episodeCount = i.attributes.episodeCount;
    const averageRating = i.attributes.averageRating;
    const synopsis = i.attributes.synopsis;

    //Add the divs, words, classes
    // Select the div and change its text content
    // Note the backticks ` at the start and end
    document.getElementById("image3").innerHTML = `<img src="${coverImage}" alt="${canonicalTitle}'s Cover Image" width="auto" height="350">`;
    
    document.getElementById("title3").textContent = `${canonicalTitle}`;
    document.getElementById("title3").classList.add("anime-title")
    
    document.getElementById("rating3").textContent = `Rating: ${averageRating}`;
    document.getElementById("rating3").classList.add("Headers");
    
    document.getElementById("synopsis3").textContent = `Summary: ${synopsis}`;
    
    document.getElementById("episode-count3").textContent = `Number of Episodes: ${episodeCount}`;
    document.getElementById("episode-count3").classList.add("Headers");
    
    document.getElementById("adult-rating3").textContent = `Age Rating: ${ageRating}`;
    document.getElementById("adult-rating3").classList.add("Headers");

}

//*3.Run The Functions
async function anime(id) {
    const data = await getAnimeInfo(id)
    const run = printAnimeInfo(data)
}

anime(id)