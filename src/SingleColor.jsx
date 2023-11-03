import { toast } from 'react-toastify';

const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;

  const saveToClipBoard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success('color added to clipboard');
      } catch (error) {}
    } else {
      toast.error('clipboard not available');
    }
  };

  return (
    <article
      className="single-color"
      style={{ background: `#${hex}` }}
      onClick={saveToClipBoard}
    >
      <h4 className={index > 10 ? 'white-font' : ''}>{weight}%</h4>
      <h4 className={index > 10 ? 'white-font' : ''}>#{hex}</h4>
    </article>
  );
};
export default SingleColor;
