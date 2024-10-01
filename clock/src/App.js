import './App.css';
import Clock from './components/Clock.js';
import { useState } from 'react';

function App() {

  const [newDate, setNewDate] = useState(new Date());

  setInterval(() => {
    setNewDate(new Date());
  }, 1000);

  return (
    <div className="App">
      <Clock currentDate={newDate}/>
    </div>
  );
}

export default App;
