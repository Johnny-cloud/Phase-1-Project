document.addEventListener("DOMContentLoaded", () => {
    let trendingUrl = "http://localhost:3000/trending/1";

    fetchTrending();

    function fetchTrending(){
        fetch(trendingUrl)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

})