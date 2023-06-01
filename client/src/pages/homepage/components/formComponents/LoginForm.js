import { useEffect, useState } from "react";
import logo from "../../assets/swasthLogo.png";
import { formStyles } from "./formStyles";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../../../redux/slices/usersApiSlice";
import { setCredentials } from "../../../../redux/slices/authSlice";
import { toast } from "react-toastify";
import "../navigation/navigation.css";
import "./form.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <div>
        <Link to="/">
          <img src={logo} alt="logo" style={formStyles.logo} />
        </Link>
        <div style={formStyles.header}>Login</div>
        <div style={formStyles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus nec.
        </div>
        <div style={formStyles.formLayout}>
          <form
            onSubmit={submitHandler}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              padding: "15px",
            }}
          >
            <label style={formStyles.labelname}>
              Email Address*{" "}
              <input
                type="email"
                name="email"
                placeholder="Enter your E-mail..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={formStyles.inputname}
              />
            </label>
            <label style={formStyles.labelemail}>
              Enter Password*{" "}
              <input
                type="password"
                name="password"
                placeholder="Enter your password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ ...formStyles.inputemail, zIndex: "10" }}
              />
            </label>

            <button
              type="submit"
              style={{ ...formStyles.sbmtBtn, zIndex: "10" }}
              className="navConnBtn"
            >
              <div style={formStyles.btnTxt}>Log in</div>
            </button>
          </form>
          <div style={formStyles.signupRedirect}>
            {`Don't have an account ? `}
            <Link to="/api/users">Register here</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
