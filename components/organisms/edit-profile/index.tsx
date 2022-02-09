import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";
import Image from "next/image";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { JWTPayloadTypes, UserTypes } from "../../../services/datatypes";
import Input from "../../atoms/input";
import { updateProfile } from "../../../services/member";

interface userStateTypes {
  id: string;
  email: string;
  username: string;
  avatar: any;
}

export default function formEditProfile() {
  const IMG = process.env.NEXT_PUBLIC_IMG;
  const router = useRouter();

  const [user, setUser] = useState<userStateTypes>({
    id: "",
    avatar: "",
    username: "",
    email: "",
  });
  const [imagePreview, setImagePreview] = useState<any>(null);

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      const jwtToken = Buffer.from(token, "base64").toString("utf8");
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userPl: UserTypes = payload.player;

      setUser(userPl);
    }
  }, []);

  const onSubmit = async () => {
    const data = new FormData();

    data.append("image", user.avatar);
    data.append("name", user.username);

    const response = await updateProfile(data, user.id);

    if (response.error) {
      toast.error(response.message, {
        theme: "colored",
      });
    } else {
      Cookies.remove("token");
      router.push("/sign-in");
    }
  };

  return (
    <form action="">
      <div className="photo d-flex">
        <div className="position-relative me-20">
          {imagePreview ? (
            <Image
              src={imagePreview}
              width={90}
              height={90}
              className="avatar img-fluid rounded-circle"
              alt=""
            />
          ) : (
            <Image
              src={`${IMG}/${user.avatar}`}
              width={90}
              height={90}
              className="avatar img-fluid rounded-circle"
              alt=""
            />
          )}
          <div className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
            <Image src="/icon/upload.svg" width={90} height={90} alt="upload" />
          </div>
        </div>
        <div className="image-upload">
          <label htmlFor="avatar">
            <Image src="/icon/upload.svg" width={90} height={90} alt="upload" />
          </label>
          <input
            id="avatar"
            type="file"
            name="avatar"
            accept="image/png, image/jpeg"
            onChange={(event) => {
              const img = event.target.files![0];
              setImagePreview(URL.createObjectURL(img));
              return setUser({
                ...user,
                avatar: img,
              });
            }}
          />
        </div>
      </div>
      <div className="pt-30">
        <Input
          title="Full Name"
          type="text"
          label="name"
          value={user.username}
          placeholder="Enter Your Name"
          onChange={(event) => setUser({
            ...user,
            username: event.target.value,
          })}
        />
      </div>
      <div className="pt-30">
        <Input
          title="Email Address"
          type="email"
          label="email"
          value={user.email}
          placeholder="Enter your email address"
          disabled
        />
      </div>
      {/* <div className="pt-30">
        <Input
          label="Phone"
          type="tel"
          value="phone"
          placeholder="Enter your phone number"
        />
      </div> */}
      <div className="button-group d-flex flex-column pt-50">
        <button
          type="button"
          className="btn btn-save fw-medium text-lg text-white rounded-pill"
          onClick={onSubmit}
        >
          Save My Profile
        </button>
      </div>
    </form>
  );
}
