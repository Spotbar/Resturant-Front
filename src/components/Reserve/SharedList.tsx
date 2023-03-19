import SelectCustomStyles from "../../styles/SelectCustomStyles";
import Select from "react-select";
import { useState } from "react";
import Restaurant from "../../Interface/Restaurant";
import SharedGroup from "../../Interface/SharedGroup";
const SharedList = (props:any) => {



  const [grouplist, setGrouplist] = useState<SharedGroup[]>([]);
  const employeeList: Restaurant[] = [
    {
      id: "1",
      label: "الهام شهری",
    },
    {
      id: "2",
      label: "حسن الفت",
    },
    {
      id: "3",
      label: "معین پولکی",
    },
    {
      id: "4",
      label: "امیر کاکی",
    },
    {
      id: "5",
      label: "مختار قنبری",
    },
    {
      id: "6",
      label: "روزبه مرادی",
    },
    {
      id: "7",
      label: "امیر حاتمی",
    },
    {
      id: "8",
      label: "اشکان شیری",
    },
  ];
  const [employee, setEmployee] = useState<Restaurant>({
    id: "",
    label: "انتخاب کنید",
  });

  const handleEmployeeSelectionChange = (option: Restaurant | null) => {
    if (option) {
      setEmployee(option);
    }
  };
  return (
    <div className="w-full ">
      <div className="flex flex-row">
        <Select
          className="w-1/2"
          styles={SelectCustomStyles}
          classNamePrefix="restaurantDropDown"
          value={employee}
          onChange={handleEmployeeSelectionChange}
          options={employeeList}
          isRtl={true}
          maxMenuHeight={250}
          isSearchable={true}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary: "#d97706",
              primary25: "#d97706",
              primary50: "#d97706",
            },
          })}
        />
        <button
          className=" block whitespace-nowrap mx-5 border border-1 bg-orange-200 border-amber-600   p-2 rounded-md text-amber-600 text-sm sm:text-base"
          onClick={() => {
            if (employee.id != "") {
              var ides = grouplist.map((item) => item.name);
              console.log("ides" + ides);
              var isDuplicate = ides.includes(employee.label);
              console.log(isDuplicate);

              if (!isDuplicate) {
                setGrouplist((grouplist) => [
                  ...grouplist,
                  { id: employee.label, name: employee.label, cost: "50000" },
                ]);
                props.SharedGroupList(grouplist)
              }
            }
          }}
        >
          افزودن مشترک
        </button>
      </div>
      <div
        className={
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-2 "
        }
      >
        {grouplist?.map((item) => (
          <div
            key={item.id}
            className={
              "w-full flex flex-col justify-center items-center p-2 shadow-lg border border-1 border-amber-600 rounded-md "
            }
          >
            <div className="text-center  ">{item.name}</div>
            <div className="w-full">
            <input className="text-center w-full "
            placeholder="قیمت (ریال)"
             defaultValue={item.cost} />
            </div>
           
            {/* <div>{item.cost}</div> */}
          </div>
        ))}
      </div>
    </div>
  );
};
export default SharedList;
