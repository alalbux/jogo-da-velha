import React, {
  Component
} from 'react'
import './style.css'

import DisplayScore from './score'
import Restart from './reset'
import Tiles from './list'

class Tictactoe extends Component {
  constructor(props){
    super(props)
    this.state = {
      scorePlayer1: 0,
      scorePlayer2: 0,
      tiles: this.resetBoard(),
      player: 1,
      tilesClicked: 0
    }

    this.checkGame = this.checkGame.bind(this)
    this.findWinner = this.findWinner.bind(this)
  }

  resetBoard() {
    // use ramda
    return [
      {
        position:1,
        style:{ backgroundColor:"#FFF" },
        clicked: false
      },
      {
        position:2,
        style:{ backgroundColor:"#FFF" },
        clicked: false
      },
      {
        position:3,
        style:{ backgroundColor:"#FFF" },
        clicked: false
      },
      {
        position:4,
        style:{ backgroundColor:"#FFF" },
        clicked: false
      },
      {
        position:5,
        style:{ backgroundColor:"#FFF" },
        clicked: false
      },
      {
        position:6,
        style:{ backgroundColor:"#FFF" },
        clicked: false
      },
      {
        position:7,
        style:{ backgroundColor:"#FFF" },
        clicked: false
      },
      {
        position:8,
        style:{ backgroundColor:"#FFF" },
        clicked: false
      },
      {
        position:9,
        style:{ backgroundColor:"#FFF" },
        clicked: false
      },
    ]
  }

  restartGame () {
    this.setState({
      scorePlayer1: 0,
      scorePlayer2:0,
      tiles:this.resetBoard(),
      tilesClicked:0,
      player: this.state.player === 1 ?2 : 1
    })
  }

  clickTile (tileId) {
    const clicked = this.state.tiles[tileId-1].clicked

    if(clicked){
      return
    }

    const auxTiles = this.state.tiles.slice()

    if(this.state.player === 1){
      auxTiles[tileId-1].style.backgroundColor = "#FFEB3B"
    } else {
      auxTiles[tileId-1].style.backgroundColor = "#FF5722"
    }

    auxTiles[tileId-1].clicked = this.state.player
    
    let _this = this

    this.setState({
      tiles: auxTiles,
      player: this.state.player === 1 ? 2 : 1,
      tilesClicked : this.state.tilesClicked+1
    }, () => {
      // use ramda
      if(_this.state.tilesClicked >= 5){
        _this.checkGame()
      }
    })
  }

  checkGame(){
    // use ramda
    for(var i = 1; i <= 2; i++){
      if((this.state.tiles[0].clicked ===i && this.state.tiles[1].clicked ===i && this.state.tiles[2].clicked ===i) ||
         (this.state.tiles[3].clicked ===i && this.state.tiles[4].clicked ===i && this.state.tiles[5].clicked ===i) ||
         (this.state.tiles[6].clicked ===i && this.state.tiles[7].clicked ===i && this.state.tiles[8].clicked ===i) ||
         (this.state.tiles[0].clicked ===i && this.state.tiles[3].clicked ===i && this.state.tiles[6].clicked ===i) ||
         (this.state.tiles[1].clicked ===i && this.state.tiles[4].clicked ===i && this.state.tiles[7].clicked ===i) ||
         (this.state.tiles[2].clicked ===i && this.state.tiles[5].clicked ===i && this.state.tiles[8].clicked ===i) ||
         (this.state.tiles[0].clicked ===i && this.state.tiles[4].clicked ===i && this.state.tiles[8].clicked ===i) ||
         (this.state.tiles[0].clicked ===i && this.state.tiles[4].clicked ===i && this.state.tiles[8].clicked ===i) ||
         (this.state.tiles[2].clicked ===i && this.state.tiles[4].clicked ===i && this.state.tiles[6].clicked ===i)){
          console.log(`Player ${i} won!`)
          return this.findWinner(i);
      }
    }

    if(this.state.tilesClicked === 9){
      console.log(`DRAW`);
      return this.findWinner(false)
    }
  }

  findWinner(winner){
    if(winner){
      this.setState({
        tilesClicked: 0,
        tiles: this.resetBoard(),
        player: winner === 1 ? 2 : 1,
        scorePlayer1: winner === 1 ? this.state.scorePlayer1+1 : this.state.scorePlayer1,
        scorePlayer2: winner === 2 ? this.state.scorePlayer2+1 : this.state.scorePlayer2,
      });
    } else {
      this.setState({
        tilesClicked: 0,
        tiles: this.resetBoard(),
        player: this.state.player === 1 ? 2 : 1
      })
    }
    return console.log(`Player ${this.state.player} start!`)
  }

  render() {
    return (
      <div className="tictactoe">
        <h1>Jogo da Veia</h1>
        <div className="options">
          <DisplayScore 
            scorePlayer1={this.state.scorePlayer1} 
            scorePlayer2={this.state.scorePlayer2} 
          />
          <Restart 
            onClick={this.restartGame.bind(this)}
          />
        </div>
        <div className='tiles'>
          <Tiles 
            tiles={this.state.tiles} 
            onClick={this.clickTile.bind(this)}
          />
        </div>
      </div>
    )
  }
}

export default Tictactoe