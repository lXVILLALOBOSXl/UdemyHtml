//Metodos de propiedad
//console.log(`${}`);
const reproductor = {
    reproducir : function(id){
        console.log(`Reproduciendo Cancion con ID: ${id}`);
    },
    pausar : function(){
        console.log("pausando...");
    },
    crearPlaylist : function(nombre){
        console.log(`Creando la Playlist: ${nombre}`);
    },
    reproducirPlaylist : function(nombre){
        console.log(`Reproduciendo la Playlist: ${nombre}`);
    }
}

reproductor.eliminarCancion = function(id){
    console.log(`Eliminando la Cancion con ID: ${id}`);
}

reproductor.reproducir(21);
reproductor.pausar();
reproductor.eliminarCancion(25);
reproductor.crearPlaylist("Rap");
reproductor.reproducirPlaylist("Rap");