import PropTypes from 'prop-types';
import { TableInfo, TableTitle } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <TableTitle>Type</TableTitle>
          <TableTitle>Amount</TableTitle>
          <TableTitle>Currency</TableTitle>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <TableInfo>{type}</TableInfo>
            <TableInfo>{amount}</TableInfo>
            <TableInfo>{currency}</TableInfo>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
