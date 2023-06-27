const GameOver = ({winner, onRestartGame}) => {
    return (
        <div>
        <p>Game Over!</p>
        <p>Winner: {winner}</p>
        <button onClick={onRestartGame}>Restart</button>
      </div>
    )
};

export default GameOver;