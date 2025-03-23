# プロフィールサイト

## 環境構築
1. docker立ち上げ：`docker-compose up --build -d`
1. コンテナに入る：`docker-compose exec -it front /bin/bash`
1. NEXT.jsのプロジェクト作成：`npx create-next-app my_profile --ts --eslint`
> [!IMPORTANT]
> Turbopackの設定を「No」にする。（vanilla-extractが動作しなくなるため）

## 開発
1. ローカルサーバの立ち上げ：`npm run dev`
1. 動作確認：[http://localhost:3000](http://localhost:3000)

## 使用技術
### 言語
- TypeScript

### フレームワーク
- React.js (Next.js)

### ライブラリ
-  [vanilla-extract](https://vanilla-extract.style/)
- [preline](https://preline.co/index.html)
- [swiper](https://swiperjs.com/)
- [nodemailer](https://www.nodemailer.com/)
- [microcms-js-sdk](https://github.com/microcmsio/microcms-js-sdk)

### デザインツール
- [devicon](https://devicon.dev/)
- [icons8](https://icons8.jp/icons)