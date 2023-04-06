document.addEventListener("DOMContentLoaded", () => {

    let trendingUrl = "http://localhost:3000/trending";
    let newUrl = "http://localhost:3000/new";
    let top100Url = "http://localhost:3000/top-100";
    let artistsUrl = "http://localhost:3000/artists";

    let trendingImgs = document.querySelector("#trending-images");
    let newImgs = document.querySelector("#new-images");
    let top100Imgs = document.querySelector("#top-100-images");
    let artistsImgs = document.querySelector("#artists-images");
    let favImgs = document.querySelector("#favorites-images");
    let playlistImgs = document.querySelector("#my-playlist-images");
    let searchedArtistImg = document.querySelector("#searched-artist-image");

    let searchArtistForm = document.querySelector("#search-artist");
    searchArtistForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let artist = document.querySelector("#artist-name").value.toLowerCase() ;
        document.querySelector("#artist-name").value = "";

        searchArtist(artist);
        window.location.hash = "#searched-artist-image";
    })


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
        let btnDiv = document.createElement("div");
        let likeBtn = document.createElement("button");
        let addToPlaylistBtn = document.createElement("button");

        titleP.textContent = song.title;
        img.src = song.image;
        artistP.textContent = song.artist;
        likeBtn.textContent = "Like";
        addToPlaylistBtn.textContent = "Add to Playlist";

        likeBtn.addEventListener('click', () => {
            addToFavorites(song);
        })

        addToPlaylistBtn.addEventListener('click', () => {
            addToPlaylist(song);
        })

        btnDiv.append(likeBtn);
        btnDiv.append(addToPlaylistBtn);



        div.className = "song-card";
        div.background = `url(${img.src})`;
        btnDiv.className = "like-fav-btns";

        div.append(titleP);
        div.append(img);
        div.append(artistP);
        div.append(btnDiv);

        sectImg.append(div);

    }

    function createArtistCard(artist, sectImg) {
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

    function addToFavorites(song){
        let div = document.createElement("div");
        let titleP =  document.createElement("p");
        let img =  document.createElement("img");
        let artistP =  document.createElement("p");
        let btnDiv = document.createElement("div");
        let removeBtn = document.createElement("button");

        titleP.textContent = song.title;
        img.src = song.image;
        artistP.textContent = song.artist;
        removeBtn.textContent = "Remove";

        removeBtn.addEventListener('click', () => {
            favImgs.removeChild(div);
        })

        btnDiv.append(removeBtn);



        div.className = "song-card";
        div.background = `url(${img.src})`;
        btnDiv.className = "like-fav-btns";

        div.append(titleP);
        div.append(img);
        div.append(artistP);
        div.append(btnDiv);
        favImgs.append(div);

    }
    function addToPlaylist(song) {
        let div = document.createElement("div");
        let titleP =  document.createElement("p");
        let img =  document.createElement("img");
        let artistP =  document.createElement("p");
        let btnDiv = document.createElement("div");
        let removeBtn = document.createElement("button");

        titleP.textContent = song.title;
        img.src = song.image;
        artistP.textContent = song.artist;
        removeBtn.textContent = "Remove";

        removeBtn.addEventListener('click', () => {
            playlistImgs.removeChild(div);
        })

        btnDiv.append(removeBtn);



        div.className = "song-card";
        div.background = `url(${img.src})`;
        btnDiv.className = "like-fav-btns";

        div.append(titleP);
        div.append(img);
        div.append(artistP);
        div.append(btnDiv);
        playlistImgs.append(div);

    }

    function searchArtist(artistName){
        
        if(artistName){
            fetch(artistsUrl)
            .then(res => res.json())
            .then(data => {
                let artist  = data.find(artist => artist.name.toLowerCase().includes(artistName));
               createArtistCard(artist, searchedArtistImg);

               if(searchedArtistImg.children.length > 1){
                searchedArtistImg.removeChild(searchedArtistImg.children[0])
                console.log(searchedArtistImg.children.length);
            }

            })
            .catch(err => console.log(err))
        }
       
    }

})