import { useMutation, useQueryClient } from "react-query";
import Main from "../../../components/Layout/Main";
import { AddFactor } from "../../../api";
import { useEffect, useState } from "react";
import IFactor from "../../../Interface/IFactor";
import { useNavigate, useParams } from "react-router-dom";
import Factor from "../../../components/Factor/Factor";
import FactorItemsTable from "../../../components/Factor/FactorItemsTable";
import FactorHeadDetails from "../../../components/Factor/FactorHeadDetails";

const OrdersFactor = () => {
  const { id } = useParams<{ id: string }>();
  const [Id, setId] = useState<string>("");
  useEffect(() => {
    if (id) setId(id);
  }, [id]);

  const factor: IFactor = {
    Id: "",
    FactorNumber: "123",
    FactorDate: "",
    DeliveryCost: 20000,
    FactorAmount: 81700,
    IsClosed: false,
    IsDeliveryByCompanyPaid: false,
    Restaurant: { Id: "", Name: "گلی" },
  };

  const orders = [
    { Id: "1", Name: "کوبیده مخصوص زعفرانی", Cost: 180000 },
    { Id: "2", Name: "جوجه کباب", Cost: 170000 },
    { Id: "3", Name: "چلو خورش سبزی", Cost: 140000 },
    { Id: "4", Name: "زرشک پلو با مرغ", Cost: 120000 },
    { Id: "5", Name: "میرزاقاسمی", Cost: 90000 },
    { Id: "6", Name: "سالاد فصل", Cost: 40000 },
    { Id: "7", Name: "نوشابه", Cost: 20000 },
    { Id: "8", Name: "دلستر", Cost: 35000 },
    { Id: "9", Name: "نان ", Cost: 2000 },
  ];

  const [selectedOrdersIds, setSelectedOrdersIds] = useState<string[]>([]);


  const handleSelectionChange = (selectedIds: string[]) => {
    setSelectedOrdersIds(selectedIds);
 
  };

  return (
    <Main>
      <div className="text-amber-600 text-lg mb-6">
        فاکتور {factor.FactorNumber}
      </div>
      <FactorHeadDetails factor={factor} />
      {/* <div className="w-auto h-[1px] m-5  border-2 border-dotted "></div> */}
      <br />
      <FactorItemsTable orders={orders} />
    </Main>
  );
};
export default OrdersFactor;
