let response = [
    {   "id":1,
        "title": "Butter",
        "artist": "BTS",
        "image":"https://wallpapercave.com/dwp1x/wp9245978.jpg"
      },
     {  
        "id":2,
        "title": "Rock With You",
        "artist": "SEVENTEEN",
        "image":"https://image.kpopmap.com/2021/10/Seventeen-comeback-press-conference-kpopmap-group.jpg"
      },
      { 
        "id":3,
        "title": "Permission To Dance",
        "artist": "BTS",
        "image":"https://wallpaperaccess.com/full/6260451.jpg"
      },
      {
        "id":4,
        "title": "Money",
        "artist": "Lisa",
        "image":"https://wallpapercave.com/dwp1x/wp10404595.jpg"
      },
      { 
        "id":5,
        "title": "Nobody",
        "artist": "Bien ft Darassa",
        "image":"https://bekaboy.com/wp-content/uploads/2023/02/Darassa-Ft-Bien-%E2%80%93-No-Body.jpg"
      },
    {   
        "id":6,
        "title": "Sability",
        "artist": "Ayra Starr",
        "image":"https://i.ytimg.com/vi/6xC7azFBOBw/hqdefault.jpg"
      },
    {
        "id":7,
        "title": "Psychic",
        "artist": "Chris Brown",
        "image":"https://i1.sndcdn.com/artworks-yf8lpRwlwRzOqGqW-mKyslw-t500x500.jpg"
      },
     {
        "id":8,
        "title": "Eyes closed",
        "artist": "Ed Sheeran",
        "image":"https://www.yeyebook.com/wp-content/uploads/2023/03/Ed-Sheeran-Eyes-Closed-RID.jpg"
      },
      {
        "id":9,
        "title": "Calm Down",
        "artist": "Rhema ft Selena Gomez",
        "image":"https://i.ytimg.com/vi/WcIcVapfqXw/maxresdefault.jpg"
      },
       {
        "id":10,
        "title": "As it was",
        "artist": "Harry Styles",
        "image":"https://i.ytimg.com/vi/H5v3kku4y6Q/maxresdefault.jpg"
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