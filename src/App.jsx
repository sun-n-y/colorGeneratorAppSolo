import { useState } from 'react';
import Form from './Form';
import ColorList from './ColorList';
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [colorsArray, setColorsArray] = useState(new Values('#f15025').all(10));

  const setGetColor = (color) => {
    if (!color) {
      toast.error('please input color value');
      return;
    }
    setColorsArray(new Values(color).all(10));
  };

  return (
    <main>
      <ToastContainer autoClose={2000} />
      <Form setGetColor={setGetColor} />
      <ColorList colorsArray={colorsArray} />
    </main>
  );
}

export default App;
