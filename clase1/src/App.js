
import { useState } from 'react';
import './App.css';
import Challenge from './componentes/FirstApp';
import NewsButtons from './componentes/Buttons';

function App() {

  const [contador, setContador] = useState(0);

  const handleSubsstract = () => {
    setContador(contador - 1);
  };

  const handleReset = () => {
    setContador(0);
  };

  const handleAdd = () => {
    setContador(contador + 1)
  };

  return (
    <div className="App">
      <div>
      <Challenge />
      </div>
      <div>
        <h1>Segundo Challenge</h1>
        <h3>Contador: {contador}</h3>
        <NewsButtons onSubstract={handleSubsstract} onReset={handleReset} onAdd={handleAdd} />
      </div>
    </div>
  );
}

export default App;
