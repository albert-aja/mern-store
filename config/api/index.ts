import axios, { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

interface CallAPIProps extends AxiosRequestConfig {
  token?: boolean;
}

export default async function callAPI({
  url,
  method,
  data,
  token,
}: CallAPIProps) {
  let headers = {};

  if (token) {
    const tokenCookie = Cookies.get("token");

    if (tokenCookie) {
      const jwtToken = Buffer.from(tokenCookie, "base64").toString("utf8");
      headers = {
        Authorization: `Bearer ${jwtToken}`,
      };
    }
  }

  const res = await axios({
    url,
    method,
    data,
    headers,
  }).catch((err) => err.response);

  if (res.status > 300) {
    return {
      error: true,
      message: res.data.message,
      data: null,
    };
  }

  return {
    error: false,
    message: "success",
    data: res.data.data,
  };
}
