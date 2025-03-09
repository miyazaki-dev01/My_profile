import { style } from "@vanilla-extract/css";
import fontWeight from "@/theme/fontWeight";
import colors from "@/theme/colors";

export const itemStyle = style({
  fontWeight: fontWeight.normal,
  ":hover": {
    color: colors.lightGray,
  },
  ":focus": {
    outline: "none",
    color: colors.lightGray,
  },
});
