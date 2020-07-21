

// Search bar search parameters

document.getElementById("search-button").addEventListener('click', handleSearchButtonClickEvent);

// ****** ADD MORE SEARCH RESULTS HERE AS ADDITIONAL EXAMPLES!!
function handleSearchButtonClickEvent() {
    let value = document.getElementById("search-input").value.toLowerCase();
    if (value == "outfit" || value == "choose") {
        window.location.href = "#outfit";
    }
    else if (value == "gallery" || value == "photos") {
        window.location.href = "#gallery";
    }
}

