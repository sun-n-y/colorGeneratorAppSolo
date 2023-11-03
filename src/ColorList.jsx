import { nanoid } from 'nanoid';
import SingleColor from './SingleColor';

const ColorList = ({ colorsArray }) => {
  return (
    <div className="color-list">
      {colorsArray.map((color, index) => {
        return <SingleColor key={nanoid()} color={color} index={index} />;
      })}
    </div>
  );
};
export default ColorList;
