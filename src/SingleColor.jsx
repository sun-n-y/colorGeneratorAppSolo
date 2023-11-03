const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;

  return (
    <article className="single-color" style={{ background: `#${hex}` }}>
      <h4 className={index > 10 ? 'white-font' : ''}>{weight}%</h4>
      <h4 className={index > 10 ? 'white-font' : ''}>#{hex}</h4>
    </article>
  );
};
export default SingleColor;
