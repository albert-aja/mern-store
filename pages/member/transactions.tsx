import Sidebar from '../../components/organisms/sidebar';
import TransactionContent from '../../components/organisms/transaction-content';

export default function transaction() {
  return (
    <section className="transactions overflow-auto">
      <Sidebar activeMenu="transaction" />
      <TransactionContent />
    </section>
  );
}
