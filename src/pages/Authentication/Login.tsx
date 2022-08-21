import React from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const navigate = useNavigate();
  return (
    <div className="w-screen h-screen  ">
    <div className=" w-full h-full flex flex-row justify-center items-center relative">
    <div className="w-1/2 h-full bg-zinc-700"></div>
      <div className="w-1/2 h-full bg-amber-400"></div>
      <div className="absolute  w-full h-full flex justify-center items-center  z-1  ">
        <div className="w-full h-full md:w-3/4 md:h-3/4 flex justify-center items-center bg-login  md:border-4 md:border-white md:rounded-2xl shadow-2xl  bg-cover bg-right" >
          {/* loginform */}
          <div className="w-full mx-4 md:w-1/2 bg-white bg-opacity-90  py-8 px-5 flex flex-col justify-center items-center rounded-md gap-3" >
            <div className="font-bold text-center mb-2  text-lg text-slate-700">ورود</div>
            <input
              className="w-full p-1 border-2 rounded-full outline-amber-500 text-center"
              placeholder="نام کاربری"
            />
            <input
              className="w-full p-1 border-2 rounded-full outline-amber-500 text-center"
              placeholder="کلمه عبور"
            />

            <button className="w-full bg-amber-600 p-1 rounded-full text-white text-lg"
              onClick={() => {
                navigate("/Home")
              }}
            >ورود</button>

          </div>
        </div>
      </div>
    </div>




  </div>
  );
};
export default Login;
