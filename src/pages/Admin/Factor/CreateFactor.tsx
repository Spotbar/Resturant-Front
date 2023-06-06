import { useMutation, useQueryClient } from "react-query";
import Main from "../../../components/Layout/Main";
import { AddFactor } from "../../../api";
import IFactor from "../../../Interface/IFactor";
import { useNavigate } from "react-router-dom";
import Factor from "../../../components/Factor/Factor";

const CreateFactor = () => {
  const initialValues: IFactor = {
    Id: "",
    FactorNumber: "",
    FactorDate: "",
    DeliveryCost: 0,
    FactorAmount: 0,
    IsClosed: false,
    IsDeliveryByCompanyPaid: false,
    Restaurant: { Id: "", Name: "" },
  };
  const navigate = useNavigate();
  const client = useQueryClient();
  const addFactorMutation = useMutation(async (factor: IFactor) => {
    const data = await AddFactor(factor);
    if (data && data.data) {
      client.invalidateQueries("factors", { refetchInactive: true });
      navigate("/Factors");
    }
  });

  const handleFormSubmit = (factor: IFactor) => {
    console.log(factor);
    addFactorMutation.mutate(factor);
  };

  return (
    <Main>
      <Factor
        factorData={initialValues}
        btn={"ثبت"}
        title={"ثبت فاکتور جدید"}
        handleSubmit={handleFormSubmit}
      />
    </Main>
  );
};
export default CreateFactor;
