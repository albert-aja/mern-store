import Sidebar from '../../components/organisms/sidebar';
import TransactionDetail from '../../components/organisms/transaction-detail';

export default function transactionDetail() {
  return (
    <section className="transactions-detail overflow-auto">
      <Sidebar activeMenu="transaction" />
      <TransactionDetail id="#GG001" />
    </section>
  );
}
