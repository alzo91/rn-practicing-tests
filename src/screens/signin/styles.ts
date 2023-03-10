import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: "500" },
  text: { textAlign: "center" },
  inputContainer: {
    flexDirection: "row",
    padding: 7,
  },
  input: {
    width: "100%",
    padding: 7,
    borderColor: "lightblue",
    borderWidth: 2,
    borderRadius: 7,
    height: 52,
    margin: 7,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
