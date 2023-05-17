import { useFormik } from "formik";
import * as Yup from "yup";
import IRestaurant from "../../Interface/IRestaurant";
import { useEffect, useState } from "react";

const Restaurant = (props: any) => {
  const { title, btn, handleSubmit, data } = props;
  const [restaurant, setRestaurant] = useState<IRestaurant>();



  const initialValues: IRestaurant = {
    Id: "",
    Name:"",
    Tel: "",
    OpratorName: "",
    Mobile: "",
    Address: "",
  };
  useEffect(() => {
    if (data) {
      formik.setFieldValue('Id', data.Id || '');
      formik.setFieldValue('Name', data.Name || '');
      formik.setFieldValue('Tel', data.Tel || '');
      formik.setFieldValue('OpratorName', data.OpratorName || '');
      formik.setFieldValue('Mobile', data.Mobile || '');
      formik.setFieldValue('Address', data.Address || '');
    }
  }, [data]);
  // const onSubmit = (restaurant: ICreateRestaurant) => {
  //   // // navigate("/Home");
  // };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(" نام رستوران را وارد کنید"),
    tell: Yup.number().required("شماره تلفن رستوران را وارد کنید"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      handleSubmit(values);
    },
    validationSchema,
    validateOnMount: true,
  });



  return (
    <div>
      <div className="text-amber-600 text-lg mb-6"> {title}</div>
      <form onSubmit={formik.handleSubmit} className="w-full h-full text-sm">
        <div className="w-full h-full grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="mb-4 col-span-2">
            <label className="block text-gray-700 font-bold mb-2">
              نام رستوران
            </label>
            <input
              className="w-full rounded-md border outline-amber-500 py-2 px-3 leading-tight"
              id="Name"
              type="text"
              placeholder=""
              {...formik.getFieldProps("Name")}
              name="Name"
              
            />
            {formik.errors.Name && formik.touched.Name && (
              <div className="w-full text-red-500 text-sm text-right">
                {formik.errors.Name}
              </div>
            )}
          </div>
          <div className="mb-4 col-span-2">
            <label className="block text-gray-700 font-bold mb-2">تلفن</label>
            <input
              className="w-full rounded-md border outline-amber-500 py-2 px-3 leading-tight"
              id="Tel"
              type="tel"
              // placeholder=""
              {...formik.getFieldProps("Tel")}
              name="Tel"
            />
            {formik.errors.Tel && formik.touched.Tel && (
              <div className="w-full text-red-500 text-sm text-right">
                {formik.errors.Tel}
              </div>
            )}
          </div>
          <div className="mb-4 col-span-2">
            <label className="block text-gray-700 font-bold mb-2">
              اپراتور فروش
            </label>
            <input
              className="w-full rounded-md border outline-amber-500 py-2 px-3 leading-tight"
              id="OpratorName"
              type="text"
              // placeholder=""
              {...formik.getFieldProps("OpratorName")}
              name="OpratorName"
            />
            {formik.errors.OpratorName && formik.touched.OpratorName && (
              <div className="w-full text-red-500 text-sm text-right">
                {formik.errors.OpratorName}
              </div>
            )}
          </div>
          <div className="mb-4 col-span-2">
            <label className="block text-gray-700 font-bold mb-2">
              شماره همراه
            </label>
            <input
              className="w-full rounded-md border outline-amber-500 py-2 px-3 leading-tight"
              id="Mobile"
              type="text"
              // placeholder=""
              {...formik.getFieldProps("Mobile")}
              name="Mobile"
            />
            {formik.errors.Mobile && formik.touched.Mobile && (
              <div className="w-full text-red-500 text-sm text-right">
                {formik.errors.Mobile}
              </div>
            )}
          </div>
          <div className="mb-4 col-span-4 ">
            <label className="block text-gray-700 font-bold mb-2">آدرس</label>
            <textarea
              className="w-full rounded-md border outline-amber-500 py-2 px-3 leading-tight"
              id="Address"
              rows={3}
              // placeholder=""
              {...formik.getFieldProps("Address")}
              name="Address"
            ></textarea>
            {formik.errors.Address && formik.touched.Address && (
              <div className="w-full text-red-500 text-sm text-right">
                {formik.errors.Address}
              </div>
            )}
          </div>

          <div className="col-span-4 flex justify-end ">
            <button
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto sm:px-14"
              type="submit"
            >
              {btn}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Restaurant;
