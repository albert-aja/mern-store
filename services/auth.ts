import axios from "axios";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

export async function setSignUp(data) {
  const ENDPOINT = "auth/signup";

  const res = await axios.post(`${ROOT_API}/${API_VERSION}/${ENDPOINT}`, data);
  const axiosRes = res.data;

  return axiosRes.data;
}

export async function setLogin() {
  return null;
}
