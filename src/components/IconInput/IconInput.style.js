//@flow
import { StyleSheet } from "react-native";
import { COLORS } from "common-styles";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15
  },
  iconContainer: {
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    backgroundColor: COLORS.LIGHTER_COLOR,
    alignItems: "center",
    flex: 1,
    padding: 5,
    height: 50,
    justifyContent: "center"
  },
  textContainer: {
    flex: 6,
    padding: 5,
    height: 50,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLORS.TEXT_LIGHT_COLOR
  },
  textInput: {
    height: 50,
    fontSize: 18,
    color: COLORS.TEXT_COLOR
  }
});
