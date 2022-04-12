import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(1);
  const [isMultiple, setMultiple] = useState(false);
  const [timer, setTimer] = useState(1);

  function handleNumber() {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    setNumber(randomNumber);
    if (randomNumber % 15 === 0) {
      setMultiple(true);
      setTimeout(() => setMultiple(false), 4000);
    }
    setTimer(0);
  }

  const increaseTimerInterval = () => setTimer(timer => timer + 1);

  useEffect(() => {
    const showNumbInterval = setInterval(handleNumber, 10000)
    const setTimerInterval = setInterval(increaseTimerInterval, 1000)
    return () => {
      clearInterval(showNumbInterval);
      clearInterval(setTimerInterval)
    }
  }, []);

  return (
    <div className="App">
      <p>{number}</p>
      <p>{isMultiple && 'Acerto'}</p>
      <p>{`Timer: ${timer}`}</p>
    </div>
  );
}

export default App;
