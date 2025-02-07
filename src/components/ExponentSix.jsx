const ExponentSix = ({base}) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{base}⁶</p>
    <p className="exponent-result">{base} * {base} * {base} * {base} * {base} * {base} = <span className="total">{base**6}</span></p>
  </div>
);

export default ExponentSix;