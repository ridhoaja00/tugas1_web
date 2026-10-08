import { useState } from 'react';
import Display from './components/Display';
import Keypad from './components/Keypad';
import './App.css';

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult((prev) => prev + e.target.name);
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      const evaluated = Function('"use strict";return (' + result + ')')();
      setResult(String(evaluated));
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <div className="container">
      <Display value={result} />
      <Keypad 
        onClick={handleClick} 
        onClear={clear} 
        onBackspace={backspace} 
        onCalculate={calculate} 
      />
    </div>
  );
}

export default App;