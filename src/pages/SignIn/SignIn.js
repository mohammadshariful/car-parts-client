import React, { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SignInImg from "../../assets/login/signin.jpg";
import auth from "../../Firebase/Firebase.init";
import useToken from "../../hooks/useToken";
import ForgetPassword from "../ForgetPassword/ForgetPassword";
import Loading from "../Shared/Loading/Loading";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import TitleChange from "../Shared/TitleChange/TitleChange";
const SignIn = () => {
  const [reset, setReset] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [token] = useToken(user);
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, navigate, from]);
  if (loading) {
    return <Loading />;
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="hero min-h-screen bg-base-100">
      <TitleChange title="SignIn" />
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <img className="md:max-w-md" src={SignInImg} alt="" />
        </div>
        <div className="lg:w-96">
          <div className="card w-full shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="mx-auto">
                <FaUser className="rounded-full border-2 text-center text-3xl" />
              </div>
              <h2 className="text-center text-2xl font-bold">Sing In</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered w-full max-w-xs"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is Required",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Provide a valid Email",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Your Password"
                    className="input input-bordered w-full max-w-xs"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is Required",
                      },
                      minLength: {
                        value: 6,
                        message: "Password must be 6 characters or longer",
                      },
                    })}
                  />
                  <label className="label">
                    {errors?.password?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                    {errors?.password?.type === "minLength" && (
                      <span className="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                </div>

                {error && (
                  <p className="mb-2 text-error text-center">
                    {error?.message}
                  </p>
                )}
                <input
                  className="btn btn-primary capitalize font-normal w-full max-w-xs text-white"
                  type="submit"
                  value="Sign In"
                />
              </form>
              <label
                onClick={() => setReset(true)}
                htmlFor="forgetPasswordModal"
                className="modal-button text-right text-primary cursor-pointer"
              >
                Forget your password?
              </label>
              <SocialLogin />
              <p>
                Don't have an account?
                <Link className="text-primary" to="/signup">
                  Create a New Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      {reset && <ForgetPassword setReset={setReset} />}
    </div>
  );
};

export default SignIn;
