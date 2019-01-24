import React, { Component } from 'react'

var style = {
  restar: {
    color: "#FFFFFF",
    fontSize: 30,
  }
}

class Restart extends Component {
  handleClick() {
    this.props.onClick()
  }

  render () {
    return (
      <button 
        style={style.restart} 
        onClick={this.handleClick.bind(this)}>
        Restart
      </button>
    )
  }
}

export default Restart