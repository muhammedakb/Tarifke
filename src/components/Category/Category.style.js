import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: 80,
    marginTop: 15,
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
  },
  img: {
    width: 80,
    height: 80,
    marginLeft: 20,
    resizeMode: "center"
  },
  text: {
    color: "#000",
    marginLeft: 25,
    fontSize: 17,
  },
});
