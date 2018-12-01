import React from 'react'
import { ReactComponent as Game } from './assets/game_SVG.svg';

const Header = () => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div>
      PERK
    </div>
    <div>
      <span style={{ marginRight: '40px' }}>
        Scoreboard
      </span>
      Dirty Boi Cleaners
    </div>
  </div>
)

const LandingPage = () => (
  <section className="section" >
    <Header />
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