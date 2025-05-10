import React from "react";
import { FaApple, FaGoogle } from "react-icons/fa6";

const LoginOptions = () => {
  return (
    <div className="flex items-center justify-center gap-5 ">
      <div className="login-option hoverEffect">
        <p>Google</p>
        <FaGoogle size={20} />
      </div>
      <div className="login-option hoverEffect">
        <p>Apple</p>
        <FaApple size={20} />
      </div>
    </div>
  );
};

export default LoginOptions;
