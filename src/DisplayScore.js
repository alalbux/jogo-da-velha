import React, {
  Component
} from 'react'

var style = {
  displayScore: {
    color: "#FFFFFF",
    fontSize: 15,
  }
}

class DisplayScore extends Component {
  render (){
    return (
      <div className='display-score' style={{textAlign:'center'}}>
        <h4 style={style.displayScore}>Score</h4>
        <div>
          <div>
            Player 1: <span style={{color: this.props.scorePlayer1>this.props.scorePlayer2 ? "blue" : "red"}}>{this.props.scorePlayer1}</span>
          </div>
          <div>
            Player 2: <span style={{color: this.props.scorePlayer2>this.props.scorePlayer2 ? "blue" : "red"}}>{this.props.scorePlayer2}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default DisplayScore
