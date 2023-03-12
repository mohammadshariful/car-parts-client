import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Google from "../../../assets/icons/google.png";
import auth from "../../../Firebase/Firebase.init";
import useToken from "../../../hooks/useToken";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
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
  return (
    <div className="text-center">
      {error && <p className="text-error">{error.message}</p>}
      <div className="divider">OR</div>
      <div className="bg-primary text-white rounded-lg py-2">
        <button
          onClick={() => signInWithGoogle()}
          className="flex items-center mx-auto "
        >
          <img src={Google} alt="google" />
          <span className="mx-3">Continue with Google</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
