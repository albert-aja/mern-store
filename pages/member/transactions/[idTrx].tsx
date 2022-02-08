import jwtDecode from "jwt-decode";
import { JWTPayloadTypes, UserTypes } from "../../../services/datatypes";
import TransactionDetail from "../../../components/organisms/transaction-detail";
import { getTransactionDetail } from "../../../services/member";

export default function transactionDetail({ transactionDetail }) {
  console.log(transactionDetail);
  return (
    <section className="transactions-detail overflow-auto">
      <TransactionDetail id="#GG001" />
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
