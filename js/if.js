var opciones = ['piedra', 'papel', 'tijera'];

var game = function (jugador1, jugador2) {
    //jugador 1 escoge piedra 
    if (jugador1 == 0) {
        if (jugador2 == 0) {
            console.log(`Empate por ${opciones[jugador1]}`);
        } else if (jugador2 == 1) {
            console.log(`GANA jugador 2 porque ${opciones[jugador2]} gana a ${opciones[jugador1]}`);
        } else {
            console.log(`GANA jugador 1 porque ${opciones[jugador1]} gana a ${opciones[jugador2]}`);
        }
    }
    // jugador 1 escoge papel
    else if (jugador1 == 1) {
        if (jugador2 == 0) {
            console.log(`GANA jugador 1 porque ${opciones[jugador1]} gana a ${opciones[jugador2]}`);
        } else if (jugador2 == 1) {
            console.log(`Empate por ${opciones[jugador1]}`);
        } else {
            console.log(`GANA jugador 2 porque ${opciones[jugador2]} gana a ${opciones[jugador1]}`);
        }
    }
    //jugador 1 escoge tijera
    else {
        if (jugador2 == 0) {
            console.log(`GANA jugador 2 porque ${opciones[jugador2]}  gana a ${opciones[jugador1]}`);
        } else if (jugador2 == 1) {
            console.log(`GANA jugador 1 porque ${opciones[jugador1]}  gana a ${opciones[jugador2]}`);
        } else {
            console.log(`Empate por ${opciones[jugador1]}`);
        }
    }
}


// FUNCIÓN DE TONI
function gameToni(jugador1, jugador2) {
    //comprobar empate
    if (jugador1 == jugador2) {
        console.log(`EMPATE por ${elementos_del_juego[jugador1]}`);
    }
    //ganador jugador1
    else if (jugador1 == 0 && jugador2 == 2 || jugador1 == 1 && jugador2 == 0 || jugador1 == 2 && jugador2 == 1) {
        console.log(`GANA jugador 1 porque ${elementos_del_juego[jugador1]} gana a ${elementos_del_juego[jugador2]}`);
    }
    // ganador jugador2
    else {
        console.log(`GANA jugador 2 porque ${elementos_del_juego[jugador2]}  gana a ${elementos_del_juego[jugador1]}`);
    }
}

//PRUEBAS
game(0,0);
game(0,1);
game(1,2);
game(1,0);
game(2,1);
game(2,2);