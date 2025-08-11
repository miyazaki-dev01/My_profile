type Protcol = "http" | "https";

type Url = `${Protcol}://${string}`;

export const URL = {
  appRoot: "https://my-profile-mu-gold.vercel.app",
} as const satisfies {
  [key: string]: Url;
};
