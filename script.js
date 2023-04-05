document.addEventListener("DOMContentLoaded", () => {

    let trendingUrl = "http://localhost:3000/trending";
    let newUrl = "http://localhost:3000/new";
    let top100Url = "http://localhost:3000/top-100";
    let artistsUrl = "http://localhost:3000/artists";

    let trendingImgs = document.querySelector("#trending-images");
    let newImgs = document.querySelector("#new-images");
    let top100Imgs = document.querySelector("#top-100-images");
    let artistsImgs = document.querySelector("#artists-images");

    fetchTrending();
    fetchNew();
    fetchTop100();
    fetchArtists();

    function fetchTrending(){
        fetch(trendingUrl)
        .then(res => res.json())
        .then(data => data.forEach(song => createSongCard(song, trendingImgs)))
        .catch(err => console.log(err))
    }

    function fetchNew(){
        fetch(newUrl)
        .then(res => res.json())
        .then(data => data.forEach(song => createSongCard(song, newImgs)))
        .catch(err => console.log(err))
    }

    function fetchTop100(){
        fetch(top100Url)
        .then(res => res.json())
        .then(data => data.forEach(song => createSongCard(song, top100Imgs)))
        .catch(err => console.log(err))
    }

    function fetchArtists(){
        fetch(artistsUrl)
        .then(res => res.json())
        .then(data => data.forEach(artist => createArtistCard(artist, artistsImgs)))
        .catch(err => console.log(err))
    }

    //create image card div
    function createSongCard(song,sectImg) {
        let div = document.createElement("div");
        let titleP =  document.createElement("p");
        let img =  document.createElement("img");
        let artistP =  document.createElement("p");

        titleP.textContent = song.title;
        img.src = song.image;
        artistP.textContent = song.artist;



        div.className = "song-card";
        div.background = `url(${img.src})`;

        div.append(titleP);
        div.append(img);
        div.append(artistP);

        sectImg.append(div);

    }

    function createArtistCard(artist,sectImg) {
        let div = document.createElement("div");
        let img =  document.createElement("img");
        let artistP =  document.createElement("p");

        img.src = artist.image;
        img.className = "artist-img";
        artistP.textContent = artist.name;

        div.className = "artist-card";

        
        div.append(img);
        div.append(artistP);

        sectImg.append(div);

    }

})