import { StyleSheet, TextStyle, ViewStyle } from "react-native";

interface Styles {
  text: TextStyle;
  view: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  text: {
    fontSize: 20,
  },
  view: {
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default styles;
