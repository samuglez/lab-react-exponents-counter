export default function Exponent({num, exponent}) {
    return (
        <div className="exponent-counter-container">
        <p className="exponent-label">{num}^{exponent}</p>
        <p className="exponent-result">
            {Array.from({length: exponent}, (_, i) => num).join(' * ')} = <span className="total">{num**exponent}</span>
        </p>
        </div>
    );
}