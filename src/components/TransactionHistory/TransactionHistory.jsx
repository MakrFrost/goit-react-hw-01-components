import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

function TransactionHistory({ transactions }) {
  return (
    <section className={css.section}>
      <table className={css.table}>
        <thead>
          <tr className={css.string_title}>
            <th className={css.string_box}>Type</th>
            <th className={css.string_box}>Amount</th>
            <th className={css.string_box}>Currency</th>
          </tr>
        </thead>
        {transactions.map(transaction => (
          <tbody key={transaction.id} className={css.body}>
            <tr>
              <td className={css.string_box}>{transaction.type}</td>
              <td className={css.string_box}>{transaction.amount}</td>
              <td className={css.string_box}>{transaction.currency}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </section>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

export default TransactionHistory;
