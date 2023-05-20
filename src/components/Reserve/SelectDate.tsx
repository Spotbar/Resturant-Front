import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const SelectDate = () => {
  return (
    <div className="flex flex-row justify-around items-center  text-lg p-5">
      <div className="">
        <span>تاریخ: </span>25 اسفند 1401
      </div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker />
      </LocalizationProvider>
    </div>
  );
};
export default SelectDate;
