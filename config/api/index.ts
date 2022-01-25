import axios, { AxiosRequestConfig } from "axios";

export default async function callAPI({
  url,
  method,
  data,
}: AxiosRequestConfig) {
  const res = await axios({
    url,
    method,
    data,
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
