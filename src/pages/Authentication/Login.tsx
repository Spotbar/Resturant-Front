import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import UserLogin from "../../Interface/UserLogin";
import { useMutation } from "react-query";
import { login } from "../../api";
import validationHelpers from "../../utils/helpers/validation.helpers";

const Login: React.FC = () => {
  useEffect(() => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("refresh");
  }, []);
  const navigate = useNavigate();
  const initialValues: UserLogin = { username: "", password: "" };
  const onSubmit = (user: UserLogin) => {
    loginMutation.mutate(user);
    console.log(user);
    console.log("national Id :" + validationHelpers.nationalId(user.username));
    // navigate("/Home");
  };

  // function nationalIdYupCheck(this: any, message: string)  {
  //   return this.test("isValidId", message, (value: string) => {
  //     const { path, createError } = this;

  //     if (!value) {
  //       return createError({ path, message: message ?? "* فیلد اجباری" });
  //     } else {
  //       if (!validationHelpers.nationalId(value)) {
  //         return createError({
  //           path,
  //           message: message ?? "کد ملی نامعتبر است!",
  //         });
  //       }
  //     }
  //     return true;
  //   });
  // }

  // const validationSchema = Yup.object().shape(
  //  username:Yup.string()
  // )
  Yup.addMethod(Yup.string, "nationalIdYupCheck", function (message) {
    return this.test(
      "nationalIdYupCheck",
      "کد ملی نامعتبر است",
      function (value) {
        // your custom validation logic here
        const { path, createError } = this;

        if (!value) {
          return createError({ path, message: message ?? "* فیلد اجباری" });
        } else {
          if (!validationHelpers.nationalId(value)) {
            return createError({
              path,
              message: message ?? "کد ملی نامعتبر است!",
            });
          }
        }

        return true;
      }
    );
  });

  // Yup.addMethod(Yup.mixed, "nationalIdYupCheck", nationalIdYupCheck);
  const validationSchema = Yup.object().shape({
    // username: Yup.nationalIdYupCheck(),
    password: Yup.string().required("کلمه عبور را وارد کنید"),
    // .matches(
    //   /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    //   "کلمه عبور باید حداقل 8 کارکتر و حداقل یک حرف و عدد باشد"
    //   // "Must contain 8 characters, at least one letter and one number"
    // ),
  });
  // Minimum 8 characters at least 1 Uppercase Alphabet, 1 Lowercase Alphabet, 1 Number and 1 Special Character:
  //  "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$"
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  const loginMutation = useMutation((userData: UserLogin) => {
    return login(userData).then((data) => {
      if (
        data &&
        data.data &&
        data.data.access_Token &&
        data.data.refresh_Token
      ) {
        sessionStorage.setItem("token", data.data.access_Token);
        sessionStorage.setItem("refresh", data.data.refresh_Token);
        console.log(data.data.access_Token);
        console.log(sessionStorage.getItem("token"));

        navigate("/Home");
      }
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
            <form
              onSubmit={formik.handleSubmit}
              className="w-full mx-4 md:w-1/2 bg-white bg-opacity-60  py-8 px-5 flex flex-col justify-center items-center rounded-md gap-3"
            >
              <div className="font-bold text-center mb-2  text-lg text-slate-700">
                سامانه رزرواسیون پیشگامان
              </div>
              <input
                className="w-full p-1 border-2 rounded-full outline-amber-500 text-center"
                placeholder="نام کاربری"
                {...formik.getFieldProps("username")}
                name="username"
              />

              <input
                className="w-full p-1 border-2 rounded-full outline-amber-500 text-center"
                placeholder="کلمه عبور"
                {...formik.getFieldProps("password")}
                name="password"
              />

              <button
                type="submit"
                className="w-full bg-amber-600 p-1 rounded-full text-white text-lg"
              >
                ورود
              </button>
              {formik.errors.password && formik.touched.password && (
                <div className="w-full text-red-500 text-sm text-right">
                  {formik.errors.password}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
