import Image from "next/image";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import { JWTPayloadTypes, UserTypes } from "../../../services/datatypes";

export default function userProfile() {
  const [user, setUser] = useState({
    avatar: "",
    username: "",
    email: "",
  });

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      const jwtToken = Buffer.from(token, "base64").toString("utf8");
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userPl: UserTypes = payload.player;

      setUser(userPl);
    }
  }, []);

  const IMG_PATH = process.env.NEXT_PUBLIC_IMG;

  return (
    <div className="user text-center pb-50 pe-30">
      <Image
        src={`${IMG_PATH}/${user.avatar}`}
        width={90}
        height={90}
        className="img-fluid mb-20 rounded-circle"
        alt="avatar"
      />
      <h2 className="fw-bold text-xl color-palette-1 m-0">{user.username}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
}
