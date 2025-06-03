"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function useScrollRestoration() {
  const pathname = usePathname(); // 現在のパスを取得
  const searchParams = useSearchParams(); // 現在のクエリパラメータを取得
  const qs = searchParams.toString(); // クエリパラメータを文字列化
  const key = `scroll-pos:${pathname}${qs ? "?" + qs : ""}`; // URLごとに一意のキーを生成

  useEffect(() => {
    // ページマウント時にスクロール位置を復元
    const saved = sessionStorage.getItem(key);
    if (saved) {
      requestAnimationFrame(() => {
        window.scrollTo(0, parseInt(saved, 0)); // 保存されたスクロール位置に移動
      });
    }

    // スクロールイベントを監視して位置を保存
    const onScroll = () => {
      sessionStorage.setItem(key, window.scrollY.toString()); // 現在のスクロール位置を保存
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll); // イベントリスナーを解除
      sessionStorage.setItem(key, window.scrollY.toString()); // アンマウント時に位置を保存
    };
  }, [key]); // keyが変わるたびにエフェクトを再実行
}
