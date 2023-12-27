import React from 'react';

const xno = i => (i % 2 === 0 ? "X" : "O");
let i = 0;
let winner = false;
function Square({value,setPlayer, gameArray, saveSquare, setSaveSquare}) {

  function handleClick() {
    if (i<9 && !winner && gameArray[value]===null){
        const temp = saveSquare.slice();
        temp[value] = xno(i);
        gameArray[value] = xno(i);
        setSaveSquare(temp);
        i+=1;
        setPlayer("Player "+xno(i));
        winner = checkWinner(gameArray)
        if(winner){
            setPlayer("Winner "+xno(i-1));
        }
    else if(i === 9){
        setPlayer("Game Tie");
    }
    }
  }

  return (
    <button className="square" data-testid = {"square"+value} onClick={handleClick}>
      {saveSquare[value]}
    </button>
  );
}

function checkWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return true;
    }
  }
  return false;
}

export default Square;
