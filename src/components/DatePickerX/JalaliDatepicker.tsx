import * as React from "react";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import useTheme from "@mui/system/useTheme";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { faIR as coreFaIR } from "@mui/material/locale";
import { faIR } from "@mui/x-date-pickers/locales";

export default function JalaliDatepicker() {
  const existingTheme = useTheme();
  // const theme = React.useMemo(
  //   () => createTheme({ direction: "rtl" }, existingTheme),
  //   [existingTheme]
  // );

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
            defaultValue={new Date(2022, 1, 1)}
  
            
          />
        </LocalizationProvider>
      </div>
    </ThemeProvider>
  );
}
