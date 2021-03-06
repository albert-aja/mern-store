import Link from "next/link";
import Image from "next/image";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { JWTPayloadTypes, UserTypes } from "../../../services/datatypes";

export default function auth() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    avatar: "",
  });

  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      const jwtToken = Buffer.from(token, "base64").toString("utf8");
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userPl: UserTypes = payload.player;
      const IMG_PATH = process.env.NEXT_PUBLIC_IMG;

      user.avatar = `${IMG_PATH}/${userPl.avatar}`;

      setIsLogin(true);
      setUser(user);
    }
  }, []);

  const onLogout = () => {
    Cookies.remove("token");
    setIsLogin(false);
    router.push("/");
  };

  if (isLogin) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none" />
        <div>
          <a
            className="dropdown-toggle ms-lg-40"
            href="/#"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
          >
            <Image
              src={user.avatar}
              className="rounded-circle"
              width={40}
              height={40}
              alt=""
            />
          </a>

          <ul className="dropdown-menu border-0">
            <li>
              <Link href="/member">
                <a className="dropdown-item text-lg color-palette-2">
                  My Profile
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#">
                <a className="dropdown-item text-lg color-palette-2">Wallet</a>
              </Link>
            </li>
            <li>
              <Link href="/member/edit-profile">
                <a className="dropdown-item text-lg color-palette-2">
                  Account Settings
                </a>
              </Link>
            </li>
            <li onClick={onLogout}>
              <a className="dropdown-item text-lg color-palette-2" href="#">
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </li>
    );
  }

  return (
    <li className="nav-item my-auto">
      <Link href="sign-in">
        <a className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill">
          Sign In
        </a>
      </Link>
    </li>
  );
}
