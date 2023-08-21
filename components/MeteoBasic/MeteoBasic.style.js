import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  clock: {
    alignItems: "flex-end",
  },
  weatherLabel: {
    alignSelf: "flex-end",
    transform: [{ rotate: "-90deg" }],
    fontSize: 20,
  },
  image: {
    height: 90,
    width: 90,
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
