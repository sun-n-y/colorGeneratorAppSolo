import { useState } from 'react';
import Form from './Form';

function App() {
  const [getColor, setGetColor] = useState('');

  return (
    <main>
      <Form setGetColor={setGetColor} />
    </main>
  );
}

export default App;
