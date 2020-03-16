//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [home, setHome] = useState(0);
  const [away, setAway] = useState(0);
  const homeTouchdown = () => {
    setHome(home + 7);
  };
  const homeFieldGoal = () => {
    setHome(home + 3);
  };
  const homeScoreReset = () => {
    setHome(0);
  };
  const awayTouchdown = () => {
    setAway(away + 7);
  };
  const awayFieldGoal = () => {
    setAway(away + 3);
  };
  const awayScoreReset = () => {
    setAway(0);
  };
  const [quarter, setQuarter] = useState(1);
  const currentQuarter = () => {
    if (quarter < 4) {
      setQuarter(quarter + 1);
    } else {
      setQuarter(1);
    }
  };

  return (
    <div className='container'>
      <section className='scoreboard'>
        <div className='topRow'>
          <div className='home'>
            <h2 className='home__name'>Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className='home__score'>{home}</div>
          </div>
          <div className='timer'>00:03</div>
          <div className='away'>
            <h2 className='away__name'>Tigers</h2>
            <div className='away__score'>{away}</div>
          </div>
        </div>
        <BottomRow quarter={quarter} />
      </section>
      <section className='buttons'>
        <div className='homeButtons'>
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={homeTouchdown} className='homeButtons__touchdown'>
            Home Touchdown
          </button>
          <button onClick={homeFieldGoal} className='homeButtons__fieldGoal'>
            Home Field Goal
          </button>
          <button onClick={homeScoreReset} className='homeScoreReset'>
            Reset Home Score
          </button>
        </div>
        <div className='awayButtons'>
          <button onClick={awayTouchdown} className='awayButtons__touchdown'>
            Away Touchdown
          </button>
          <button onClick={awayFieldGoal} className='awayButtons__fieldGoal'>
            Away Field Goal
          </button>
          <button onClick={awayScoreReset} className='awayScoreReset'>
            Reset Away Score
          </button>
        </div>
        <div className='controlButtons'>
          <button onClick={currentQuarter} className='quarterButton'>
            Increase Quarter
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
