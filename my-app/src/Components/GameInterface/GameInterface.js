const GameInterface = ({matches, onHandleMachesSelection}) => {
    return (
        <div>
        <p>Matches Remaining: {matches}</p>
        <button onClick={() => onHandleMachesSelection(1)}>Take 1 Match</button>
        <button onClick={() => onHandleMachesSelection(2)}>Take 2 Matches</button>
        <button onClick={() => onHandleMachesSelection(3)}>Take 3 Matches</button>
      </div>
    )
};

export default GameInterface