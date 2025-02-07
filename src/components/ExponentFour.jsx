const ExponentFour = ({base}) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">{base}⁴</p>
    <p className="exponent-result">{base} * {base} * {base} * {base} = <span className="total">{base**4}</span></p>
  </div>
);

export default ExponentFour;