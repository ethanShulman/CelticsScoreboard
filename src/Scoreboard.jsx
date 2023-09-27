import { useState } from "react"



const Scoreboard = () => {
  const [value, setValue] = useState("value")
  const [Scoreboard, setScoreboard] = useState([])

    const handleClick = () => {
        setScoreboard([...Scoreboard, value])
    

    const deleteItem = (index) => {
        const updatedScore = [...Scoreboard]
        updatedScore.splice(index, 1)
        setScoreboard(updatedScore)
    }

    const updateItem = (index, newValue) => {
        const updatedScore = [...Scoreboard] // Takes the state of the array currently and makes it 
        updatedScore[index] = newValue
        setScoreboard(updatedScore)
    }


  return (
    <div style={{backgroundColor: 'red'}}>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <h1>{}</h1>
      <button onClick={handleClick}>Up the Score</button>
      <div>
        <ol>
          {Scoreboard.map((Scores, index) => (
            <li key={index}>
              {Scores}
              <button onClick={() => deleteItem(index)}>Delete Points</button>
              <button id="updateBtn"
                onClick={() => {
                  const newValue = prompt("Enter new value:")
                  if (newValue !== null) {
                    updateItem(index, newValue)
                  }
                }}
              >
                Update
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}}



export default Scoreboard
