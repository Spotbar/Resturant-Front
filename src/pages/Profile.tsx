import { useQuery } from "react-query";
import { getAuthorize } from "../api";
import Main from "../components/Layout/Main";
import { useEffect } from "react";

const Profile = () => {



  const { isLoading, isError, data, error } = useQuery("test", getAuthorize ,
  { onSuccess: (data) => { console.log("Get data!"); console.log(data);} }
);

useEffect(() => {
  if (data != undefined) {
    console.log(data);
  }

}, [data])
  
  return (
    <Main>
      <div className="flex flex-col gap-6 justify-center items-center">
        <button className="bg-emerald-300 p-5 rounded-lg">autorize test</button>
   
        <div>result is</div>
      </div>
    </Main>
  );
};

export default Profile;
