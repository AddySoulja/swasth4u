import { useState, useEffect } from "react";
import { formStyles } from "./formStyles";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../../../../redux/slices/usersApiSlice";
import { setCredentials } from "../../../../redux/slices/authSlice";
import { toast } from "react-toastify";
import logo from "../../assets/swasthLogo.png";
import "../navigation/navigation.css";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(null);
  const [agree, setAgree] = useState(false);
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (
      // password !== confirmPassword
      false
    ) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await register({
          name,
          email,
          phone,
          agree,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate("/login");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };
  return (
    <>
      <div>
        <Link to="/">
          <img src={logo} alt="logo" style={formStyles.logo} />
        </Link>
        <div style={formStyles.header}>Register for Associate Account!</div>
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
              Your Full Name*{" "}
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name Here"
                style={formStyles.inputname}
              />
            </label>

            <label style={formStyles.labelemail}>
              Email Address*{" "}
              <input
                type="email"
                name="email"
                placeholder="Enter your E-mail..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={formStyles.inputemail}
              />
            </label>

            <label style={formStyles.labelnumber}>
              Phone Number*{" "}
              <input
                type="number"
                name="phone"
                placeholder="+91 810 230 8108"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={formStyles.inputnumber}
              />
            </label>

            <label style={formStyles.labelpass}>
              Create Password*{" "}
              <input
                type="password"
                name="password"
                placeholder="Enter your password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={formStyles.inputpass}
              />
            </label>

            <label style={formStyles.checkboxlabel2} htmlFor="check">
              I agree to terms & conditions{" "}
              <input
                id="check"
                checked={agree}
                onChange={() => setAgree(!agree)}
                type="checkbox"
                value={"I agree!"}
                style={formStyles.inputCheckbox}
              />
            </label>

            <button
              type="submit"
              style={formStyles.sbmtBtn2}
              className="navConnBtn"
            >
              <div style={{ ...formStyles.btnTxt, marginLeft: "-40px" }}>
                Register Account
              </div>
            </button>
          </form>
          <div style={formStyles.loginRedirect}>
            {`Already a user ?  `} <Link to="/login"> Login here</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
