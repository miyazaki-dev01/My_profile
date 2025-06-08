import { style } from "@vanilla-extract/css";
import fontWeight from "@/theme/fontWeight";
import colors from "@/theme/colors";

export const itemStyle = style({
  fontWeight: fontWeight.normal,
  position: "relative",
  ":hover": {
    color: colors.lightGray,
  },
  ":focus": {
    outline: "none",
    color: colors.lightGray,
  },
});

export const submenuItemStyle = style({
  position: "absolute",
  top: "100%",
  left: 0,
  backgroundColor: colors.brack,
  color: colors.lightGray,
  padding: "8px 12px",
  textDecoration: "none",
  whiteSpace: "nowrap",
  fontSize: "0.9rem",
  ":hover": {
    backgroundColor: colors.darkWhite,
    color: colors.brack,
  },
});
