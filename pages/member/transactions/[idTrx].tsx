import jwtDecode from "jwt-decode";
import {
  HistoryTransactionTypes,
  JWTPayloadTypes,
  UserTypes,
} from "../../../services/datatypes";
import TransactionDetail from "../../../components/organisms/transaction-detail";
import { getTransactionDetail } from "../../../services/member";

interface transactionDetailProps {
  transactionDetail: HistoryTransactionTypes;
}

export default function transactionsDetail(props: transactionDetailProps) {
  const { transactionDetail } = props;

  return (
    <section className="transactions-detail overflow-auto">
      <TransactionDetail data={transactionDetail} />
    </section>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
  params: {
    idTrx: string;
  };
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
  const { token } = req.cookies;
  const { idTrx } = params;

  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(token, "base64").toString("utf8");
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const userPl: UserTypes = payload.player;
  const IMG_PATH = process.env.NEXT_PUBLIC_IMG;

  userPl.avatar = `${IMG_PATH}/${userPl.avatar}`;

  const response = await getTransactionDetail(idTrx, jwtToken);

  return {
    props: {
      transactionDetail: response.data,
    },
  };
}
