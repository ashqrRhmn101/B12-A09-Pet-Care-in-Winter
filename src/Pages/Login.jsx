import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import Loading from "./Loading";

const Login = () => {
  const { signInUser, googleSignIn, setEmailValue } = use(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const [error, setError] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email);
    // // Reset
    setError("");
    setLoading(true);

    // Sign In
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Login Successful!");
        setTimeout(() => {
          setLoading(false);
          navigate(`${location.state ? location.state : "/"}`);
        }, 1500);
        // navigate(`${location.state ? location.state : "/"}`);
        e.target.reset();
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  // email value get
  const handleEmail = (e) => {
    e.preventDefault();
    const email = emailRef.current?.value || "";
    // console.log(email);
    setEmailValue(email);
  };

  // Google with SignIn
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //   Eye Show Password
  const handleTogglePass = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  // //   Forgot Password
  // const handleForgotPass = () => {
  //   const email = emailRef.current.value;

  //   forgotPass(email)
  //     .then(() => {
  //       toast.promise(forgotPass(email), {
  //         loading: "Sending reset email...",
  //         success: <b>Please check your email</b>,
  //         error: <b>Failed to send email.</b>,
  //       });
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     });
  // };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex  justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-center text-2xl p-5 font-bold text-[#F7A703]">
          Login your account
        </h1>
        <form onSubmit={handleSignIn} className="card-body">
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              ref={emailRef}
              placeholder="Email"
              required
            />
            {/* Password */}
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="input"
                name="password"
                placeholder="Password"
                required
              />

              <button
                onClick={handleTogglePass}
                className="absolute right-5 top-3"
              >
                {showPassword ? <FaEye size={15} /> : <FaEyeSlash size={15} />}
              </button>
            </div>

            <div onClick={handleEmail}>
              <Link
                to="/forgot-password"
                className="link link-hover font-semibold py-2"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="btn bg-[#303082] hover:bg-[#F7A703] text-white mt-4"
            >
              Login
            </button>
          </fieldset>
          {error && <p className="text-red-500">{error}</p>}

          <div>
            {/* Google */}
            <button
              onClick={handleGoogleSignIn}
              className="btn bg-white text-black border-[#e5e5e5] w-full"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </div>

          <Link className="text-center pt-2" to="/register">
            Dont’t Have An Account ?{" "}
            <span className="text-red-400">Register</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
