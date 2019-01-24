import React, { Component } from 'react'

class Tile extends Component {
  render() {
    return (
      <div style={{
        backgroundColor:this.props.tile.style.backgroundColor, 
        width:"50px",
        height:"100px",
      }} 
      onClick={
        this.props.onClick.bind(null, this.props.tile.position)
      } >
      </div>
    )
  }
}

export default Tile
