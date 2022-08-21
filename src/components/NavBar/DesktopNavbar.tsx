import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="  bg-white p-4 shadow-lg sticky top-0 z-10 hidden md:block">
      <div className="container mx-auto 2xl:max-w-screen-2xl flex items-center justify-between">
        <ul className="flex items-center gap-x-4 text-slate-800 text-lg">
          <li className="px-2 py-2 block hover:bg-gray-100 rounded transition-all duration-500 cursor-pointer"
            onClick={() => { navigate("/Home") }}>
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
}

export default Navbar;