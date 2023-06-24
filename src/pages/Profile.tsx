import { useQuery } from "react-query";
import { getAuthorize } from "../api";
import Main from "../components/Layout/Main";
import { useEffect } from "react";
import IUser from "../Interface/IUser";
import ProfileImage1 from "../assets/images/profile/profile1.png";
import ProfileImage2 from "../assets/images/profile/profile2.png";

const Profile = () => {
  // const { isLoading, isError, data, error } = useQuery("test", getAuthorize, {
  //   onSuccess: (data) => {
  //     console.log("Get data!");
  //     console.log(data);
  //   },
  // });

  // useEffect(() => {
  //   if (data != undefined) {
  //     console.log(data);
  //   }
  // }, [data]);

  const user: IUser = {
    FirstName: "الهام",
    LastName: "شهری",
    Gender: 1,
    // Image: "",
    Image: "https://storage.spotbar.ir/Drivers/Pics/0059267755.jpg",
    Unit: "فناوری اطلاعات",
    Position: "برنامه نویس",
    Tell: "09226785994",
    BankNumber: "6104-3374-6832-2449",
    Address: "دفتر مرکزی",
  };

  return (
    <Main>
      {/* <div className="flex flex-col gap-6 justify-center items-center">
        <button className="bg-emerald-300 p-5 rounded-lg">autorize test</button>
   
        <div>result is</div>
      </div> */}
      <div className="grid grid-cols-2  gap-x-9   text-base container sm:grid-cols-4 ">
        <div className="col-span-2 sm:col-span-4  flex justify-center items-center sm:justify-start ">
          {user?.Image ? (
            <img
              className="rounded-md w-32 h-32 overflow-hidden bg-white  border-2 border-amber-600 shadow-sm   "
              // src={"https://restaurant.spotbar.ir/Users/Pics/" + user?.Image}
              src={"https://storage.spotbar.ir/Drivers/Pics/0059267755.jpg"}
              alt="user image"
            />
          ) : user?.Gender === 1 ? (
            <img
              className="w-32 h-32 "
              src={ProfileImage1}
              alt="user image"
            />
          ) : user?.Gender === 2 ? (
            <img className=" w-32 h-32 " src={ProfileImage2} alt="user image" />
          ) : (
            <div>{/* Show your fallback content here */}</div>
          )}
        </div>

        <div className="mb-2 col-span-2  ">
          <label className="block text-gray-700 font-bold mb-2">نام</label>
          <input
            className="w-full rounded-md border outline-amber-500 py-2 px-3 leading-tight bg-gray-200 text-gray-700"
            type="text"
            value={user?.FirstName + " " + user?.LastName}
            readOnly
          />
        </div>
        <div className="mb-2 col-span-2">
          <label className="block text-gray-700 font-bold mb-2">
            شماره تماس
          </label>
          <input
            className="w-full rounded-md border outline-amber-500 py-2 px-3 leading-tight"
            type="text"
            value={user?.Tell}
            readOnly
          />
        </div>
        <div className="mb-2 col-span-2">
          <label className="block text-gray-700 font-bold mb-2">واحد</label>
          <input
            className="w-full rounded-md border outline-amber-500 py-2 px-3 leading-tight bg-gray-200 text-gray-700"
            type="text"
            value={user?.Unit}
            readOnly
          />
        </div>
        <div className="mb-2 col-span-2">
          <label className="block text-gray-700 font-bold mb-2">
            کارت بانکی
          </label>
          <input
            className="w-full rounded-md border outline-amber-500 py-2 px-3 leading-tight"
            type="text"
            value={user?.BankNumber}
            readOnly
          />
        </div>
        <div className="mb-2 col-span-2">
          <label className="block text-gray-700 font-bold mb-2">سمت</label>
          <input
            className="w-full rounded-md border outline-amber-500 py-2 px-3 leading-tight bg-gray-200 text-gray-700"
            type="text"
            value={user?.Position}
            readOnly
          />
        </div>
        <div className="mb-2 col-span-2"></div>

        <div className="col-span-2 sm:col-span-4 flex justify-end sm:ml-9">
          <button
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto sm:px-14"
            type="submit"
          >
            بروزرسانی
          </button>
        </div>
      </div>
    </Main>
  );
};

export default Profile;
