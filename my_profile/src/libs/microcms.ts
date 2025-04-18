// libs/microcms.ts
import { createClient } from 'microcms-js-sdk';
import { TopContentProps } from '../types/topContent';

// 環境変数にMICROCMS_SERVICE_DOMAINが設定されていない場合はエラーを投げる
if (!process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

// 環境変数にMICROCMS_API_KEYが設定されていない場合はエラーを投げる
if (!process.env.NEXT_PUBLIC_MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

// Client SDKの初期化を行う
export const client = createClient({
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
});

// トップコンテンツのデータ取得
export const getTopContent = async (): Promise<TopContentProps> => {
  const data = await client.get({ endpoint: "top-content" });
  return data;
};
