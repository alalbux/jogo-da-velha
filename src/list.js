import React, { Component } from 'react'
import Tile from './Tile.js'

const style={
  width: 100,
}

class Tiles extends Component {
  render (){
    const _this = this;
    return (
      <div className="tiles" style={style}>
        {this.props.tiles.map(tile => {
          return <Tile 
            tile={tile} 
            onClick={_this.props.onClick} 
            key={tile.position-1}
          />
        })}
      </div>
    )
  }
}

export default Tiles
