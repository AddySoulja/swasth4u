import Header from "../homepage/components/Header";
import Footer from "../homepage/components/Footer";
import LoginForm from "../homepage/components/formComponents/LoginForm";
import Hero2Left from "../homepage/components/hero2-components/Hero2Left";

const Login = () => {
  return (
    <>
      <Header />
      <LoginForm />
      <Hero2Left bottom={true} />
      <Footer layout={"login"} />
    </>
  );
};

export default Login;
