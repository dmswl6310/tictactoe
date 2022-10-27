type SquareType = {
  value: string;
  btnClick: () => void;
};

function Square({ value, btnClick }: SquareType) {
  return (
    <button className="square" onClick={btnClick}>
      {value}
    </button>
  );
}

function Board(props: { onClick: (i: number) => void; squares: string[] }) {
  const renderSquare = (i: number) => (
    <Square value={props.squares[i]} btnClick={() => props.onClick(i)} />
  );

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
