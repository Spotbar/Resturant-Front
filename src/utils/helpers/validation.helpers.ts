const validationHelpers = {
  // chack Iran national code validation

  nationalId: function (Id: string) {
    if (
      Id == "0000000000" ||
      Id == "1111111111" ||
      Id == "2222222222" ||
      Id == "3333333333" ||
      Id == "4444444444" ||
      Id == "5555555555" ||
      Id == "6666666666" ||
      Id == "7777777777" ||
      Id == "8888888888" ||
      Id == "9999999999"
    ) {
      return false;
    } else {
      const num0 = Number.parseInt(Id.charAt(0)) * 10;
      const num2 = Number.parseInt(Id.charAt(1)) * 9;
      const num3 = Number.parseInt(Id.charAt(2)) * 8;
      const num4 = Number.parseInt(Id.charAt(3)) * 7;
      const num5 = Number.parseInt(Id.charAt(4)) * 6;
      const num6 = Number.parseInt(Id.charAt(5)) * 5;
      const num7 = Number.parseInt(Id.charAt(6)) * 4;
      const num8 = Number.parseInt(Id.charAt(7)) * 3;
      const num9 = Number.parseInt(Id.charAt(8)) * 2;
      const a = Number.parseInt(Id.charAt(9));
      const b = num0 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9;
      const c = b % 11;
      return (c < 2 && a == c) || (c >= 2 && 11 - c == a);
    }
  },


};
export default validationHelpers;
