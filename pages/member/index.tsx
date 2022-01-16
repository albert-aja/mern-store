import Sidebar from '../../components/organisms/sidebar';
import Overview from '../../components/organisms/overview-content';

export default function member() {
  return (
    <section className="overview overflow-auto">
      <Sidebar />
      <Overview />
    </section>
  );
}
