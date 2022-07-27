import s from "./CartTable.module.css";
import { FaTrashAlt, FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const CartTable = () => {
  return (
    <footer className={`${s.cartTable} container`}>
      <h2 className={s.title}>Your Order</h2>
      <table className="table table-hover align-middle">
        <thead>
          <th>#</th>
          <th>Item</th>
          <th>Count</th>
          <th>Price</th>
          <th>Action</th>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Site Reliability Engineering</td>
            <td>2</td>
            <td>$40</td>
            <td className="d-md-flex justify-content-md-end">
              <button className="btn btn-outline-danger btn-sm">
                <FaTrashAlt />
              </button>
              <button className="btn btn-outline-success btn-sm">
                <FaPlusCircle />
              </button>
              <button className="btn btn-outline-warning btn-sm">
                <FaMinusCircle />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className={s.total}>Total: $201</div>
    </footer>
  );
};

export default CartTable;
