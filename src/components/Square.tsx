//Kvadraterna som ska kunna ta emot X eller O

type SquareProps = {
  onClick: () => void;
  value: string;
};

const Square = ({ onClick, value }: SquareProps) => {
  return (
    <p
      onClick={onClick}
      style={{ width: "100px", height: "100px", fontSize: "2rem" }}
    >
      {value}
    </p>
  );
};

export default Square;
