let response = [
    {   
        "id" : 1,
        "name" : "Bruno mars",
        "image":"https://wallpapershome.com/images/pages/pic_h/14884.jpg"
    },
    {
        "id":2,
        "name":"Ariana Grande",
        "image":"https://w0.peakpx.com/wallpaper/259/315/HD-wallpaper-ariana-grande-ari-arianagrande-beautiful-famosa-famosas-famosos.jpg"
    },
    {
        "id":3,
        "name": "Beyonce Knowles",
        "image":"https://c4.wallpaperflare.com/wallpaper/212/811/823/beyonce-knowles-41-hd-wallpaper-preview.jpg"
    },
    {
        "id":4,
        "name":"Khaligraph Jones",
        "image":"https://wallpapercave.com/wp/wp6356670.jpg"
    },
    {
        "id":5,
        "name": "Diamond",
        "image":"https://wallpapercave.com/dwp1x/wp3811809.jpg"
    },
    {
        "id":6,
        "name":"Wizkid",
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWFsRxAXYlHQBNn1FujE0MiUKOKH4Wf95zrQ&usqp=CAU"
    },
    {
        "id":7,
        "name":"Ada Ehi",
        "image":"https://res.6chcdn.feednews.com/assets/v2/500d74c73dec8ad4d8b2734d6ed67f5c?quality=uhq&format=webp&resize=720"
    },
    {
        "id":8,
        "name" : "Halsey",
        "image":"https://c4.wallpaperflare.com/wallpaper/507/408/62/ashley-frangipane-photo-halsey-5k-wallpaper-preview.jpg"
    },
    {
        "id":9,
        "name":"Sinach",
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt4VMb_wBP9otM0iAKc8hIEpWkdYnpG_Rrzg&usqp=CAU"
    },
    {
        "id":10,
        "name":"Ayra Starr",
        "image":"https://wallpapercave.com/dwp1x/wp11603696.jpg"
    }
]

export async function handler(event, context) {
    return {
        statusCode : 200,
        body : JSON.stringify(response),
        headers: {
			'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
		},
    }

}