"use strict";
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Muller",
      "Gnarby",
      "Lewandowski",
      "Coman",
    ],
    [
      "Gotze",
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//console.log(game.players);
//TAREA 1
/**
 Cree un array de jugadores para cada equipo (nombre a las variables como
'players1' y 'players2')
 */
const players1 = game.players[0];
const players2 = game.players[1];
//console.log(players2);
//TAREA 2
/*
El primer jugador en cualquier conjunto de jugadores es el portero y los demás
son jugadores de campo. Para el Bayern de Múnich (team 1) cree una variable
'gk' con el nombre del portero y un array 'fieldPlayers' con los 10 restantes
jugadores de campo
*/
const [gk] = players1;
console.log(gk);
const fieldPlayers = players1.slice(1);
console.log(fieldPlayers);
//TAREA 3
/*
Cree una matriz 'allPlayers' que contenga a todos los jugadores de ambos
equipos (22 jugadores)
*/
let allPlayers = players1 + players2;
allPlayers = allPlayers.split(",");
console.log(allPlayers);
//TAREA 4
/*
Durante el partido, el Bayern de Múnich (team 1) utilizó 3 jugadores suplentes.
Así que crea un nuevo array ('players1Final') que contiene todos los jugadores
originales del equipo1 más 'Thiago', 'Coutinho' y 'Perisic'
*/
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);
//TAREA 5
/*
Basado en el objeto game.odds, cree una variable para cada cuota (llamada
'team1', 'draw' y 'team2')
*/
const {
  odds: { team1, x, team2 },
} = game;
const Team1 = team1;
const draw = x;
const Team2 = team2;
console.log(Team1 + " -> " + draw + " -> " + Team2);
//TAREA 6
/*
Cree una función ('printGoals') que reciba un número arbitrario de nombres de
jugadores (no un array) e imprime cada uno de ellos en la consola, junto con el
número de goles que marco cada uno (pasar como argumento solo nombres de
jugadores que hayan marcado al menos un gol, revise los datos del objeto ‘game’
para encontrar la información que le sirva).
*/

const printGoals = () => {
  //"Lewandowski", "Gnarby", "Lewandowski", "Hummels"
  const { scored } = game;
  let scoredo = scored;
  for (let i = 0; i < allPlayers.length; i++) {
    for (let j = 0; j < scoredo.length; j++) {
      if (scoredo[j] === allPlayers[i]) {
        console.log(allPlayers[i]);
      }
    }
  }
};
console.log(printGoals());
//TAREA 7
/*
En las aplicaciones de apuestas es más probable que gane el equipo con la
cuota más baja. Imprima en la consola que equipo es más probable que gane,
sin usar una declaración if/else o el operador ternario.
*/
