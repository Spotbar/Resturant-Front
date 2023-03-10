const SelectCustomStyles = {
    option: (base:any, state:any) => ({
      ...base,
      backgroundColor:state.isFocused?" #d97706": state.isSelected ? "#fdba74" :"#fef3c7",
  
  
    }),
    control: (baseStyles:any, state:any) => ({
      ...baseStyles,
      borderColor: state.isFocused ? '#d97706' : '#eeeeee',
  
    }),
    indicatorsContainer: () => ({
      ".factorDropDown": {
        // backgroundColor: "#d97706",
        borderRadius: "50%",
        "&__dropdown-indicator": {
          color: "#d97706",
        },
      },
  
      ".restaurantDropDown": {
        "&__dropdown-indicator": {
          color: "#d97706",
        },
      },
    }),
  };
  export default SelectCustomStyles;