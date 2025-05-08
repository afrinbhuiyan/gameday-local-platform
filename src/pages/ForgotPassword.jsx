import React, { useContext, useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../provider/AuthProvider";

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useContext(AuthContext);
  const emailRef = useRef();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location.state?.email) {
      emailRef.current.value = location.state.email;
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    const emailValue = emailRef.current.value.trim();
    
    if (!emailValue) {
      toast.error("Please enter your email address");
      return;
    }

    setLoading(true);
    try {
      await resetPassword(emailValue);
      toast.success(
        `Password reset link sent to ${emailValue}. Check your inbox.`,
        { autoClose: 5000 }
      );
      setTimeout(() => {
        window.location.href = "https://mail.google.com";
      }, 2000);
    } catch (error) {
      console.error("Password reset error:", error);
      toast.error(
        error.message.includes("user-not-found")
          ? "No account found with this email address"
          : "Failed to send reset email. Please try again.",
        { autoClose: 5000 }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-t from-[#76b852] to-[#70b66a]">
      <Helmet>
        <title>GameDay | Forgot Password</title>
        <meta name="description" content="Reset your GameDay account password" />
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

      <div className="max-w-md w-full bg-[#0505052d] bg-opacity-10 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          Reset Your Password
        </h1>

        <form onSubmit={handleForgotPassword} className="space-y-5">
          <div>
            <input
              type="email"
              name="email"
              ref={emailRef}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full px-4 py-3 bg-transparent border border-white border-opacity-40 text-white placeholder-white font-light 
              focus:outline-none focus:border-opacity-100 transition-all duration-300 peer"
            />
            <span className="text-xs text-white opacity-0 peer-focus:opacity-70 peer-valid:opacity-70 block h-0 overflow-hidden 
            peer-focus:h-auto peer-focus:mt-1 peer-valid:h-auto transition-all duration-300 transform">
              Email
            </span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-[#9ce979] hover:bg-[#83b66b] text-white font-medium rounded-md 
            transition-colors duration-500 disabled:opacity-70 flex items-center justify-center"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : "Reset Password"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/login")}
            className="text-white hover:text-green-200 transition-colors duration-500 text-sm"
          >
            Remember your password? <span className="font-medium">Login here</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;