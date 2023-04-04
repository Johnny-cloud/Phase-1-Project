const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f702601134mshf79e68adfef5401p1bb48djsn4788d2007278',
		'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
	}
};

fetch('https://shazam.p.rapidapi.com/artists/get-latest-release?id=567072&l=en-US', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));