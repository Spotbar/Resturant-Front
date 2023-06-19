import { ISelectFactor } from "../../Interface/IFactor";
import Select from "react-select";
import SelectCustomStyles from "../../styles/SelectCustomStyles";
import { useEffect, useState } from "react";
import ISelect from "../../Interface/ISelect";

const FactorHeadSelect = () => {
  const factorList: ISelectFactor[] = [
    {
      Id: "123",
      FactorNumber: "123",
      DeliveryCost: 20000,
      FactorAmount: 817000,
      IsClosed: false,
      IsDeliveryByCompanyPaid: false,
    },
    {
      Id: "456",
      FactorNumber: "456",
      DeliveryCost: 10000,
      FactorAmount: 510000,
      IsClosed: false,
      IsDeliveryByCompanyPaid: false,
    },
  ];

  const [factorSelectionList, setFactorSelectionList] = useState<ISelect[]>();
  const [selectedfactorId, setSelectedfactorId] = useState<ISelect>();
  const [selectedfactor, setSelectedfactor] = useState<ISelectFactor>();

  useEffect(() => {
    if (factorList) {
      const mappedList = factorList.map((factor) => ({
        id: factor.Id,
        label: factor.FactorNumber,
      }));
      setFactorSelectionList(mappedList);
    }
  }, [factorList]);

  const handleFactorSelectionChange = (option: ISelect | null) => {
    if (option) {
      // formik.setFieldValue("Restaurant", {
      //   Id: option.id,
      //   Name: option.label,
      // });

      setSelectedfactorId(option);
      setSelectedfactor(factorList.find((factor) => factor.Id == option.id));
    }
  };

  return (
    <div className="grid grid-cols-2 gap-5 md:grid-cols-4 text-base">
      <div className="flex gap-4 col-span-2 mb-2">
        <div className="w-1/3 text-slate-700 ">
          <span className="inline-block max-w-full truncate">شماره فاکتور</span>
        </div>
        <div className="w-full flex flex-row justify-center ">
          {" "}
          <div className="w-3/4 mx-2 text-center ">
            <Select
              styles={SelectCustomStyles}
              classNamePrefix="restaurantDropDown"
              // value={formik.getFieldProps("Restaurant.Name").value}
              value={selectedfactorId}
              name="Restaurant.Id"
              onChange={handleFactorSelectionChange}
              options={factorSelectionList}
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
          </div>
        </div>
      </div>

      <div className="w-full flex gap-4 col-span-2 "></div>
      <div className="flex  gap-4 col-span-2 ">
        <div className="w-1/3 text-slate-700">
          <span className="inline-block max-w-full truncate">تاریخ</span>
        </div>
        <div className="w-full text-center text-yellow-900">1401/01/01</div>
      </div>

      <div className="flex gap-4 col-span-2">
        <div className="w-1/3 text-slate-700">
          <span className="inline-block max-w-full truncate">رستوران</span>
        </div>
        <div className="w-full text-center text-yellow-900">گلی</div>
      </div>

      <div className="w-full flex gap-4 col-span-2 ">
        <div className="w-1/3 text-slate-700  ">
          <span className="inline-block max-w-full truncate">پیک</span>
        </div>
        <div className="w-full text-center text-yellow-900 ">
          {selectedfactor?.DeliveryCost}
        </div>
      </div>

      <div className="flex gap-4 col-span-2">
        <div className="w-1/3 text-slate-700 overflow-hidden">
          <span className="inline-block max-w-full truncate">
            مبلغ نهایی فاکتور
          </span>
        </div>
        <div className="w-full text-center text-yellow-900">
          {selectedfactor?.FactorAmount}
        </div>
      </div>
    </div>
  );
};
export default FactorHeadSelect;
