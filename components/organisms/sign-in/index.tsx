import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { setLogin } from "../../../services/auth";
import Logo from "../../atoms/logo";

export default function signIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const onSubmit = async () => {
    const data = {
      email,
      password,
    };

    if (!email || !password) {
      toast.error("Form wajib diisi!", {
        theme: "colored",
      });
    } else {
      const response = await setLogin(data);

      if (response.error) {
        toast.error(response.message, {
          theme: "colored",
        });
      } else {
        toast.success("Login Berhasil", {
          theme: "colored",
        });

        const { token } = response.data;
        const tokenBase64 = Buffer.from(token, "utf8").toString("base64");
        Cookies.set("token", tokenBase64, { expires: 1 });

        router.push("/");
      }
    }
  };

  return (
    <form action="">
      <div className="container mx-auto">
        <div className="pb-50">
          <Link href="/">
            <a className="navbar-brand">
              <Logo />
            </a>
          </Link>
        </div>
        <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
        <p className="text-lg color-palette-1 m-0">
          Masuk untuk melakukan proses top up
        </p>
        <div className="pt-50">
          <label className="form-label text-lg fw-medium color-palette-1 mb-10">
            Email Address
          </label>
          <input
            type="email"
            className="form-control rounded-pill text-lg"
            placeholder="Enter your email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="pt-30">
          <label className="form-label text-lg fw-medium color-palette-1 mb-10">
            Password
          </label>
          <input
            type="password"
            className="form-control rounded-pill text-lg"
            placeholder="Your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <div className="button-group d-flex flex-column mx-auto pt-50">
          <button
            className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
            type="button"
            onClick={onSubmit}
          >
            Continue to Sign In
          </button>
          <Link href="/sign-up">
            <a className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill">
              Sign Up
            </a>
          </Link>
        </div>
      </div>
    </form>
  );
}
