let response = [
            
    {  "id" : 1,
       "rank": "1",
       "title": "Old Town Road",
       "artist": "Lil Nas X ft Billy Ray Cyrus",
       "weeks at no.1": "5",
       "last week": "1",
       "peak position": "1",
       "weeks on chart": "9",
       "detail": "same",
       "image":"https://i.ytimg.com/vi/r7qovpFAGrQ/maxresdefault.jpg"
   },
    {  
       "id" : 2,
       "rank": "2",
       "title": "ME!",
       "artist": "Taylor Swift ft Brendon Urie",
       "last week": "100",
       "peak position": "2",
       "weeks on chart": "2",
       "detail": "up",
       "image":"https://townsquare.media/site/1096/files/2019/04/pjimage-5-6.jpg?w=980&q=75"
   },
    {
       "id": 3,
       "rank": "3",
       "title": "Wow.",
       "artist": "Post Malone",
       "last week": "2",
       "peak position": "2",
       "weeks on chart": "19",
       "detail": "down",
       "image":"https://i.ytimg.com/vi/lwWHn61Ty_A/maxresdefault.jpg"
   },
   {
       "id":4,
       "rank": "4",
       "title": "Sucker",
       "artist": "Jonas Brothers",
       "last week": "5",
       "peak position": "1",
       "weeks on chart": "9",
       "detail": "up",
       "image":"https://i.ytimg.com/vi/CnAmeh0-E-U/maxresdefault.jpg"
   },
   {   
       "id":5,
       "rank": "5",
       "title": "Sunflower (Spider-Man: Into The Spider-Verse)",
       "artist": "Post Malone & Swae Lee",
       "last week": "3",
       "peak position": "1",
       "weeks on chart": "28",
       "detail": "down",
       "image":"https://i.ytimg.com/vi/3JK3pTVg9h8/maxresdefault.jpg"
   },
  {
       "id" : 6,
       "rank": "6",
       "title": "7 Rings",
       "artist": "Ariana Grande",
       "last week": "4",
       "peak position": "1",
       "weeks on chart": "15",
       "detail": "down",
       "image":"https://i.ytimg.com/vi/QYh6mYIJG2Y/mqdefault.jpg"
   },
   {
       "id" : 7,
       "rank": "7",
       "title": "Without Me",
       "artist": "Halsey",
       "last week": "6",
       "peak position": "1",
       "weeks on chart": "30",
       "detail": "down",
       "image":"https://i.ytimg.com/vi/ZAfAud_M_mg/maxresdefault.jpg"
   },
    {
       "id":8,
       "rank": "8",
       "title": "Dancing With A Stranger",
       "artist": "Sam Smith & Normani",
       "last week": "7",
       "peak position": "7",
       "weeks on chart": "16",
       "detail": "down",
       "image":"https://i.ytimg.com/vi/av5JD1dfj_c/maxresdefault.jpg"
   },
   {   
       "id":9,
       "rank": "9",
       "title": "Bad Guy",
       "artist": "Billie Eilish",
       "last week": "9",
       "peak position": "7",
       "weeks on chart": "5",
       "detail": "same",
       "image":"https://i.ytimg.com/vi/DyDfgMOUjCI/maxresdefault.jpg"
   },
   {   "id":10,
       "rank": "10",
       "title": "Talk",
       "artist": "Khalid",
       "last week": "8",
       "peak position": "8",
       "weeks on chart": "12",
       "detail": "down",
       "image":"https://i.ytimg.com/vi/hE2Ira-Cwxo/maxresdefault.jpg"
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