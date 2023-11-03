const SingleColor = ({ color }) => {
  const { hex, weight } = color;
  return (
    <article className="single-color" style={{ background: `#${hex}` }}>
      <h4 className="percent">${weight}</h4>
      <h4 className="hex">#{hex}</h4>
    </article>
  );
};
export default SingleColor;
