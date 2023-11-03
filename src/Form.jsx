import { useState } from 'react';

const Form = ({ setGetColor }) => {
  const [color, setColor] = useState('');
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setGetColor(color);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="color">Color Generator </label>
      <input
        type="color"
        id="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <input
        type="text"
        placeholder={'#f15025'}
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button type="submit" style={{ background: color }}>
        Generate
      </button>
    </form>
  );
};
export default Form;
