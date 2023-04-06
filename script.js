document.addEventListener("DOMContentLoaded", () => {

    let trendingUrl = "https://jonny-cloud-my-music.netlify.app/.netlify/functions/trending/";
    let newUrl = "https://jonny-cloud-my-music.netlify.app/.netlify/functions/new";
    let top100Url = "https://jonny-cloud-my-music.netlify.app/.netlify/functions/top-100";
    let artistsUrl = "https://jonny-cloud-my-music.netlify.app/.netlify/functions/artists";

    let trendingImgs = document.querySelector("#trending-images");
    let newImgs = document.querySelector("#new-images");
    let top100Imgs = document.querySelector("#top-100-images");
    let artistsImgs = document.querySelector("#artists-images");
    let favImgs = document.querySelector("#favorites-images");
    let playlistImgs = document.querySelector("#my-playlist-images");
    let searchedArtistImg = document.querySelector("#searched-image");

    let searchArtistForm = document.querySelector("#search-artist");
    searchArtistForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let artist = document.querySelector("#artist-name").value.toLowerCase() ;
        document.querySelector("#artist-name").value = "";
        document.querySelector("#searched-term > h1").textContent = "Fetching data .............";
        searchArtist(artist);
        window.location.hash = "#searched-image";

    })


    fetchTrending();
    fetchNew();
    fetchTop100();
    fetchArtists();

    function fetchTrending(){
        fetch(trendingUrl)
        .then(res => res.json())
        .then(data => {
            
            data.forEach(song => createSongCard(song, trendingImgs))
        })
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

            while(searchedArtistImg.children.length){
                searchedArtistImg.removeChild(searchedArtistImg.children[0])
            }
         
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'f702601134mshf79e68adfef5401p1bb48djsn4788d2007278',
                    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
                }
            };

            fetch(`https://shazam.p.rapidapi.com/search?term=${artistName}&locale=en-US&offset=0&limit=5`, options)
                .then(response => response.json())
                .then(response => {
                    console.log(response.artists.hits);
                    console.log(response.tracks.hits);
                    response.tracks.hits.forEach(track => createSearchCard(track));
                    document.querySelector("#searched-term > h1").textContent = "Results";

                } )
                .catch(err => console.error(err));
        }
       
    }

    function createSearchCard(track) {


        let div = document.createElement("div");
        let titleP =  document.createElement("p");
        let img =  document.createElement("img");
        let artistP =  document.createElement("p");
      

        titleP.textContent = track.track.title;
        img.src = track.track.share.image;
        artistP.textContent = track.track.subtitle;
        img.className = "artist-img";
      


        div.className = "song-card";
        div.background = `url(${img.src})`;
        

        div.append(titleP);
        div.append(img);
        div.append(artistP);
        searchedArtistImg.append(div);

    }

})