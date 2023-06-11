import MaterialReactTable, { type MRT_ColumnDef } from "material-react-table";
import ReactPaginate from "react-paginate";
import { useState, useMemo, useEffect } from "react";
import convertHelpers from "../../utils/helpers/convert.helpers";
import { useNavigate } from "react-router-dom";
import { IUnrecordedOrder } from "../../Interface/IUnrecordedOrder";


interface MaterialReactTableProps {
  orders: IUnrecordedOrder[];
  // other props...
}

const UnRecordedOrdersTable: React.FC<MaterialReactTableProps> = (props) => {
  const { orders } = props;
  const navigate = useNavigate();
  // const factors: IFactor[] = props.factors as IFactor[];

  const PAGE_SIZE = 7;

  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = Math.ceil(orders.length / PAGE_SIZE);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const displayData = orders.slice(
    currentPage * PAGE_SIZE,
    (currentPage + 1) * PAGE_SIZE
  );

  const columns = useMemo<MRT_ColumnDef<IUnrecordedOrder>[]>(
    () => [
      {
        accessorKey: "OrderDate",
        header: "تاریخ سفارش",
        className: "rtl",
        Cell: ({ cell }) => {
          return cell.getValue<string>() ? (
            <span>{convertHelpers.jalali(cell.getValue<string>())}</span>
          ) : (
            <span></span>
          );
        },
      },
      {
        accessorKey: "Restaurant.Name",
        header: "رستوران",
        className: "rtl",
      },
      {
        accessorKey: "UnrecordCount",
        header: "ثبت نشده",
        className: "rtl",
        Cell: ({ cell }) => {
          const ordersId = cell.row.original.Id;

          return (
            <span
              className="text-amber-900 underline cursor-pointer"
              onClick={() => {
                navigate(`CreateFactor/${ordersId}`);
              }}
            >
              {cell.getValue<string>()}
            </span>
          );
        },
      },
    ],
    []
  );

  if (!orders) {
    // Handle the case when factors is undefined or null
    return <div>No data available</div>;
  }

  return (
    <div dir="rtl">
      {orders ? (
        <div>
          <MaterialReactTable
            columns={columns}
            data={displayData}
            enablePagination={false}
            muiTableBodyCellProps={{
              align: "right",
              sx: {
                direction: "rtl",
                fontFamily: "IRANSansMobile",
                // backgroundColor: "grey",
              },
            }}
            muiTableHeadCellProps={{
              sx: {
                direction: "rtl",
                fontFamily: "IRANSansMobile",
                // backgroundColor: "grey",
              },
            }}
          />

          <div className="flex justify-center mt-4 text-lg">
            <ReactPaginate
              previousLabel={
                <span className="text-gray-500 hover:text-gray-700 ">قبلی</span>
              }
              nextLabel={
                <span className="text-gray-900 hover:text-gray-700">بعدی</span>
              }
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              pageLinkClassName="block p-1 text-lg"
              containerClassName="flex justify-center items-center gap-2 mt-4"
              pageClassName="rounded-lg bg-gray-200 px-1 text-gray-800 font-semibold hover:bg-gray-300"
              activeClassName="bg-amber-500 text-white rounded-lg  px-1 font-semibold"
              disabledClassName="opacity-50 cursor-not-allowed"
            />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default UnRecordedOrdersTable;
