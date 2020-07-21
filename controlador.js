
//Definir la url del servicio
let url='https://api.spotify.com/v1/artists/0VZrPa7mWAYXH4CwmYk8Km/top-tracks?country=es';


//Definir un objeto de tipo ajax
let objetoAjax=new XMLHttpRequest();

//variable para almacenar el token
let token=' Bearer BQCm5VUyXatrR87wfdhGUUSbnvO8nvcVk3M5fgPES9zwTxVKq6eJDo-DTZJSRGjuk38GJYPbTrI74uJZDCumu4Zf2Wd_mF0HWLHK5Szz2w0MT-cnwkZ9NKlwcUrHNwJazSgQemF3o8A4woH1xM_0a4-KLeFIkQQ';

//hagamos el open de la conexion
objetoAjax.open('GET',url,true);

//crear un header en la peticion
objetoAjax.setRequestHeader('Authorization',token);

//cargar los datos
objetoAjax.onload=function(){
let respuesta=JSON.parse(this.responseText);
console.log(respuesta); //objeto1{}
console.log(respuesta.tracks[0].preview_url); // a la propiedad preview_url  del objeto2
console.log(respuesta.tracks[0].album.images[0].url);
console.log(respuesta.tracks[0].album.name);

let imagen1=document.getElementById("imagen1");
imagen1.src=respuesta.tracks[0].album.images[0].url;

let titulo1=document.getElementById("titulo1");
titulo1.textContent= respuesta.tracks[0].album.name;

let audio1=document.getElementById("audio1");
audio1.src=respuesta.tracks[0].preview_url;

console.log(respuesta.tracks[1].preview_url); // a la propiedad preview_url  del objeto2
console.log(respuesta.tracks[1].album.images[0].url);
console.log(respuesta.tracks[1].album.name);

let imagen2=document.getElementById("imagen2");
imagen2.src=respuesta.tracks[1].album.images[0].url;

let titulo2=document.getElementById("titulo2");
titulo2.textContent= respuesta.tracks[1].album.name;

let audio2=document.getElementById("audio2");
audio2.src=respuesta.tracks[1].preview_url;


console.log(respuesta.tracks[2].preview_url); // a la propiedad preview_url  del objeto2
console.log(respuesta.tracks[2].album.images[0].url);
console.log(respuesta.tracks[2].album.name);

let imagen3=document.getElementById("imagen3");
imagen3.src=respuesta.tracks[2].album.images[0].url;

let titulo3=document.getElementById("titulo3");
titulo3.textContent= respuesta.tracks[2].album.name;

let audio3=document.getElementById("audio3");
audio3.src=respuesta.tracks[2].preview_url;

}

//cerrar y enviar
objetoAjax.send();
