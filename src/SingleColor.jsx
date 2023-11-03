const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;

  const saveToClipBoard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
      } catch (error) {
        console.log(error);
      }
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
