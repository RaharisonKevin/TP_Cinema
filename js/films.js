$(document).ready(()=>{
    console.log("ok")
    $.getJSON("cinema.json", function(data){

        for(let i = 0; i<data.films.length; i++){

        console.log(`${data.films[i].image} ${data.films[i].nom} ${data.films[i].date} ${data.films[i].real} ${data.films[i].genre} ${data.films[i].sortiedvd}`)
        }
        
        console.log(data.films.length)

        for(let i = 0; i<data.films.length; i++){

            $("ul").append(`<li><figure>
                        <img src="${data.films[i].image}">
                        <figcaption>
                        <h2>${data.films[i].nom}</h2>
                        <p>Date : ${data.films[i].date}</p>
                        <p>Réal : ${data.films[i].real} </p>
                        <p>Genre : ${data.films[i].genre}</p>
                        <p>Sortie DVD : ${data.films[i].sortiedvd}</p>
                        </figcaption>
                        </figure></li>
                             `)
        
        }

    })
})