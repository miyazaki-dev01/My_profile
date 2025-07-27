import { style } from "@vanilla-extract/css";

export const imageWrapper = style({
  overflow: "hidden",
  maxWidth: "100%",
  textAlign: "left",
  marginBlock: "16px",
});

export const image = style({
  height: "auto",
  maxWidth: "100%", // 親幅を超えない
  width: "auto", // 元画像の幅を尊重
  borderRadius: "2px",
});
