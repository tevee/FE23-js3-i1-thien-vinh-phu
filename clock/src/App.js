import './App.css';
import Clock from './components/Clock.jsx';
import { useState, useEffect } from 'react';

function App() {

  const [newDate, setNewDate] = useState(new Date());

  // Körs bara en gång när komponenten monteras med en tom array som dependency
  // När komponenten avmonteras försvinner intervallet
  useEffect(() => {
    const interval = setInterval(() => {
      setNewDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="App">
      <Clock currentDate={newDate}/>
    </div>
  );
}

export default App;
