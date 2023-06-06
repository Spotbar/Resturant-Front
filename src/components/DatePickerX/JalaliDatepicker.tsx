import * as React from "react";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import useTheme from "@mui/system/useTheme";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { faIR as coreFaIR } from "@mui/material/locale";
import { faIR } from "@mui/x-date-pickers/locales";
import { PickerChangeHandlerContext } from "@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue.types";
import { DateValidationError } from "@mui/x-date-pickers";

interface ChildComponentProps {
  onDateChange: (
    value: Date | null,
    context: PickerChangeHandlerContext<DateValidationError>
  ) => void;
  selectedDate: string;
}

export default function JalaliDatepicker(props: ChildComponentProps) {
  const { onDateChange, selectedDate } = props;
  const handleDateChange = (
    value: Date | null,
    context: PickerChangeHandlerContext<DateValidationError>
  ) => {
    // Pass the value and context to the parent component
    onDateChange(value, context);
  };

  const theme = createTheme(
    {
      palette: {
        primary: { main: "#d97706" },
      },
      direction: "rtl",
      typography: {
        fontFamily: "IRANSansMobile",
      },
      components: {
        MuiSvgIcon: {
          styleOverrides: {
            root: {
              color: "#a8a29e", // Replace 'your-custom-color' with the desired color value
              "&:hover": {
                color: "#d97706", // Replace 'your-hover-color' with the hover color value
              },
              "&:active": {
                color: "#d97706", // Replace 'your-active-color' with the active color value
              },
            },
          },
        },
      },
    },
    coreFaIR, // x-date-pickers translations
    faIR // core translations
  );

  return (
    <ThemeProvider theme={theme}>
      <div dir="rtl">
        <LocalizationProvider
          dateAdapter={AdapterDateFnsJalali}
          localeText={{
            cancelButtonLabel: "بازگشت",
            okButtonLabel: "تایید",
            // todayButtonLabel: "Set today",
            // clearButtonLabel: "None",
          }}
        >
          <DatePicker
            // label="Date Picker"
            // defaultValue={new Date(2022, 1, 1)}
            defaultValue={new Date(selectedDate)}
            onChange={handleDateChange}
            // onChange={(value, context) => {
            //   // formik.setFieldValue('selectedDate', value);
            //   // You can access the validation result from the context parameter if needed
            //   console.log(value);
            //   console.log(context);
            // }}
          />
        </LocalizationProvider>
      </div>
    </ThemeProvider>
  );
}
