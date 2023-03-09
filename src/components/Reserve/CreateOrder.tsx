import { useState } from 'react';
import Select from 'react-select';
import FactorNumber from '../../Interface/FactorNumbers';

// const customStyles = {
//   indicatorsContainer: () => ({
//     '.DropDown': {
//       '&__dropdown-indicator': {
//         color: '#ff3d85'
//       }
//     },

//     '.destinationDropDown': {
//       '&__dropdown-indicator': {
//         color: '#3f51b5'
//       }
//     }
//   })
// };

const CreateOrder = () => {

  const FactorNumberList: FactorNumber[] = [
    {
      id: "1",
      label: "123",
    },
    {
      id: "2",
      label: "52431",
    },
    {
      id: "3",
      label: "54548",
    }
  ];

  const [factorNumber, setFactorNumber] = useState<FactorNumber>({ id: "", label: "انتخاب کنید" });
  const [resturant, setResturant] = useState({ id: "", label: "انتخاب کنید" }); 

  const handleFactorSelectionChange = (option: FactorNumber | null) => {
    if (option) {
      setFactorNumber(option)
    }
  };
  

  return (<div className="flex border-2 border-dashed border-amber-600 rounded-md text-lg p-5">
    <div>شماره فاکتور</div>
     <Select
            // styles={customStyles}
            classNamePrefix='DropDown'
            value={factorNumber}
            onChange={handleFactorSelectionChange}
            options={FactorNumberList}
            isRtl={true}
            isSearchable={true}
            // theme={(theme) => ({
            //   ...theme,

            //   colors: {
            //     ...theme.colors,
            //     primary: '#ff3d85',
            //     primary25: '#fecdd3',
            //     primary50: '#fb7185'
            //   },
            // })}
          /> 
    <input
              className=" p-1 border-2 rounded-full outline-amber-500 text-center"
              
            />
  </div>);
};
export default CreateOrder;

