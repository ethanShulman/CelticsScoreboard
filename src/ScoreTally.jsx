import React, { useState } from "react"; // Importing necessary modules for ScoreTally component
import "./ScoreTally.css"; // Importing styles from ScoreTally.css
import "./assets/basketball-icon.png"; // Importing basketball icon image from assets folder
import backgroundPic from "./assets/celticsPicture.jpeg"

const ScoreTally = () => {
  // Creates the functional component ScoreTally
  // const [value, setValue] = useState(""); // Defines value variable for function
  const [team1Score, setTeam1Score] = useState(0); // Defines team1Score variable for function
  const [team2Score, setTeam2Score] = useState(0); // Defines team2Score variable for function
  const [opponentTeamName, setOpponentTeamName] = useState("Opposing Team");

  const handleAddOne = (team) => {
    // Setting a function to add 1 point at a time to team scores
    if (team === 1) {
      // If it is team 1...
      setTeam1Score(team1Score + 1); // Add 1 point to team 1's score
    } else if (team === 2) {
      // If it is team 2...
      setTeam2Score(team2Score + 1); // Add 1 point to team 2's score
    }
  };
  const handleSubtractOne = (team) => {
    // Setting a function to subtract 1 point at a time from team scores
    if (team === 1) {
      // If it is team 1...
      setTeam1Score(team1Score - 1); // Subtract 1 point to team 1's score
    } else if (team === 2) {
      // If it is team 2...
      setTeam2Score(team2Score - 1); // Subtract 1 point to team 2's score
    }
  };

  const handleAddTwo = (team) => {
    // Setting a function to add 2 points at a time to team scores
    if (team === 1) {
      // If it is team 1...
      setTeam1Score(team1Score + 2); // Add 2 points to team 1's score
    } else if (team === 2) {
      // If it is team 2...
      setTeam2Score(team2Score + 2); // Add 2 points to team 2's score
    }
  };

  const handleAddThree = (team) => {
    // Setting a function to add 3 points at a time to team scores
    if (team === 1) {
      // If it is team 1...
      setTeam1Score(team1Score + 3); // Add 3 points to team 1's score
    } else if (team === 2) {
      // If it is team 2...
      setTeam2Score(team2Score + 3); // Add 3 points to team 2's score
    }
  };

  const handleResetScore = () => {
    // Setting a function to reset scoreboard
    setTeam1Score(0); // If reset button is clicked score will equal 0 for team 1
    setTeam2Score(0); // If reset button is clicked score will equal 0 for team 2
  };

  const handleOpponentTeamNameChange = (event) => {
    setOpponentTeamName(event.target.value);
  };

  return (
    <div className="body-container">  
    {/* Div encompasses all the HTML and sets body-container as a class */}
      <div style={{ backgroundColor: "green" }} className="background-color">
        <img src={backgroundPic} className="celtics-pic" />
        <div>
          {/* <img id='bballicon' src='./src/assets/basketball-icon.png' /> */}
          <h1 className="h1-tally">Boston Celtics</h1>
          <button onClick={() => handleAddOne(1)}>Add 1 Point</button>
          <button onClick={() => handleAddTwo(1)}>Add 2 Points</button>
          <button onClick={() => handleAddThree(1)}>Add 3 Points</button>
          <button onClick={() => handleSubtractOne(1)}>Subtract 1 Point</button>
          <h3>
            <img id="bballicon" src="./src/assets/basketball-icon.png" />
            Score: {team1Score}{" "}
            <img id="bballicon" src="./src/assets/basketball-icon.png" />
          </h3>
        </div>
        <div>
          {/* <img id='bballicon' src='./src/assets/basketball-icon.png' /> */}
          <h1 className="h1-tally">{opponentTeamName}</h1>
          <button onClick={() => handleAddOne(2)}>Add 1 Point</button>
          <button onClick={() => handleAddTwo(2)}>Add 2 Points</button>
          <button onClick={() => handleAddThree(2)}>Add 3 Points</button>
          <button onClick={() => handleSubtractOne(2)}>Subtract 1 Point</button>
          <h3>
            <img id="bballicon" src="./src/assets/basketball-icon.png" />
            Score: {team2Score}
            <img id="bballicon" src="./src/assets/basketball-icon.png" />
          </h3>
        </div>
        <button onClick={handleResetScore}>Reset Score</button>
        <div className="input-container">
          <input
            type="text"
            value={opponentTeamName}
            onChange={handleOpponentTeamNameChange}
            placeholder="Enter opponent team" />
      </div>    
      </div>
    </div>
  );
};

export default ScoreTally;
