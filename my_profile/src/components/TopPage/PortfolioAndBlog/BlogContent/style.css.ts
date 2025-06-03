import { style } from "@vanilla-extract/css";
import breakpoints from "@/theme/breakpoints";
import fontSizes from "@/theme/fontSize";
import fontWeight from "@/theme/fontWeight";
import space from "@/theme/space";
import colors from "@/theme/colors";

export const blogStyle = style({
  width: "100%",
  margin: "0 auto",
});

export const titleStyle = style({
  textAlign: "center",
  fontSize: fontSizes.xl,
  fontWeight: fontWeight.bold,
  marginBottom: space.xml,
  "@media": {
    [`screen and (max-width: ${breakpoints.mobile}px)`]: {
      fontSize: fontSizes.xxl,
      marginBottom: space.l,
    },
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: fontSizes.xxml,
      marginBottom: space.xxl,
    },
  },
});

export const swiperStyle = style({
  display: "flex",
  justifyContent: "center",
});

export const swiperContentStyle = style({
  width: "100%",
});

export const arrowLeftStyle = style({
  display: "flex",
  justifyContent: "center",
  width: "30px",
  marginRight: "30px",
  "@media": {
    [`screen and (max-width: ${breakpoints.mobile}px)`]: {
      display: "none",
    },
  },
});

export const arrowRightStyle = style({
  display: "flex",
  justifyContent: "center",
  width: "30px",
  marginLeft: "30px",
  "@media": {
    [`screen and (max-width: ${breakpoints.mobile}px)`]: {
      display: "none",
    },
  },
});

export const arrowIconStyle = style({
  cursor: "pointer",
});

export const viewAllStyle = style({
  border: "1px solid",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: "25px",
  fontSize: fontSizes.xs,
  paddingTop: space.xxs,
  paddingBottom: space.xxs,
  marginTop: space.xl,
  marginRight: "30%",
  marginLeft: "30%",
  transition: "background-color 0.5s ease, color 0.5s ease",
  ":hover": {
    backgroundColor: colors.darkWhite,
    color: colors.brack,
    cursor: "pointer",
  },
  "@media": {
    [`screen and (max-width: ${breakpoints.mobile}px)`]: {
      width: "200px",
      margin: `0 auto 0 auto`,
      border: "0.5px solid",
      fontSize: fontSizes.xxs,
      marginTop: space.m,
    },
  },
});
