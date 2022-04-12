import { useEffect, useState } from 'react';
import './App.css';

function App() {
  //Hooks
  const [number, setNumber] = useState(1);
  const [isMultiple, setMultiple] = useState(false);
  const [timer, setTimer] = useState(1);

  // Função para gerar e tratar o número aleatório  
  function handleNumber() {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    setNumber(randomNumber);
    if (randomNumber % 15 === 0) {
      setMultiple(true);
      setTimeout(() => setMultiple(false), 4000);
    }
    setTimer(0);
  }

  // Função para mostrar um timer
  const increaseTimerInterval = () => setTimer(timer => timer + 1);

  // Hook ciclos usando o DidMount(array vazio) e WillUnmount(return)
  useEffect(() => {
    const showNumbInterval = setInterval(handleNumber, 10000) // set interval dentro do hook
    const setTimerInterval = setInterval(increaseTimerInterval, 1000)
    return () => {
      clearInterval(showNumbInterval);
      clearInterval(setTimerInterval)
    }
  }, []);

  // renderização
  return (
    <div className="App">
      <p>{number}</p>
      <p>{isMultiple && 'Acerto'}</p>
      <p>{`Timer: ${timer}`}</p>
    </div>
  );
}

export default App;
