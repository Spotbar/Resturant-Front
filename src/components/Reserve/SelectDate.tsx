import JalaliDatepicker from "../DatePickerX/JalaliDatepicker";
const SelectDate = () => {
  return (
    <div className="flex flex-row justify-around items-center  text-lg p-5">
      <div className="">
        <span>تاریخ: </span>25 اسفند 1401
      </div>
      <JalaliDatepicker />
    </div>
  );
};
export default SelectDate;
