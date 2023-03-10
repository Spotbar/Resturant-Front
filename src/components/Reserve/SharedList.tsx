import SelectCustomStyles from "../../styles/SelectCustomStyles";
import Select from "react-select";
import { useState } from "react";
import Restaurant from "../../Interface/Restaurant";
import SharedGroup from "../../Interface/SharedGroup";
const SharedList = () => {
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
    <div>
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
          className=" mx-5 border border-1 bg-orange-200 border-amber-600   p-2 rounded-md text-amber-600 text-base"
          onClick={() => {
            if (employee.id != "") {
            
                setGrouplist((grouplist) => [
                    ...grouplist,
                    { id: employee.label, name: employee.label, cost: "" },
                  ]);

                 
            }
 
          }}
        >
          افزودن به لیست مشترک
        </button>
      </div>
      <div>
        {grouplist?.map((item) => (
          <div key={item.id}>
            <div>{item.name}</div>
            <div>{item.cost}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SharedList;
