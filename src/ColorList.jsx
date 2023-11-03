import { nanoid } from 'nanoid';
import SingleColor from './SingleColor';

const ColorList = ({ colorsArray }) => {
  return (
    <div className="color-list">
      {colorsArray.map((color) => {
        return <SingleColor key={nanoid()} color={color} />;
      })}
    </div>
  );
};
export default ColorList;
