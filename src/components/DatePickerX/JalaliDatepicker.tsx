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
              color: "#a8a29e",
              "&:hover": {
                color: "#d97706",
              },
              "&:active": {
                color: "#d97706",
              },
            },
          },
        },
        MuiTextField: {
          styleOverrides: {
            root: {
              // height: "70px",
              display: "block",
            },
          },
        },
        MuiInputBase: {
          styleOverrides: {
            input: {
              width: "100%", // Set the width to 100%
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
            value={new Date(selectedDate)}
            onChange={ handleDateChange}
            slotProps={{ textField: { size: "small" } }}
          />
        </LocalizationProvider>
      </div>
    </ThemeProvider>
  );
}
