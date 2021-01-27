import React, { Component } from 'react'
import Tile from './Tile'

class Home extends Component {



  render() {
    const {colleges} = this.props
    return (
      <div id="home" >
        <p className="home-colleges">Colleges in North India</p>
        <div className="home flex" >
          {colleges.map((college, i) =>
            <Tile key={i} position={i} college={college} />
          )}
        </div>
      </div>
    )
  }
}

export default Home