const Counter = ({ counter, inc, dec, random }) => {
  return (
    <div className="container">
      <h2 className="counter">{counter}</h2>
      <button className="dec" onClick={dec}>
        -
      </button>
      <button className="inc" onClick={inc}>
        +
      </button>
      <button className="random" onClick={random}>
        random
      </button>
    </div>
  );
};

export default Counter;
