import { useState } from "react";
import Dice from "./Dice";
import Button from "./Button";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [gameHistory, setGameHistory] = useState([])

  const handleRollClick = () => {
    const nextNum = random(6);
    setNum(nextNum);
    setSum(sum + nextNum)
    setGameHistory([...gameHistory, nextNum]);
  }

  const handleClearClick = () => {
    setNum(1);
    setSum(0);
    setGameHistory([]);
  }
  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>Roll the dice </Button>
        <Button onClick={handleClearClick}>Reset</Button>
      </div>
      <div>
        <h2>My</h2>
        <Dice color="red" num={num} />
        <h2>Total : {sum} </h2>
        <h2>Game History</h2>
        <p>{gameHistory.join(', ')}</p>
      </div>
      
    </div>
  )
}


export default App;