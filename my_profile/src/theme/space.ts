export type Space = keyof typeof space;

const space = {
  xxs: 4,
  xs: 8,
  s: 12,
  m: 16,
  ml: 20,
  l: 24,
  xml: 28,
  xl: 32,
  xxl: 40,
  xxxl: 48,
  s_8rem: 128,
} as const satisfies {
  [key: string]: number;
};

export default space;
