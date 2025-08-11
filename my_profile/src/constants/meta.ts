export const META = {
  siteTitle: "Miyazaki's profile",
  siteDescription: "宮﨑貴大のプロフィールサイトです。",
  siteUrl: "https://my-profile-mu-gold.vercel.app/",
  siteImage: "/metadata/Miyazaki_profile.png",
  portfolioTitle: "Miyazaki's profile | portfolio",
  portfolioDescription: "ポートフォリオ一覧",
  portfolioListUrl: "https://my-profile-mu-gold.vercel.app/portfolio/",
  blogTitle: "Miyazaki's profile | blog",
  blogDescription: "ブログ一覧",
  blogListUrl: "https://my-profile-mu-gold.vercel.app/blog/",
} as const satisfies {
  [key: string]: string;
};
