import Image from 'next/image';
import Input from '../../atoms/input';

export default function formEditProfile() {
  return (
    <form action="">
      <div className="photo d-flex">
        <div className="position-relative me-20">
          <Image
            src="/img/avatar-1.png"
            width={90}
            height={90}
            className="avatar img-fluid"
            alt=""
          />
          <div className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
            <Image src="/icon/upload.svg" width={24} height={24} alt="upload" />
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
          />
        </div>
      </div>
      <div className="pt-30">
        <Input
          label="Full Name"
          type="text"
          value="name"
          placeholder="Enter Your Name"
        />
      </div>
      <div className="pt-30">
        <Input
          label="Email Address"
          type="email"
          value="email"
          placeholder="Enter your email address"
        />
      </div>
      <div className="pt-30">
        <Input
          label="Phone"
          type="tel"
          value="phone"
          placeholder="Enter your phone number"
        />
      </div>
      <div className="button-group d-flex flex-column pt-50">
        <button
          type="submit"
          className="btn btn-save fw-medium text-lg text-white rounded-pill"
          role="button"
        >
          Save My Profile
        </button>
      </div>
    </form>
  );
}
