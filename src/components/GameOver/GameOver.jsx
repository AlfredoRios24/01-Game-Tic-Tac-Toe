import './GameOver.css';

// eslint-disable-next-line react/prop-types
export default function GameOver({handleRestartGame, title}){

    return <div id='gameOver'>
        <p>
            <button onClick={handleRestartGame}>{title}</button>
        </p>

    </div>
}