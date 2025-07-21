export type OgpImage = {
  url: string;
  width?: string | number;
  height?: string | number;
  alt?: string;
  type?: string;
};

export type TwitterImage = {
  url: string;
};

export type OgpData = {
  success: boolean;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogSiteName?: string;
  ogLocale?: string;
  ogType?: string;
  ogImage?: OgpImage | OgpImage[]; // 単一または配列
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterSite?: string;
  twitterImage?: TwitterImage[]; // 実際は配列
  fbAppId?: string;
  favicon?: string;
  charset?: string;
  requestUrl?: string;
};

export type OgpCache = Record<string, OgpData>;
