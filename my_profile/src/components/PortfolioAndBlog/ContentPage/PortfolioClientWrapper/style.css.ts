import breakpoints from "@/theme/breakpoints";
import colors from "@/theme/colors";
import fontSizes from "@/theme/fontSize";
import fontWeight from "@/theme/fontWeight";
import space from "@/theme/space";
import { style } from "@vanilla-extract/css";

export const contentDivStyle = style({
  maxWidth: "750px",
  marginInline: "auto",
});

export const TitleStyle = style({
  display: "flex",
  justifyContent: "center",

  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: fontSizes.xxml,
      fontWeight: fontWeight.bold,
      paddingInline: "50px",
      marginTop: "30px",
    },
  },
});

export const TitleHrStyle = style({
  borderTop: `1px solid ${colors.lightGray}`,
  marginTop: space.s,
  marginBottom: space.xxl,
});

export const DiscriptionStyle = style({
  display: "flex",
  justifyContent: "center",

  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: fontSizes.m,
      paddingInline: "20px",
      lineHeight: 1.3,
    },
  },
});

export const ImageDivStyle = style({
  display: "flex",
  flexDirection: "column",
  marginInline: "auto",
  width: "600px",
});
