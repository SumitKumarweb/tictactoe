import { useState } from "react";
import Card from "../Cards/Card";
import CheckWinner from "../../helper/CheckWinner";


function Grid({ numberOfCards }) {
    const [board, setBoard] = useState(Array(numberOfCards).fill(""));
    const [turn, setTurn] = useState(true); // true => O false => x
    const [winner, setWinner] = useState(null);

    function play(index) {
        if (turn) {
            board[index] = 'O';
        } else {
            board[index] = 'X';
        }

        const win = CheckWinner(board, turn ? 'O' : 'X');

        if (win) {
            setWinner(win);
        }

        setBoard([...board]);
        setTurn(!turn);
    }

    function reset() {
        setTurn(true);
        setWinner(null);
        setBoard(Array(numberOfCards).fill(""))
    }

    return (
        <div className="girdwrapper">
            <h1 className="Heading">Tik Tac Toe</h1>
            {
                winner && (
                    <>
                        <h1 className="turnHighlight">Winner is {winner}</h1>
                    </>
                )
            }

            <h1 className="turnHighlight">Current Turn : {(turn) ? 'O' : 'X'}</h1>
            <div className="gird">
                {
                    board.map((ele, idx) =>
                        <Card gameEnd={winner ? true : false} key={idx} onPlay={play} player={ele} index={idx} />
                    )
                }
                <button onClick={reset}>Reset Gamer</button>
           </div>
        </div>
    )
}
export default Grid;