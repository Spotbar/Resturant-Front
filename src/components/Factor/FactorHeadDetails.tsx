import IFactor from "../../Interface/IFactor";
interface FactorHeadDetailsProps {
  factor: IFactor;
  // other props...
}

const FactorHeadDetails: React.FC<FactorHeadDetailsProps> = (props) => {
  const { factor } = props;

  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4 text-base">
      <div className="flex  gap-4 col-span-2 ">
        <div className="w-1/3 text-slate-700">
          <span className="inline-block max-w-full truncate">تاریخ</span>
        </div>
        <div className="w-full text-center text-yellow-900">1401/01/01</div>
      </div>
      <div className="flex   gap-4 col-span-2">
        <div className="w-1/3 text-slate-700">
          <span className="inline-block max-w-full truncate">رستوران</span>
        </div>
        <div className="w-full text-center text-yellow-900">
          {factor.Restaurant.Name}
        </div>
      </div>

      {/* <div className="flex gap-4 col-span-2">
        <div className="w-1/3 text-slate-700 ">
          <span className="inline-block max-w-full truncate">شماره فاکتور</span>
        </div>
        <div className="w-full text-center text-yellow-900">5456</div>
      </div> */}
      <div className="w-full flex gap-4 col-span-2 ">
        <div className="w-1/3 text-slate-700  ">
          <span className="inline-block max-w-full truncate">پیک</span>
        </div>
        <div className="w-full text-center text-yellow-900 ">
          {factor.DeliveryCost}
        </div>
      </div>
      <div className="flex gap-4 col-span-2">
        <div className="w-1/3 text-slate-700 overflow-hidden">
          <span className="inline-block max-w-full truncate">
            مبلغ نهایی فاکتور
          </span>
        </div>
        <div className="w-full text-center text-yellow-900">
          {factor.FactorAmount}
        </div>
      </div>
    </div>
  );
};
export default FactorHeadDetails;
