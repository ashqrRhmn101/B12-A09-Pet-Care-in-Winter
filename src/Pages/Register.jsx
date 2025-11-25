import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import Loading from "./Loading";

const Register = () => {
  const { createUser, setUser, userPhotoURL, googleSignIn } = use(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name, photo, email, password);

    // // Reset
    setError("");
    setLoading(true);

    // Password "regEx" ..............

    const passwordPattern = /^.{6,}$/;
    const passwordAllPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{7,}$/;

    if (!passwordPattern.test(password)) {
      console.log("password don't match");
      setError("Password must be 6 character");
      return;
    }

    if (!passwordAllPattern.test(password)) {
      setError(
        "Password must be over 6 characters, contain upper & lower case letters, and at least one special character!"
      );
      return;
    }

    //  Create User
    createUser(email, password)
      .then((result) => {
        userPhotoURL({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...result.user, displayName: name, photoURL: photo });
            toast.success("Registration Successful!");
            setTimeout(() => {
              setLoading(false);
              navigate(`${location.state ? location.state : "/"}`);
            }, 1500);
            e.target.reset();
          })
          .catch((error) => {
            // console.log(error.message);
            setError(error.message);
            setLoading(false);
          });
      })
      .catch((error) => {
        // console.log(error.message);
        setError(error.message);
        setLoading(false);
      });
  };

  // Google with SignIn
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        toast.success("Registration Successful!");
        setTimeout(
          () => navigate(`${location.state ? location.state : "/"}`),
          1500
        );
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

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex  justify-center min-h-screen items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-center p-5 font-bold text-2xl text-[#303082]">
            Register your account
          </h1>
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                name="name"
                placeholder="Your Name"
                required
              />

              {/* Photo URL */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                className="input"
                name="photo"
                placeholder="Your Photo Url"
                required
              />

              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                name="email"
                placeholder="Email"
                required
              />

              {/* Password */}
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "type" : "password"}
                  className="input"
                  name="password"
                  placeholder="Password"
                  required
                />

                <button
                  onClick={handleTogglePass}
                  className="absolute right-5 top-3"
                >
                  {showPassword ? (
                    <FaEye size={15} />
                  ) : (
                    <FaEyeSlash size={15} />
                  )}
                </button>
              </div>

              <button
                type="submit"
                className="btn bg-[#303082] hover:bg-[#F7A703] text-white mt-4"
              >
                Register
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

            <Link className="text-center pt-2" to="/login">
              Dont’t Have An Account ?{" "}
              <span className="text-red-400">Login</span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
