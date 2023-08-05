import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  clock: {
    alignItems: "flex-end",
  },
  weatherLabel: {
    alignSelf: "flex-end",
    transform: [{ rotate: "-90deg" }],
  },
  image: {
    height: 90,
    width: 90,
    backgroundColor: "white",
  },
  tempBox: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  temp: {
    fontSize: 150,
  },
});
