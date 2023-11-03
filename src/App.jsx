import { useState } from 'react';
import Form from './Form';
import ColorList from './ColorList';
import Values from 'values.js';

function App() {
  const [colorsArray, setColorsArray] = useState(new Values('#f15025').all(10));

  const setGetColor = (color) => {
    setColorsArray(new Values(color).all(10));
  };

  return (
    <main>
      <Form setGetColor={setGetColor} />
      <ColorList colorsArray={colorsArray} />
    </main>
  );
}

export default App;
