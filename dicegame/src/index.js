// import { Fragment } from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';



// const WINS = {
//   rock: "scissors",
//   scissors: "paper",
//   paper: "rock"
// }

// function getResult(left, right) {
//   if (WINS[left] == right) return "Win";
//   else if (left == WINS[right]) return "Lost";
//   return "Draw";
// }

// function handleClick() {
//   console.log("Rock Scissors Paper!");
// }

// const me = "rock";
// const other = "scissors";


// let rock = "Rock";
// const scissors = "Scissors";
// const paper = "Paper";

// // JSX => javascript + html
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <>
//   {/* 리엑트에서는 하나의 테그로 감싸주어야한다  */}
//     <h1 id="title"> {rock} {scissors} {paper}</h1>
//     <h2>{getResult(me,other)}</h2>
//     <button onClick={handleClick} class="hand">{rock}</button>
//     <button onClick={handleClick} class="hand">{scissors}</button>
//     <button onClick={handleClick} class="hand">{paper}</button>

//     <App />
//   </>
// );


import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
