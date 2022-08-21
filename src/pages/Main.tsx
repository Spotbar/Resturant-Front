import { useState } from "react";
import DesktopNavbar from "../components/NavBar/DesktopNavbar";
import MobileNavbar from "../components/NavBar/MobileNavbar";
import Sidebar from "../components/Sidebar";

interface Props {
  children: React.ReactNode;
}

const Main = (props: Props) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className="w-full h-full bg-slate-200 ">
      {/*desktop navbar */}
      <DesktopNavbar />
      {/*mobile navbar */}
      <MobileNavbar
        onToggleClick={() => {
          setOpenMenu(!openMenu);
          console.log(openMenu);
        }}
      />
      {/*mobile menue */}
      <div
        className={`m-1 bg-white rounded-lg ${
          openMenu ? "block" : "hidden"
        } md:hidden`}
      >
        <div className="p-5">
          <Sidebar />
        </div>
      </div>

      {/* content */}
      <div className="bg-slate-200 grid grid-cols-12 grid-rows-[55px_minmax(calc(100vh-143px),_1fr)] md:gap-1 pt-2  ">
        {/* grid-rows-[55px_minmax(100vh,_1fr)] */}

        {/*desktop sidebar */}
        <div className="hidden md:block  col-span-4 lg:col-span-3 row-span-2 mr-1 ">
          <Sidebar />
        </div>

        {/* sort section */}
        <div className="hidden md:block col-span-8 lg:col-span-9 pb-1 px-1 ">
          <div className=" w-full h-full bg-white rounded-lg ">sort</div>
        </div>

        {/* product */}
        <div className="col-span-12 md:col-span-8 lg:col-span-9 text-2xl px-1">
          {/* <div className="w-full ">
                        تیلویند
                    </div> */}
          <div className="w-full  bg-white rounded-lg">
            <div className="p-5 overflow-auto">{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
