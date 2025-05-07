import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { IoLogoGoogle } from "react-icons/io";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { registerUser, googleLogin, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photoURL, email, password);

    if (password.length < 6) {
      toast.error("Profile update failed. Please try again.");
      return setError("Password should be at least 6 characters");
    }

    const passwordRegExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

    if (!passwordRegExp.test(password)) {
      toast.error("Profile update failed. Please try again.");
      return setError(
        "Password must include a number, lowercase, and uppercase letter."
      );
    }
    setLoading(true);
    registerUser(email, password)
      .then((result) => {
        const user = result.user;
        setLoading(false);
        console.log(user);
        updateUserProfile({ displayName: name, photoURL: photoURL })
          .then(() => {
            toast.success(`Welcome, ${name}! Your account has been created.`);
            navigate("/");
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
            toast.error("Profile update failed. Please try again.");
            setLoading(false);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        toast.error("Registration failed. Please check your credentials.");
        setLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log("Google login error:", error.message);
      });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-t from-[#76b852] to-[#70b66a] font-roboto">
      <Helmet>
        <title>GameDay | Register</title>
      </Helmet>
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
          Creative SignUp Form
        </h1>

        <div className="max-w-md mx-auto bg-[#0505052d] bg-opacity-10 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <p>
              {error && (
                <div className="text-red-600 mb-5 rounded-lg text-sm">
                  {error}
                </div>
              )}
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Username"
                  required
                  className="w-full px-4 py-3 bg-transparent border border-white border-opacity-40 text-white placeholder-white font-light focus:outline-none focus:border-opacity-100 transition-all duration-300 bg-gradient-to-b from-transparent from-96% to-white to-4% bg-size-100 bg-no-repeat bg-position-[-800px] focus:bg-position-0 peer"
                />
                <span className="text-xs text-white opacity-0 peer-focus:opacity-70 peer-valid:opacity-70 -mt-8 block h-0 overflow-hidden peer-focus:h-auto peer-focus:mt-1 peer-valid:h-auto peer-valid:mt-1 transition-all duration-300 transform">
                  Username
                </span>
              </div>

              <div>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="photoURL"
                  required
                  className="w-full px-4 py-3 bg-transparent border border-white border-opacity-40 text-white placeholder-white font-light focus:outline-none focus:border-opacity-100 transition-all duration-300 bg-gradient-to-b from-transparent from-96% to-white to-4% bg-size-100 bg-no-repeat bg-position-[-800px] focus:bg-position-0 peer my-6"
                />
                <span className="text-xs text-white opacity-0 peer-focus:opacity-70 peer-valid:opacity-70 -mt-8 block h-0 overflow-hidden peer-focus:h-auto peer-focus:mt-1 peer-valid:h-auto peer-valid:mt-1 transition-all duration-300 transform peer-focus:-translate-y-6 peer-valid:-translate-y-6">
                  PhotoURL
                </span>
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 bg-transparent border border-white border-opacity-40 text-white placeholder-white font-light focus:outline-none focus:border-opacity-100 transition-all duration-300 bg-gradient-to-b from-transparent from-96% to-white to-4% bg-size-100 bg-no-repeat bg-position-[-800px] focus:bg-position-0 peer"
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
                  className="w-full px-4 py-3 bg-transparent border border-white border-opacity-40 text-white placeholder-white font-light focus:outline-none focus:border-opacity-100
                   transition-all duration-300 bg-gradient-to-b from-transparent from-96% to-white to-4% bg-size-100 bg-no-repeat bg-position-[-800px] focus:bg-position-0 peer my-6"
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
                <span className="text-xs text-white opacity-0 peer-focus:opacity-70 peer-valid:opacity-70 -mt-8 block h-0 overflow-hidden peer-focus:h-auto peer-focus:mt-1 peer-valid:h-auto       peer-valid:mt-1 transition-all duration-300 transform peer-focus:-translate-y-6 peer-valid:-translate-y-6">
                  Password
                </span>
              </div>

              <div className="flex items-center">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    required
                    className="form-checkbox h-5 w-5 text-green-600 rounded focus:ring-green-500"
                  />
                  <span className="ml-2 text-white text-sm font-light">
                    I Agree To The Terms & Conditions
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#9ce979] hover:bg-[#83b66b] text-white font-medium rounded-md transition-colors duration-500 border border-none
                focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 uppercase tracking-wider"
              >
                {loading ? "Processing..." : "SIGNUP"}
              </button>
            </form>

            <p className="mt-6 text-center text-white text-sm font-light">
              Don't have an Account?{" "}
              <Link
                to="/login"
                className="text-white font-medium hover:text-green-200 transition-colors duration-500"
              >
                Login Now!
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
              className="w-full flex items-center justify-center py-3 px-4 rounded-md shadow-sm bg-[#9ce979] hover:bg-[#000000]
             text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#83b66b] transition-colors duration-300"
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
            © 2018 Colorlib Signup Form. All rights reserved | Design by{" "}
            <a
              href="https://colorlib.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-black transition-colors duration-500"
            >
              Colorlib
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
