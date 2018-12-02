import React from 'react'
import { ReactComponent as Game } from './assets/game_SVG.svg';

const LandingPage = () => (
  <section className="section" >
    <div class="container" className="columns" style={{ marginTop: '100px' }}>
      <div className="column">
        <h1 style={{ textAlign: 'left' }}>
          Make Wo<span className="span">r</span>k Fun<span className="span">.</span>
        </h1>
        <p className="noSerif" style={{ textAlign: 'left' }}>
          Gamify tasks with rewards and increase employee productivity!
        </p>
      </div>
      <div className="column">
        <Game />
      </div>
    </div>
  </section>
)

export default LandingPage;