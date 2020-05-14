var opciones = ['piedra', 'papel', 'tijera'];

function game(jugador1, jugador2){
    switch (jugador1){
        case 0:
            switch(jugador2){
                case 0:
                    console.log(`Empate por ${opciones[jugador1]}`);
                    break;
                case 1:
                    console.log(`GANA jugador 2 porque ${opciones[jugador2]}  gana a ${opciones[jugador1]}`);
                    break;
                case 2:
                    console.log(`GANA jugador 1 porque ${opciones[jugador1]}  gana a ${opciones[jugador2]}`);
                    break;
            }
            break; //el break rompe el condicional y nos vamos
        case 1:
            switch(jugador2){
                case 0:
                    console.log(`GANA jugador 1 porque ${opciones[jugador1]}  gana a ${opciones[jugador2]}`);
                    break;
                case 1:
                    console.log(`Empate por ${opciones[jugador1]}`);
                    break;
                case 2:
                    console.log(`GANA jugador 2 porque ${opciones[jugador2]}  gana a ${opciones[jugador1]}`);
                    break;
            }
            break;
        case 2:
            switch(jugador2){
                case 0:
                    console.log(`GANA jugador 2 porque ${opciones[jugador2]}  gana a ${opciones[jugador1]}`);
                    break;
                case 1:
                    console.log(`GANA jugador 1 porque ${opciones[jugador1]}  gana a ${opciones[jugador2]}`);
                    break;
                case 2:
                    console.log(`Empate por ${opciones[jugador1]}`);
                    break;
            }
            break;
    
    }
}



function game2(jugador1, jugador2) {

    switch (true) {

        case jugador1 == jugador2:
            console.log(`EMPATE por ${opciones[jugador1]}`);
            break;

        case jugador1 == 0 && jugador2 == 2 || jugador1 == 1 && jugador2 == 0 || jugador1 ==2 && jugador2 == 1:
            console.log(`GANA jugador 1 porque ${opciones[jugador1]}  gana a ${opciones[jugador2]}`);
            break;

        default:
            console.log(`GANA jugador 2 porque ${opciones[jugador2]}  gana a ${opciones[jugador1]}`);
    }
}

//PRUEBAS
game(0,0);
game(0,1);
game(1,2);

game2(1,0);
game2(2,1);
game2(2,2);