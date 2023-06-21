import { useMutation, useQuery, useQueryClient } from "react-query";
import Main from "../../../components/Layout/Main";
import Restaurant from "../../../components/Restaurant/Restaurant";
import { editFactorById, getFactorById } from "../../../api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Factor from "../../../components/Factor/Factor";
import IFactor from "../../../Interface/IFactor";

const EditFactor = () => {
  const navigate = useNavigate();
  const client = useQueryClient();
  const { id } = useParams<{ id: string }>();
  const [Id, setId] = useState<string>("");
  const [factor, setFactor] = useState<IFactor>({
    Id: "",
    FactorNumber: "",
    FactorDate: "",
    DeliveryCost: 0,
    FactorAmount: 0,
    IsClosed: false,
    IsDeliveryByCompanyPaid: false,
    Restaurant: { Id: "", Name: "" },
  });

  useEffect(() => {
    if (id) setId(id);
  }, [id]);

  const { isLoading, error, data } = useQuery(
    ["factorById", Id],
    () => getFactorById(Id),
    {
      enabled: !!Id,

      onSuccess(data) {
        console.log(data);
        if (data) {
          setFactor(data);
        }
      },
      staleTime: 0, // Disable caching
    }
  );

  // const queryKey = ['resource', "870a65c5-957a-4d72-15d4-08db5e8bf624"]; // Include id in query key
  // const { isLoading, error, data } = useQuery(queryKey, async () => {
  //   const factor = await getFactorById("870a65c5-957a-4d72-15d4-08db5e8bf624");
  //   return factor;
  // }, {
  //   onSuccess(data) {
  //     console.log(data);
  //     setFactor(data)
  //   },
  // });

  // const queryKey = ['EditFactor', Id];

  // const { isLoading, error, data } = useQuery(queryKey, async () => {
  //   const factor = await getFactorByIdService(Id);
  //   return factor;
  // }, {
  //   onSuccess: (data) => {
  //     console.log(data);
  //     setFactor(data);
  //   },
  //   staleTime: 0, // Disable caching
  // });

  useEffect(() => {
    console.log(factor);
  }, [factor]);

  const editRestaurantMutation = useMutation(async (factor: IFactor) => {
    console.log("");
    const data = await editFactorById(factor);
    if (data && data.data) {
      client.invalidateQueries("factors", { refetchInactive: true });
      navigate("/Factors");
    }
  });

  const handleFormSubmit = (factorData: IFactor) => {
    console.log(factorData);
    editRestaurantMutation.mutate(factorData);
  };


  if (isLoading) {
    return (
      <Main>
        {" "}
        <Factor
          factorData={factor}
          btn={"ویرایش"}
          title={"ویرایش رستوران"}
          handleSubmit={() => {}}
        />
      </Main>
    );
  }

  if (error) {
    return <div>Error:</div>;
  }

  if (!data) {
    return null;
  }



  return (
    <Main>
      <Factor
        factorData={factor}
        btn={"ویرایش"}
        title={"ویرایش فاکتور"}
        handleSubmit={handleFormSubmit}
      />

    </Main>
  );
};
export default EditFactor;
