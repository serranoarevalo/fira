import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export default {
  window: {
    width,
    height
  },
  isSmallDevice: width < 375,
  btnRadius: 30
};
