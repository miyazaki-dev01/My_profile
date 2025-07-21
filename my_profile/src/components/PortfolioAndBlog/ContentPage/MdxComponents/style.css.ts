import { style } from "@vanilla-extract/css";

// 太字
export const strong = style({
  fontWeight: "700", // Tailwindの font-bold 相当
  color: "#DC2626", // Tailwindの red-600 相当、変更可
});

// 引用スタイル
export const blockquote = style({
  borderLeft: "4px solid #3B82F6",
  paddingLeft: "1rem",
  margin: "1rem 0",
  fontStyle: "italic",
  color: "#374151",
  backgroundColor: "#F9FAFB",
});

// 箇条書き（ul）
export const unorderedList = style({
  paddingLeft: "1.5rem",
  listStyleType: "disc",
  marginBottom: "1rem",
});

// 番号付きリスト（ol）
export const orderedList = style({
  paddingLeft: "1.5rem",
  listStyleType: "decimal",
  marginBottom: "1rem",
});

// リスト項目
export const listItem = style({
  marginBottom: "0.5rem",
});

// インラインコード
export const inlineCode = style({
  backgroundColor: "#F3F4F6", // 明るめのグレー
  padding: "0.2em 0.4em",
  borderRadius: "4px",
  fontFamily: "Menlo, monospace",
  fontSize: "0.95em",
  color: "#EF4444", // 赤系の文字色
});

// リンク
export const link = style({
  color: "#3B82F6", // Tailwindの blue-500
  textDecoration: "underline",
  textUnderlineOffset: "2px",
  transition: "color 0.2s ease",
  selectors: {
    "&:hover": {
      color: "#2563EB", // Tailwindの blue-600
    },
  },
});

// テーブル
export const table = style({
  width: "100%",
  borderCollapse: "collapse",
  margin: "1rem 0",
  fontSize: "0.95rem",
});
export const tableHeader = style({
  backgroundColor: "#F3F4F6", // 明るめグレー
  fontWeight: "bold",
  textAlign: "left",
  padding: "0.75rem 1rem",
  borderBottom: "2px solid #E5E7EB", // グレー
});
export const tableCell = style({
  padding: "0.75rem 1rem",
  borderBottom: "1px solid #E5E7EB",
});
export const tableRow = style({
  selectors: {
    "&:hover": {
      backgroundColor: "#FAFAFA",
    },
  },
});
