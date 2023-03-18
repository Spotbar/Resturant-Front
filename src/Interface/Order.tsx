import FactorNumber from "./FactorNumbers";
import Restaurant from "./Restaurant";
import SharedGroup from "./SharedGroup";

interface Order {
  factorNumber: FactorNumber;
  restaurant: Restaurant;
  ordertitle: string;
  cost: number;
  isShared: boolean;
  sharedList: SharedGroup[];
}
export default Order;
