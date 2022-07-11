import { connect } from "react-redux/es/exports";
import { inc, dec, random } from "./actions";

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

const mapStateToProps = (state) => {
  return { counter: state };
};
const mapDispatchToProps = (dispatch) => {
  return {
    inc: () => dispatch(inc()),
    dec: () => dispatch(dec()),
    random: () => dispatch(random()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
