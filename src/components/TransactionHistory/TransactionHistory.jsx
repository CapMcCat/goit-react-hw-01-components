import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th className={s.tableHeading}>Type</th>
          <th className={s.tableHeading}>Amount</th>
          <th className={s.tableHeading}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }, idx) => (
          <tr key={id} className={idx % 2 === 0 ? s.unColored : s.colored}>
            <td className={s.tableData}>{type}</td>
            <td className={s.tableData}>{amount}</td>
            <td className={s.tableData}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.defaultProps = {
  amount: '--',
  currency: '--',
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
