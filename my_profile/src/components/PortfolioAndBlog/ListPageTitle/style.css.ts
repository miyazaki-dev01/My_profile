import { style } from "@vanilla-extract/css";
import colors from "@/theme/colors";
import fontSizes from "@/theme/fontSize";
import fontWeight from "@/theme/fontWeight";
import breakpoints from "@/theme/breakpoints";
import space from "@/theme/space";

export const titleDivStyle = style({
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      position: "sticky",
      top: "0px",
      zIndex: 1,
      paddingTop: "3.5rem",
      marginTop: "-3.5rem",
      width: "100%",
      paddingBottom: space.m,
      backgroundColor: colors.paleWhite,
      borderBottom: `.5px solid ${colors.lightGray}`,
    },
  },
});

export const PortfolioTitleStyle = style({
  fontSize: fontSizes.xxl,
  fontWeight: fontWeight.bold,
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: fontSizes.xxml,
    },
  },
});
