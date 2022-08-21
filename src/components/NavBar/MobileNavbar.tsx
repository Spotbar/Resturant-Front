import MenuIcon from "@mui/icons-material/Menu";

interface Props {
  onToggleClick: () => void;
}

const navbar = (props: Props) => {
  return (
    <nav className="bg-white p-4 shadow-lg sticky top-0 z-10 block md:hidden">
      <div className="container mx-auto 2xl:max-w-screen-2xl flex items-center justify-between">
        <ul className="flex items-center gap-x-4 text-slate-800 text-lg">
          <li
            onClick={props.onToggleClick}
            className="px-2 py-2 block hover:bg-gray-100 rounded transition-all duration-500 cursor-pointer"
          >
            <MenuIcon />
          </li>
          <li className="px-2 py-2 block hover:bg-gray-100 rounded transition-all duration-500 cursor-pointer">
            پیشگامان داده افزار آسپادانا
          </li>
          {/* <li className="px-2 py-2 block hover:bg-gray-100 rounded transition-all duration-500 cursor-pointer">
              عنوان
            </li>
            <li className="px-2 py-2 block hover:bg-gray-100 rounded transition-all duration-500 cursor-pointer">
              عنوان
            </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default navbar;
