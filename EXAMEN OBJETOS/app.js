let peliculas =[
{
"id": 1,
"titulo": "Wilbur Wants to Kill Himself",
"genero": "Drama",
"calificacion": 10
},
{
"id": 2,
"titulo": "Albuquerque",
"genero": "Romance",
"calificacion": 5
},
{
"id": 3,
"titulo": "Pocketful of Miracles",
"genero": "Drama",
"calificacion": 7
},
{
"id": 4,
"titulo": "Warsaw Bridge (Pont de Varsòvia)",
"genero": "Romance",
"calificacion": 2
},
{

"id": 5,
"titulo": "Du côté de la côte",
"genero": "Documentary",
"calificacion": 4
},
{
"id": 6,
"titulo": "Iraq in Fragments",
"genero": "Documentary",
"calificacion": 2
},
{
"id": 7,
"titulo": "Resident, The",
"genero": "Horror",
"calificacion": 6
},
{
"id": 8,
"titulo": "Must Love Dogs",
"genero": "Comedy",
"calificacion": 10
},
{
"id": 9,
"titulo": "Foreign Intrigue",

"genero": "Thriller",
"calificacion": 1
},
{
"id": 10,
"titulo": "The Strength of Water",
"genero": "Thriller",
"calificacion": 7
},
{ "id": 11, "titulo": "Deadgirl", "genero": "Horror", "calificacion": 9 },
{
"id": 12,
"titulo": "Mistaken for Strangers",
"genero": "Thriller",
"calificacion": 2
},
{
"id": 13,
"titulo": "Ripley Under Ground",
"genero": "Thriller",
"calificacion": 1
},
{
"id": 14,
"titulo": "Love and Death on Long Island",
"genero": "Drama",

"calificacion": 1
},
{
"id": 15,
"titulo": "Myriad of Lights",
"genero": "Drama",
"calificacion": 10
}
];

function mostrarTablaCompleta(lista){

    const tabla=document.getElementById("tablaPeliculas");

    tabla.innerHTML="";

    lista.forEach(pelicula=>{

        tabla.innerHTML+=`
        <tr>
            <td>${pelicula.id}</td>
            <td>${pelicula.titulo}</td>
            <td>${pelicula.genero}</td>
            <td>${pelicula.calificacion}</td>
        </tr>
        `;

    });
}


mostrarTablaCompleta(peliculas);

function buscarPorId(){

    const id=parseInt(document.getElementById("buscarId").value);

    const resultado=peliculas.filter(peli=>peli.id===id);

    mostrarTablaCompleta(resultado);

}

function filtrar(){

    const genero=document.getElementById("genero").value;

    if(genero===""){
        mostrarTablaCompleta(peliculas);
        return;
    }

    const resultado=peliculas.filter(peli=>peli.genero===genero);

    mostrarTablaCompleta(resultado);

}

function mayores(){

    const resultado=peliculas.filter(peli=>peli.calificacion>=5);

    mostrarTablaCompleta(resultado);

}

function buscarnombre(){

    const nombre=document.getElementById("buscarnombre").value.toLowerCase();

    const resultado=peliculas.filter(peli=>
        peli.titulo.toLowerCase().includes(nombre)
    );

    mostrarTablaCompleta(resultado);

}

function actualizar(){

    const nuevaLista=peliculas.map(peli=>{

        if(peli.calificacion===1){

            return{
                ...peli,
                calificacion:peli.calificacion+4
            };

        }

        return{
            ...peli
        };

    });

    mostrarTablaCompleta(nuevaLista);

}