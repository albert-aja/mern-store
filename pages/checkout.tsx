import jwtDecode from "jwt-decode";
import Logo from "../components/atoms/logo";
import CheckoutItem from "../components/organisms/checkout-item";
import CheckoutDetail from "../components/organisms/checkout-detail";
import CheckoutConfirmation from "../components/organisms/checkout-confirmation";
import { JWTPayloadTypes, UserTypes } from "../../../services/datatypes";

interface CheckoutProps {
  user: UserTypes;
}

export default function checkout(props: CheckoutProps) {
  const { user } = props;
  return (
    <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
      <div className="container-fluid">
        <div className="logo text-md-center text-start pb-50">
          <a className="" href="/#">
            <Logo />
          </a>
        </div>
        <div className="title-text pt-md-50 pt-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
          <p className="text-lg color-palette-1 mb-0">
            Waktunya meningkatkan cara bermain
          </p>
        </div>
        <CheckoutItem />
        <hr />
        <CheckoutDetail />
        <CheckoutConfirmation />
      </div>
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
