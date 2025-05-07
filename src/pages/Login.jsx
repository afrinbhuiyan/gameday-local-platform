import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { IoLogoGoogle } from "react-icons/io";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const Login = () => {
  const { loginUser, googleLogin, resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const emailRef = useRef();

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.error("Login error:", error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.error("Google login error:", error.message);
      });
  };

  const handleForgotPassword = () => {
    console.log(emailRef.current.value);
    const email = emailRef.current.value;
    resetPassword(email)
      .then(() => {
        toast.success(`A password reset link has been sent to ${email}. Please check your inbox.`);
      })
      .catch((error) => {
        console.log("Password reset error:", error.message);
        toast.error("Failed to send reset email. Please check the email address and try again.");
      });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-t from-[#76b852] to-[#70b66a] font-roboto">
      <ul className="absolute top-0 left-0 w-full h-full z-0">
        {[...Array(10)].map((_, i) => (
          <li
            key={i}
            className={`absolute list-none block bg-[#ffffff31] bg-opacity-15 rounded-full bottom-[-160px] animate-float ${
              i === 1
                ? "w-20 h-20 left-[20%] animation-delay-2000 animation-duration-17000"
                : i === 2
                ? "left-[25%] animation-delay-4000"
                : i === 3
                ? "w-16 h-16 left-[40%] animation-duration-22000 bg-opacity-25"
                : i === 4
                ? "left-[70%]"
                : i === 5
                ? "w-32 h-32 left-[80%] animation-delay-3000 bg-opacity-20"
                : i === 6
                ? "w-40 h-40 left-[32%] animation-delay-7000"
                : i === 7
                ? "w-5 h-5 left-[55%] animation-delay-15000 animation-duration-40000"
                : i === 8
                ? "w-2.5 h-2.5 left-[25%] animation-delay-2000 animation-duration-40000 bg-opacity-30"
                : i === 9
                ? "w-40 h-40 left-[90%] animation-delay-11000"
                : "w-10 h-10 left-[10%]"
            }`}
          ></li>
        ))}
      </ul>

      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center text-white font-light uppercase tracking-wider mb-8">
          Login to Your Account
        </h1>

        <div className="max-w-md mx-auto bg-[#0505052d] bg-opacity-10 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 bg-transparent border border-white border-opacity-40 text-white placeholder-white font-light focus:outline-none focus:border-opacity-100 transition-all duration-300 bg-gradient-to-b from-transparent from-96% to-white to-4% bg-size-100 bg-no-repeat bg-position-[-800px] peer"
                />
                <span className="text-xs text-white opacity-0 peer-focus:opacity-70 peer-valid:opacity-70 -mt-8 block h-0 overflow-hidden peer-focus:h-auto peer-focus:mt-1 peer-valid:h-auto peer-valid:mt-1 transition-all duration-300 transform">
                  Email
                </span>
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  required
                  className="w-full px-4 py-3 bg-transparent border border-white border-opacity-40 text-white placeholder-white font-light focus:outline-none focus:border-opacity-100 transition-all duration-300 bg-gradient-to-b from-transparent from-96% to-white to-4% bg-size-100 bg-no-repeat bg-position-[-800px] focus:bg-position-0 peer my-6"
                />
                <div
                  onClick={togglePassword}
                  className="absolute right-4 top-[39px] cursor-pointer text-white opacity-70 hover:opacity-100"
                >
                  {showPassword ? (
                    <FaEye size={20} />
                  ) : (
                    <FaEyeSlash size={20} />
                  )}
                </div>
                <span className="text-xs text-white opacity-0 peer-focus:opacity-70 peer-valid:opacity-70 -mt-8 block h-0 overflow-hidden peer-focus:h-auto peer-focus:mt-1 peer-valid:h-auto peer-valid:mt-1 transition-all duration-300 transform peer-focus:-translate-y-6 peer-valid:-translate-y-6">
                  Password
                </span>
                <p className="text-white hover:underline font-medium text-sm mt-5">
                  <a onClick={handleForgotPassword} to="/forgot-password" className="cursor-pointer">
                    Forgot password?
                  </a>
                </p>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#9ce979] hover:bg-[#83b66b] text-white font-medium rounded-md transition-colors duration-500 border border-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 uppercase tracking-wider"
              >
                LOGIN
              </button>
            </form>

            <p className="mt-6 text-center text-white text-sm font-light">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-white font-medium hover:text-green-200 transition-colors duration-500"
              >
                Register Now!
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-6 max-w-sm mx-auto">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#76b852] text-white">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6">
            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center py-3 px-4 rounded-md shadow-sm bg-[#9ce979] hover:bg-[#000000] text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#83b66b] transition-colors duration-300"
            >
              <div className="mr-3 text-2xl">
                <IoLogoGoogle />
              </div>
              <span className="font-medium">Sign in with Google</span>
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-white text-sm font-light">
            © {new Date().getFullYear()} Your App Name. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
