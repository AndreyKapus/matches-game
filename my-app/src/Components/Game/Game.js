import React, { useState, useEffect } from 'react';
import GameOver from '../GameOver/GameOver';
import GameInterface from '../GameInterface/GameInterface';

const Game = () => {
  const [matches, setMatches] = useState(25);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [winner, setWinner] = useState(null);
  const [playerMatches, setPlayerMatches] = useState(null)

    const handleMatchSelection = (numMatches) => {
    if (matches - numMatches >= 0 && !winner) {
      setMatches(matches - numMatches);
      setPlayerMatches(numMatches)
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    }
  };

  const makeAIMove = () => {
    const optimalMove = calculateOptimalMove(matches);
    setTimeout(() => {
      handleMatchSelection(optimalMove);
    }, 1000);
  };

  const calculateOptimalMove = (remainingMatches) => {
    if (remainingMatches <= 3) {
      return remainingMatches;
    }

    const optimalMove = (remainingMatches - 1) % 4;
    return optimalMove === 0 ? 1 : optimalMove;
  };

  const handleRestart = () => {
    setMatches(25);
    setCurrentPlayer(1);
    setWinner(null);
  };


  useEffect(() => {
    if (matches === 0) {
      setWinner(matches === 0 && playerMatches % 2 === 0 ? 'You' : 'AI');
    } else if (currentPlayer === 2) {
      makeAIMove();
    }
  }, [currentPlayer, matches, playerMatches]);


  return (
    <div>
      <h2>Match Game</h2>
      {!winner && <p>Current Player: Player {currentPlayer}</p>}
      {winner ? (
          <GameOver winner={winner} onRestartGame={handleRestart}/>
      ) : (
        <GameInterface matches={matches} onHandleMachesSelection={handleMatchSelection}/>
      )}
    </div>
  );
};

export default Game;