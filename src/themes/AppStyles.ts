import Fonts from './Fonts'
import {Colors} from './Colors'
import Metrics from "../utility/Metrics";

const appMainContainer = {
  backgroundColor: Colors.WHITE_TWO,
  flexGrow: 1,
};

const centerAlign = {
  justifyContent: "center",
  alignItems: "center",
};

const inputControl = {
  flex: 1,
  height: Metrics.verticalScale(50),
  ...Fonts.Medium(16, Colors.CHARCOAL_GREY),
};

export {appMainContainer, inputControl, centerAlign};
