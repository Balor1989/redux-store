import s from "./CartTable.module.css";
import { FaTrashAlt, FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { connect } from "react-redux";

const CartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
  const renderTableItem = (item, idx) => {
    const { id, title, count, price } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>$ {price.toFixed(2)}</td>
        <td className="d-md-flex justify-content-md-end">
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => onDelete(id)}
          >
            <FaTrashAlt />
          </button>
          <button
            className="btn btn-outline-success btn-sm"
            onClick={() => onIncrease(id)}
          >
            <FaPlusCircle />
          </button>
          <button
            className="btn btn-outline-warning btn-sm"
            onClick={() => onDecrease(id)}
          >
            <FaMinusCircle />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <footer className={`${s.cartTable} container`}>
      <h2 className={s.title}>Your Order</h2>
      <table className="table table-hover align-middle">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Total price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>{items.map(renderTableItem)}</tbody>
      </table>

      <div className={s.total}>Total: ${total}</div>
    </footer>
  );
};

const mapStateToProps = ({ items, orderTotal }) => {
  return {
    items: items,
    total: orderTotal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: () => {
      console.log("Delete");
    },
    onIncrease: () => {
      console.log("+");
    },
    onDecrease: () => {
      console.log("-");
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
