import jwtDecode from "jwt-decode";
import Sidebar from "../../components/organisms/sidebar";
import Overview from "../../components/organisms/overview-content";
import { JWTPayloadTypes, UserTypes } from "../../services/datatypes";

export default function member() {
  return (
    <section className="overview overflow-auto">
      <Sidebar activeMenu="overview" />
      <Overview />
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

  const jwtToken = Buffer.from(token, "base64").toString("utf8");
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const userPl: UserTypes = payload.player;
  const IMG_PATH = process.env.NEXT_PUBLIC_IMG;

  userPl.avatar = `${IMG_PATH}/${userPl.avatar}`;

  return {
    props: {
      user: userPl,
    },
  };
}
