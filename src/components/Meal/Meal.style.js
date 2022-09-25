import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: Dimensions.get("window").height / 5,
    width: "100%",
    marginTop: 15,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  text_container: {
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "flex-end",
    position: "absolute",
    bottom: 0,
    paddingRight: 10,
    backgroundColor: "rgba(52, 52, 52, 0.6)",
  },
  text: {
    textAlign: "right",
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
});
