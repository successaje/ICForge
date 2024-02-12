import styles from "./styles/transactions.module.scss"
import { MyTransactions } from "../utils/data";

const Transactions = () => {
  return (
    <div className={styles.transactions_container}>
      <h2>Transactions</h2>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>From</th>
            <th>To</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {MyTransactions.map((item) => (
            <tr key={item.id}>
              <td>{item.date}</td>
              <td>{item.type}</td>
              <td>{item.from}</td>
              <td>{item.to}</td>
              <td>{item.status}</td>
            </tr>
          ))}
          {/* {MyCarnister.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))} */}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions