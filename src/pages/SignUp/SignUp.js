import React, { useEffect } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SignUpImg from "../../assets/login/signup.jpg";
import auth from "../../Firebase/Firebase.init";
import useToken from "../../hooks/useToken";
import Loading from "../Shared/Loading/Loading";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import TitleChange from "../Shared/TitleChange/TitleChange";
const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const [token] = useToken(user);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  if (loading || updating) {
    return <Loading />;
  }
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };
  return (
    <div className="hero min-h-screen bg-base-100">
      <TitleChange title="SignUp" />
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <img className="md:max-w-md" src={SignUpImg} alt="" />
        </div>
        <div className="lg:w-96">
          <div className="card w-full shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="mx-auto">
                <FaUser className="rounded-full border-2 text-center text-3xl" />
              </div>
              <h2 className="text-center text-2xl font-bold">Sing Up</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full max-w-xs"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>
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
                {(error || updateError) && (
                  <p className="mb-2 text-error text-center">
                    {error?.message} {updateError?.message}
                  </p>
                )}
                <input
                  className="btn btn-primary capitalize font-normal w-full max-w-xs text-white"
                  type="submit"
                  value="Create Account"
                />
              </form>
              <SocialLogin />
              <p>
                Already have an account?
                <Link className="text-primary" to="/signin">
                  Please SignIn
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
