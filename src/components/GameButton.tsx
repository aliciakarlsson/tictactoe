//Skapa knapp för att starta/restarta

type GameButtonProps = {
  resetGame: () => void;
};

const GameButton = ({ resetGame }: GameButtonProps) => {
  return <button onClick={resetGame}>Restart Game</button>;
};

export default GameButton;
