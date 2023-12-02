import { useState } from "react";
import "./app.css";

const RegistrationForm = () => {
  const [name, setName] = useState(" ");
  const [family, setFamily] = useState(" ");
  const [email, setEmail] = useState(" ");

  return (
    <>
      <div className="register-app-container">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="register-app-input">
            <input
              type="text"
              placeholder="نام"
              onChange={(e) => setName(e.target.value)}
            />
            {!name && <p>نام را وارد کنید.</p>}
          </div>
          <div className="register-app-input">
            <input
              type="text"
              onChange={(e) => setFamily(e.target.value)}
              placeholder="نام خانوادگی"
            />
            {!family && <p>نام خانوادگی را وارد کنید.</p>}
          </div>
          <div className="register-app-input">
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="آدرس ایمیل"
            />
            {!email && <p>ایمیل را وارد کنید.</p>}
          </div>
          <button>عضویت</button>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
