import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import UserLogin from "../../Interface/UserLogin";
import { useMutation } from "react-query";
import { login } from "../../api";

const Login: React.FC = () => {
  const navigate = useNavigate();

  // const initialValues: UserLogin = { username: "", password: "" };

  // Minimum 8 characters at least 1 Uppercase Alphabet, 1 Lowercase Alphabet, 1 Number and 1 Special Character:
  //  "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$"

  const [user, setUser] = useState<UserLogin>({
    username: "",
    password: "",
  });

  const loginMutation = useMutation(() => {
    return login(user).then((data) => {;
      console.log(data);
      navigate("/Home");
    });
  });

  

  return (
    <div className="w-screen h-screen  ">
      <div className=" w-full h-full flex flex-row justify-center items-center relative">
        <div className="w-1/2 h-full bg-zinc-700"></div>
        <div className="w-1/2 h-full bg-amber-400"></div>
        <div className="absolute  w-full h-full flex justify-center items-center  z-1  ">
          <div className="w-full h-full md:w-3/4 md:h-3/4 flex justify-center items-center bg-login  md:border-4 md:border-white md:rounded-2xl shadow-2xl  bg-cover bg-right">
            {/* loginform */}
            <div className="w-full mx-4 md:w-1/2 bg-white bg-opacity-90  py-8 px-5 flex flex-col justify-center items-center rounded-md gap-3">
              <div className="font-bold text-center mb-2  text-lg text-slate-700">
                اسپادانا
              </div>
              <input
                className="w-full p-1 border-2 rounded-full outline-amber-500 text-center"
                placeholder="نام کاربری"
                value={user.username}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setUser({ ...user, username: event.target.value });
                }}
              />
              <input
                className="w-full p-1 border-2 rounded-full outline-amber-500 text-center"
                placeholder="کلمه عبور"
                value={user.password}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setUser({ ...user, password: event.target.value });
                }}
              />

              <button
                className="w-full bg-amber-600 p-1 rounded-full text-white text-lg"
                onClick={() => {
                  console.log(user);
                  // navigate("/Home");
                  loginMutation.mutate();

                }}
              >
                ورود
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
