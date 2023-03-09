import CreateOrder from "../../components/Reserve/CreateOrder";
import ReserveList from "../../components/Reserve/ReserveList";
import SelectDate from "../../components/Reserve/SelectDate";
import Main from "../Main";

const Reserve = () => {
  return (
    <Main>
      <div>
        <SelectDate />
        <CreateOrder />
        <ReserveList />
      </div>
    </Main>
  );
};

export default Reserve;
