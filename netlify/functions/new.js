let response =  [
    {   
        "id" : 1,
        "artist" : "Miley Cyrus",
        "title" : "Flowers",
        "image" : "https://cdn.shopify.com/s/files/1/0522/1610/3083/articles/MILEY_CYRUS_FLOWERS_900x.png?v=1674751436"
    },
    {
        "id" : 2,
        "artist" : "Jimin",
        "title" : "Like Crazy",
        "image" :"https://charts-static.billboard.com/img/2016/03/ji-min-7g4-344x344.jpg"
    },
    {
        "id" : 3,
        "artist" : "Drake, 21 Savage",
        "title" : "Spin bout you",
        "image" :"https://i.ytimg.com/vi/T8nbNQpRwNo/maxresdefault.jpg"
    },
    {
        "id" : 4,
        "artist" : "Kendrick Lamar",
        "title" : "Rich Spirit",
        "image" :"https://i.ytimg.com/vi/toBTPGfurLc/maxresdefault.jpg"
    },
    { 
        "id":5,
        "title": "Nobody",
        "artist": "Bien ft Darassa",
        "image":"https://bekaboy.com/wp-content/uploads/2023/02/Darassa-Ft-Bien-%E2%80%93-No-Body.jpg"
      },
    {
        "id" : 6,
        "artist" : "The Weeknd ft Ariana Grande",
        "title" : "Die for you",
        "image" :"https://i1.sndcdn.com/artworks-000146007822-1r753h-t500x500.jpg"
    },
    {
        "id" : 7,
        "artist" : "Darassa",
        "title" : "Mind your business",
        "image" :"https://i.ytimg.com/vi/8qVDDDoT0rY/maxresdefault.jpg"
    },
    {
        "id" : 8,
        "artist" : "Khaligraph Jones ft Harmonize",
        "title" : "Kwame",
        "image" :"https://i.ytimg.com/vi/V4rwhXEoarQ/maxresdefault.jpg"
    },
    {
        "id" : 9,
        "artist" : "Octopizzo",
        "title" : "Flex",
        "image" :"https://i.ytimg.com/vi/WA7VjhBMPrs/maxresdefault.jpg"
    },
    {
        "id" : 10,
        "artist" : "Fathermoh",
        "title" : "Kaskie vibaya",
        "image" :"https://i.ytimg.com/vi/ksBpvcbjTXM/hqdefault.jpg"
    }
]

exports.handler = async (event, context) => {
    return {
        statusCode : 200,
        body : JSON.stringify(response),
        headers: {
			'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
		},
    }

}