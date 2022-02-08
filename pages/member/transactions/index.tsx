import Sidebar from "../../../components/organisms/sidebar";
import TransactionContent from "../../../components/organisms/transaction-content";

export default function transaction() {
  return (
    <section className="transactions overflow-auto">
      <Sidebar activeMenu="transaction" />
      <TransactionContent />
    </section>
  );
}

interface ServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
}

export async function getServerSideProps({ req }: ServerSideProps) {
  const { token } = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
