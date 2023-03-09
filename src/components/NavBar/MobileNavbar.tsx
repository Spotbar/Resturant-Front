import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  onToggleClick: () => void;
}
const Navbar = (props: Props) => {
  const { t, i18n } = useTranslation();
  const [lan, setLan] = useState("en");

  // useEffect(() => {
  //   i18n.changeLanguage(lan);
  // }, [lan]);

  const options = [
    {
      label: "english",
      value: "en",
    },
    {
      label: "فارسی",
      value: "fa",
    },
  ];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setLan(value);
  };

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
            {t("Title")}
          </li>
          {/* <li className="px-2 py-2 block hover:bg-gray-100 rounded transition-all duration-500 cursor-pointer">
              عنوان
            </li>
            <li className="px-2 py-2 block hover:bg-gray-100 rounded transition-all duration-500 cursor-pointer">
              عنوان
            </li> */}
        </ul>

        <select value={lan} onChange={handleChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
