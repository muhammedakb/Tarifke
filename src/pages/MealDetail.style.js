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
    backgroundColor: "#fff",
    borderBottomColor: "#000",
    borderBottomWidth: 2,
    padding: 5,
  },
  meal: {
    fontSize: 26,
    color: "#a83232",
  },
  meal_from: {
    fontSize: 22,
    color: "#a83232",
    opacity: 0.85,
  },
  tag_area: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: 7,
    marginLeft: -10,
  },
  material: {
    color: "#fff",
    fontStyle: "italic",
    marginTop: 3,
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
