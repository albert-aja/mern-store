import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { setSignUp } from "../services/auth";
import { getGameCategory } from "../services/player";

export default function signUpPhoto() {
  const [categories, setCategories] = useState([]);
  const [favorit, setFavorit] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("/icon/upload.svg");
  const [localForm, setLocalForm] = useState({
    name: "",
    email: "",
  });

  const router = useRouter();

  const getGameCategoryData = useCallback(async () => {
    const data = await getGameCategory();
    setCategories(data);
    setFavorit(data[0]._id);
  }, [getGameCategory]);

  useEffect(() => {
    getGameCategoryData();
  }, []);

  useEffect(() => {
    setLocalForm(JSON.parse(localStorage.getItem("userForm")!));
  }, []);

  const onSubmit = async () => {
    const form = JSON.parse(await localStorage.getItem("userForm")!);
    const data = new FormData();

    data.append("avatar", image);
    data.append("name", form.name);
    data.append("email", form.email);
    data.append("password", form.password);
    data.append("favorit", favorit);

    const res = await setSignUp(data);

    if (res.error) {
      toast.error(res.message, {
        theme: "colored",
      });
    } else {
      toast.success("Registrasi Berhasil", {
        theme: "colored",
      });
      router.push("sign-up-success");
      localStorage.removeItem("userForm");
    }
  };

  return (
    <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
      <div className="container mx-auto">
        <form action="">
          <div className="form-input d-md-block d-flex flex-column">
            <div>
              <div className="mb-20">
                <div className="image-upload text-center">
                  <label htmlFor="avatar">
                    <Image
                      src={imagePreview}
                      width={120}
                      height={120}
                      alt="upload"
                      className="img-preview"
                    />
                  </label>
                  <input
                    type="file"
                    id="avatar"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={(event) => {
                      const img = event.target.files[0];
                      setImagePreview(URL.createObjectURL(img));
                      return setImage(img);
                    }}
                  />
                </div>
              </div>
              <h2 className="fw-bold text-xl text-center color-palette-1 m-0">
                {localForm.name}
              </h2>
              <p className="text-lg text-center color-palette-1 m-0">
                {localForm.email}
              </p>
              <div className="pt-50 pb-50">
                <label
                  htmlFor="category"
                  className="form-label text-lg fw-medium color-palette-1 mb-10"
                >
                  Favorite Game
                </label>
                <select
                  className="form-select d-block w-100 rounded-pill text-lg"
                  value={favorit}
                  onChange={(event) => setFavorit(event.target.value)}
                >
                  <option value="" disabled selected>
                    Select Category
                  </option>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="button-group d-flex flex-column mx-auto">
              <button
                className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                type="button"
                onClick={onSubmit}
              >
                Create My Account
              </button>
              <a
                className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15"
                href="#"
                role="button"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
