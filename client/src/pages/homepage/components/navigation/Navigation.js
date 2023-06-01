import React, { useEffect, useState } from "react";
import { styles } from "../../styles";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/swasthLogo.png";
import arrowDown from "../../assets/arrowDown.png";
import userIcon from "../../assets/user.png";
import arrowDownColor from "../../assets/arrowDownColor.png";
import { useDispatch, useSelector } from "react-redux";
import "./navigation.css";
import { useLogoutMutation } from "../../../../redux/slices/usersApiSlice";
import { logout } from "../../../../redux/slices/authSlice";

const Navigation = () => {
  const [showOptions, setShowOptions] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    setShowOptions(!showOptions);
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    console.log("User: ", userInfo);
  }, [userInfo]);

  return (
    <>
      <div style={styles.navbar}>
        <img src={logo} alt="logo" />
        <nav>
          <ul style={styles.navigation}>
            <Link to="/services" className="navBtnStyle">
              <li style={styles.navBtnService}>
                <p style={styles.navBtnServiceContent}>Services</p>
                <img
                  src={arrowDown}
                  alt="all services"
                  width={16}
                  height={16}
                />
              </li>
            </Link>
            <Link to="/associates" className="navBtnStyle">
              <li style={styles.navBtnAssociates}>
                <p style={styles.navBtnAssociatesContent}>Associates</p>
              </li>
            </Link>
            <Link to="/careers" className="navBtnStyle">
              <li style={styles.navBtnVacancy}>
                <p style={styles.navBtnVacancyContent}>Vacancy</p>
              </li>
            </Link>
          </ul>
        </nav>

        <div style={styles.register}>
          {userInfo === null ? (
            <>
              {" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                <div
                  style={styles.navConnLoginBtnLayout}
                  className="navConnBtn"
                >
                  <div style={styles.navConnLoginBtn}>
                    <span style={styles.navConnLoginBtnContent}>Login</span>
                    <img
                      src={arrowDownColor}
                      alt="login options"
                      width={16}
                      height={16}
                    />
                  </div>
                </div>
              </Link>
              <Link to="/api/users" style={{ textDecoration: "none" }}>
                <div style={styles.navConnAssociateBtn} className="navConnBtn">
                  <span style={styles.navConnAssociateBtnContent}>
                    Become an Associate
                  </span>
                </div>
              </Link>
            </>
          ) : (
            <>
              <button
                type="button"
                style={{
                  ...styles.navConnLoginBtnLayout,
                  width: "auto",
                  paddingLeft: "2px",
                  paddingRight: "2px",
                  height: "44.6px",
                  marginTop: "-5px",
                  marginLeft: "110px",
                }}
                className="navConnBtn"
                onClick={() => setShowOptions(!showOptions)}
              >
                <div style={styles.navConnLoginBtn}>
                  <span
                    style={{
                      ...styles.navConnLoginBtnContent,
                      width: "auto",
                      height: "auto",
                      fontSize: "15px",
                    }}
                  >
                    {userInfo.name}
                  </span>
                  <img
                    src={userIcon}
                    alt="current user"
                    width={16}
                    height={20}
                  />
                </div>
              </button>
              {showOptions && (
                <div
                  style={{
                    width: "auto",
                    height: "80px",
                    position: "relative",
                    marginTop: "45px",
                    marginLeft: "-148.25px",
                  }}
                >
                  <div style={styles.currUserOptionsLayout}>
                    <div
                      style={styles.currUserOptions}
                      onClick={() => setShowOptions(!showOptions)}
                    >
                      <span style={styles.currUserOptionsTxt}>Profile</span>
                    </div>
                    <div style={styles.currUserOptions} onClick={logoutHandler}>
                      <span style={styles.currUserOptionsTxt}>Log out</span>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navigation;
