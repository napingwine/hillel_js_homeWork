import './App.css';
import { useEffect, useState } from 'react';
import calculateWinner from './Helpers/calculateWinner';

import Board from './Components/Board';

function App() {
  const [history, setHistory] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [step, setStep] = useState(0);

  const chooseSquare = (i) => {
    if (history[i] !== null) return;
    setStep(prev => prev + 1);
    if (xIsNext) {
      setHistory(prev => {
        prev[i] = 'X';
        return prev;
      });
      setXIsNext(false);
      return;
    };

    setHistory(prev => {
      prev[i] = 'O';
      return prev;
    });
    setXIsNext(true);
  };

  const newGame = () => {
    setHistory(Array(9).fill(null));
    setXIsNext(true);
    setStep(0);
  };

  useEffect(() => {
    if (calculateWinner(history)) {
      alert(`Winner is: ${calculateWinner(history)}`);
      newGame();
      return;
    };

    if (step === 9) {
      alert('No winner');
      newGame();
    }
  }, [xIsNext])

  return (
    <>
      <h1>Is {xIsNext ? 'X' : 'O'} turn</h1>
      <Board squares={history} onClick={i => chooseSquare(i)} />
      <button onClick={newGame} className='reset_BTN'>Reset</button>
    </>
  );
};

export default App;
