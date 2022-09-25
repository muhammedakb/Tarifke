import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  image: {
    width: "100%",
    height: Dimensions.get("window").height / 4,
  },
  scrollable_area: {
    backgroundColor: "#fff",
    padding: 10,
    paddingBottom: 20,
  },
  meal_area: {
    borderBottomColor: "#000",
    borderBottomWidth: 2,
    paddingBottom: 5,
  },
  meal: {
    fontSize: 26,
    color: "#a83232",
  },
  meal_from: {
    fontSize: 22,
    color: "#a83232",
    opacity: 0.8,
  },
  recipe: {
    marginTop: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#ff0000",
    width: "90%",
    height: 35,
    marginLeft: "5%",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  button_text: {
    fontSize: 16,
  },
});
