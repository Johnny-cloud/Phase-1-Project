document.addEventListener("DOMContentLoaded", () => {
    let trendingUrl = "http://localhost:3000/trending";
    let newUrl = "http://localhost:3000/new";
    let top100Url = "http://localhost:3000/top-100";
    let artistsUrl = "http://localhost:3000/artists";

    fetchTrending();
    fetchNew();
    fetchTop100();
    fetchArtists();

    function fetchTrending(){
        fetch(trendingUrl)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    function fetchNew(){
        fetch(newUrl)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    function fetchTop100(){
        fetch(top100Url)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    function fetchArtists(){
        fetch(artistsUrl)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

})