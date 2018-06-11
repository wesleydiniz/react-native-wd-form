import { StyleSheet } from "react-native";
import { COLORS } from "common-styles";

export default StyleSheet.create({
  button: {
    backgroundColor: COLORS.LIGHTER_COLOR,
    borderRadius: 2,
    height: 50,
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight:10
  },
  buttonDanger: {
    backgroundColor: "#c90c0c",
  },
  buttonSuccess: {
    backgroundColor: "#25ba0e",
  },  
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight:'bold',
    justifyContent:'center',
    alignItems:'center'
  }
});
