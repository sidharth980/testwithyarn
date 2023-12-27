import React, { useState } from 'react';
import Square from '../Square/Square.js';

const gameArray = Array(9).fill(null);


function Board() {
  const [player, setPlayer] = useState('Player X');
    const [saveSquare, setSaveSquare] = useState(Array(9).fill(null));
  return (
    <>
      <h1 data-testid = "info">{player}</h1>
      <div key = {"board0"} className="board-row" data-testid = "board0">
        {[0, 1, 2].map((value) => (
          <Square
            key = {"square"+value}
            value = {value}
            setPlayer={setPlayer}
            gameArray = {gameArray}
            saveSquare={saveSquare}
            setSaveSquare = {setSaveSquare}
          />
        ))}
      </div>
      <div key = {"board1"} className="board-row" data-testid = "board1">
        {[3, 4, 5].map((value) => (
          <Square
          key = {"square"+value}
          value = {value}
          setPlayer={setPlayer}
          gameArray = {gameArray}
          saveSquare={saveSquare}
          setSaveSquare = {setSaveSquare}
          />
        ))}
      </div>
      <div key = {"board2"} className="board-row" data-testid = "board2">
        {[6, 7, 8].map((value) => (
          <Square 
          key = {"square"+value}
          value = {value}
          setPlayer={setPlayer}
          gameArray = {gameArray}
          saveSquare={saveSquare}
          setSaveSquare = {setSaveSquare}
          />
        ))}
      </div>
    </>
  );
}

export default Board;
