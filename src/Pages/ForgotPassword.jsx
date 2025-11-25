import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import Loading from "./Loading";

const ForgotPassword = () => {
  const { forgotPass, emailValue } = useContext(AuthContext);
  //   console.log(emailValue);
  const emailRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (emailValue && emailRef.current) {
      emailRef.current.value = emailValue;
    }
  }, [emailValue]);

  const handleReset = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const email = emailRef.current.value;
    if (!email) {
      toast.error("Please enter your email!");
      return;
    }

    forgotPass(email)
      .then(() => {
        toast.success("Password reset email sent! Redirecting to Gmail...");
        setTimeout(() => {
          setLoading(false);
          window.open("https://mail.google.com/", "_blank");
        }, 1500);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-5">
        <h1 className="text-2xl font-bold text-center text-[#F7A703] mb-4">
          Reset Your Password
        </h1>
        <form onSubmit={handleReset} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your registered email"
            className="input input-bordered w-full"
            ref={emailRef}
            required
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="btn bg-[#303082] hover:bg-[#F7A703] text-white w-full"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
