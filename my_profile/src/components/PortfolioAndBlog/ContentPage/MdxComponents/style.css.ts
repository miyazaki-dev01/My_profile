import { style, globalStyle } from "@vanilla-extract/css";
import breakpoints from "@/theme/breakpoints";
import fontSizes from "@/theme/fontSize";
import fontWeight from "@/theme/fontWeight";
import colors from "@/theme/colors";
import space from "@/theme/space";

// ------------------------------
// ラッパー
// ------------------------------
export const wrapper = style({
  marginBlock: "90px",
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      marginBlock: "80px",
      marginInline: "5%",
    },
  },
});

// 「wrapper直下の最初の子要素だけ」にスタイルを適用
globalStyle(`${wrapper} > :first-child`, {
  marginTop: 0,
});

// ------------------------------
// h2
// ------------------------------
export const h2 = style({
  fontWeight: fontWeight.bold,
  fontSize: "26px",
  paddingBottom: space.xxs,
  marginTop: "40px",
  marginBottom: "20px",
  lineHeight: 1.3,
  borderBottom: `.5px solid ${colors.lightGray}`,
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: "30px",
      paddingBottom: space.xs,
      marginTop: "50px",
    },
  },
});

// ------------------------------
// h3
// ------------------------------
export const h3 = style({
  fontWeight: fontWeight.bold,
  fontSize: fontSizes.l,
  marginTop: "25px",
  marginBottom: "10px",
  lineHeight: 1.3,
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      marginTop: "30px",
    },
  },
});

// ------------------------------
// h4
// ------------------------------
export const h4 = style({
  fontWeight: fontWeight.bold,
  fontSize: fontSizes.ml,
  marginTop: "20px",
  marginBottom: "8px",
  lineHeight: 1.3,
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      marginTop: "25px",
    },
  },
});

// ------------------------------
// p
// ------------------------------
export const p = style({
  fontSize: fontSizes.m,
  lineHeight: 1.6,
  marginBlock: "14px",
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: "18px",
    },
  },
});

// ------------------------------
// 太字
// ------------------------------
export const strong = style({
  fontWeight: fontWeight.bold,
});

// ------------------------------
// 引用スタイル
// ------------------------------
export const blockquote = style({
  borderLeft: `4px solid ${colors.lightGray}`,
  paddingLeft: space.xs,
  fontStyle: "italic",
  color: colors.darkGray,
  marginBlock: space.ml,
  paddingBlock: space.xxs,
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      paddingLeft: space.s,
    },
  },
});

// blockquote内のpタグ
globalStyle(`${blockquote} p`, {
  marginBlock: 0,
  lineHeight: 1.3,
  whiteSpace: "pre-line",
  fontSize: fontSizes.s,
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: fontSizes.m,
    },
  },
});

// blockquote内のblockquoteタグ（２重引用）
globalStyle(`${blockquote} blockquote`, {
  marginBottom: 0,
  marginTop: space.xs,
});

// ------------------------------
// インラインコード
// ------------------------------
export const inlineCode = style({
  backgroundColor: "#EBEBEB",
  padding: ".2rem .4rem",
  marginInline: "2px",
  color: colors.brack,
  borderRadius: "4px",
  fontFamily: "Menlo, monospace",
  fontSize: fontSizes.s,
  verticalAlign: ".08em",
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: fontSizes.m,
    },
  },
});

// ------------------------------
// リンク
// ------------------------------
export const link = style({
  color: "#0f83fd",
  textDecoration: "none",
  textUnderlineOffset: "3.5px",
  selectors: {
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

// ------------------------------
// 箇条書き（ul）
// ------------------------------
export const unorderedList = style({
  paddingLeft: "1.5rem",
  listStyleType: "disc", // ●
  marginBlock: "14px",
});

globalStyle(`${unorderedList} ul`, {
  listStyleType: "circle", // ○
  marginBlock: "10px",
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      marginBlock: space.s,
    },
  },
});

globalStyle(`${unorderedList} ul ul`, {
  listStyleType: "square", // ■
  marginBlock: "10px",
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      marginBlock: space.s,
    },
  },
});

// ------------------------------
// 番号付きリスト（ol）
// ------------------------------
export const orderedList = style({
  paddingLeft: "1.5rem",
  listStyleType: "decimal",
  marginBlock: "14px",
});

globalStyle(`${orderedList} ol`, {
  listStyleType: "none",
  counterReset: "item",
  marginBlock: "10px",
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      marginBlock: space.s,
    },
  },
});

globalStyle(`${orderedList} li`, {
  counterIncrement: "item",
});

globalStyle(`${orderedList} li::marker`, {
  content: "counters(item, '.') '. '", // 1.1 / 1.1.1 の階層番号
});

// ------------------------------
// リスト項目
// ------------------------------
export const listItem = style({
  marginBlock: "3px",
  fontSize: fontSizes.m,
  lineHeight: 1.5,
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: "18px",
    },
  },
});

// ------------------------------
// テーブル
// ------------------------------
export const table = style({
  marginBlock: "16px",
  maxWidth: "100%",
  borderCollapse: "collapse",
  fontSize: fontSizes.m,
  lineHeight: 1.3,
  border: `.5px solid ${colors.lightGray}`,
  "@media": {
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: "18px",
    },
  },
});

export const tableHeader = style({
  fontWeight: "bold",
  backgroundColor: colors.darkWhite,
  paddingBlock: space.xs,
  paddingInline: space.m,
  border: `.5px solid ${colors.lightGray}`,
});

export const tableCell = style({
  paddingBlock: space.xs,
  paddingInline: space.m,
  border: `.5px solid ${colors.lightGray}`,
});
