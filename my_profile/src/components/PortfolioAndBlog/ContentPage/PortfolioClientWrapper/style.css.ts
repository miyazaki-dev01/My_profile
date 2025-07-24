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

export const ImageLinkDivStyle = style({
  marginInline: "auto",
  marginBlock: "50px",
  width: "650px",
});

export const ImageLinkStyle = style({
  overflow: "hidden",
  boxSizing: "border-box",
  textDecoration: "none",
  color: "inherit",
});

export const ImageDivStyle = style({
  position: "relative",
  overflow: "hidden",
  aspectRatio: "1.78261 / 1",
  borderRadius: ".3rem",
  selectors: {
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: `${colors.lightGray}CC`,
      opacity: 0,
      transition: "opacity 0.3s ease",
    },
    [`${ImageLinkStyle}:hover &::after`]: {
      opacity: 1,
    },
  },
});

// **中央テキスト**
export const HoverTextStyle = style({
  display: "flex",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: colors.brack,
  fontSize: fontSizes.ml,
  fontWeight: "bold",
  opacity: 0,
  visibility: "hidden",
  transition: "opacity 0.3s ease, visibility 0.3s ease",
  textAlign: "center",
  pointerEvents: "none",
  selectors: {
    [`${ImageLinkStyle}:hover &`]: {
      opacity: 1,
      zIndex: 10,
      visibility: "visible",
    },
  },
});

export const ImageStyle = style({
  height: "100%",
  width: "100%",
  objectFit: "cover",
  borderRadius: 0,
  "@media": {
    [`screen and (min-width: ${breakpoints.mobile}px)`]: {
      borderRadius: ".3rem",
    },
  },
});

export const SiteUrlDivStyle = style({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: space.xs,
  fontSize: fontSizes.s,
  marginTop: space.xxs,
  color: colors.darkGray,
  transition: "color 0.3s ease",
  cursor: "pointer",
  selectors: {
    "&:hover": {
      color: colors.lightGray,
    },
    [`${ImageLinkStyle}:hover &`]: {
      color: colors.lightGray,
    },
  },
});
