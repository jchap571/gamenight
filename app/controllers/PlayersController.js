import { AppState } from "../AppState.js"
import { playersService } from "../services/PlayersService.js"


export class PlayersController {
  constructor() {
    console.log('Players controller is loaded')
    console.log(AppState.players)
    this.drawPlayers()


  }

  drawPlayers() {
    const players = AppState.players
    let playerHTML = ''
    players.forEach(player => playerHTML += player.PlayerTemplateCard)
    const playerCardsElem = document.getElementById('player-cards')
    playerCardsElem.innerHTML = playerHTML
  }


  scorePoint(playerName) {
    console.log('Clicked', `${playerName}`)
    playersService.scorePoint(playerName)
    this.drawPlayers()

  }


  minusPoint(playerName) {
    console.log('Clicked', `${playerName}`)
    playersService.minusPoint(playerName)
    this.drawPlayers()
  }



}