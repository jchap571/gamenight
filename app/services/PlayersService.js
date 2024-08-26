import { AppState } from "../AppState.js"

class PlayersService {

  scorePoint(playerName) {
    console.log('service score', playerName)
    const playerToScore = AppState.players.find(player => player.name == playerName)
    playerToScore.score++
    console.log('Got the player', playerToScore)
  }


  minusPoint(playerName) {
    console.log('servicing score', playerName)
    const playerToMinus = AppState.players.find(player => player.name == playerName)
    playerToMinus.score--
    console.log('Got the player', playerToMinus)
  }
}
export const playersService = new PlayersService()