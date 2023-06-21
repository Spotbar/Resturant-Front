import MaterialReactTable, { type MRT_ColumnDef } from "material-react-table";
import ReactPaginate from "react-paginate";
import FactorNumber from "../../Interface/FactorNumbers";
import { useState, useMemo, useEffect } from "react";
import moment from "jalali-moment";
import IFactor from "../../Interface/IFactor";
import convertHelpers from "../../utils/helpers/convert.helpers";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import EditIcon from "../../assets/icons/EditIcon";

interface MaterialReactTableProps {
  factors: IFactor[];
  // other props...
}

const FactorTable: React.FC<MaterialReactTableProps> = (props) => {
  const { factors } = props;
  const navigate = useNavigate();
  // const factors: IFactor[] = props.factors as IFactor[];

  const PAGE_SIZE = 7;

  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = Math.ceil(factors.length / PAGE_SIZE);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const displayData = factors.slice(
    currentPage * PAGE_SIZE,
    (currentPage + 1) * PAGE_SIZE
  );

  const columns = useMemo<MRT_ColumnDef<IFactor>[]>(
    () => [
      {
        accessorKey: "FactorNumber", //access nested data with dot notation
        header: "شماره فاکتور",
        className: "rtl",
        // style: {
        //   backgroundColor: "#f0f0f0",
        //   cursor: "pointer",
        // },
        Cell: ({ cell }) => {
          const factorId = cell.row.original.Id;

          return (
            // <span
            //   className="text-amber-900 underline cursor-pointer"
            //   onClick={() => {
            //     navigate(`/FactorDetails/${factorId}`);
            //   }}
            // >
            //   {cell.getValue<string>()}
            // </span>
            <IconButton
            aria-label="edit"
            onClick={() => {
              navigate(`/FactorDetails/${factorId}`);
            }}
          >
            {/* <EditIcon /> */}
            <div className="text-sm text-amber-900 cursor-pointer">
            {cell.getValue<string>()}
            </div>
          </IconButton>
          );
        },
      },
      {
        accessorKey: "Restaurant.Name", //access nested data with dot notation
        header: "رستوران",
        className: "rtl",
      },
      {
        accessorKey: "FactorDate",
        header: "تاریخ",
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
        accessorKey: "FactorAmount", //access nested data with dot notation
        header: "مبلغ",
        className: "rtl",
      },
      {
        accessorKey: "Id", //access nested data with dot notation
        header: "ویرایش",
        className: "rtl",
        Cell: ({ cell }) => {
          const factorId = cell.row.original.Id;
          return cell.getValue<string>() ? (
            <div className="flex flex-row">
              <IconButton
                aria-label="edit"
                onClick={() => {
                  navigate(`/EditFactor/${factorId}`);
                }}
              >
                {/* <EditIcon /> */}
                <div className="text-sm text-amber-900 cursor-pointer">
                   فاکتور
                </div>
              </IconButton>
              <span className="text-sm text-amber-900 my-2">|</span>
              <IconButton
                aria-label="edit"
                onClick={() => {
                  navigate(`/EditOrdersFactor/${factorId}`);
                }}
              >
                {/* <EditIcon /> */}
                <div className="text-sm text-amber-900 cursor-pointer">
                   سفارشات
                </div>
              </IconButton>
            </div>
          ) : (
            <span></span>
          );
        },
      },
      // {
      //   accessorKey: "DeliveryCost", //access nested data with dot notation
      //   header: "پیک",
      //   className: "rtl",
      // },
      // {
      //   accessorKey: "IsDeliveryByCompanyPaid", //access nested data with dot notation
      //   header: "سهم شرکت",
      //   className: "rtl",
      //   Cell: ({ cell }) => {
      //     return cell.getValue<boolean>() ? (
      //       <input
      //         className="cursor-pointer accent-amber-800 focus:accent-amber-800"
      //         type="checkbox"
      //         checked
      //       />
      //     ) : (
      //       <input type="checkbox" disabled />
      //     );
      //   },
      // },
      // {
      //   accessorKey: "IsClosed", //access nested data with dot notation
      //   header: "بسته",
      //   className: "rtl",
      //   Cell: ({ cell }) => {
      //     return cell.getValue<boolean>() ? (
      //       <input
      //         className="cursor-pointer accent-amber-800 focus:accent-amber-800"
      //         type="checkbox"
      //         checked
      //       />
      //     ) : (
      //       <input type="checkbox" disabled />
      //     );
      //   },
      // },
    ],
    []
  );

  if (!factors) {
    // Handle the case when factors is undefined or null
    return <div>No data available</div>;
  }

  return (
    <div dir="rtl">
      {factors ? (
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
export default FactorTable;
