import { useState, useEffect } from "react";

/**
 * お問い合わせフォームの状態管理と送信処理を行うカスタムフック
 */
export const useContactForm = () => {
  // フォーム入力値の状態管理
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // 送信中フラグ（ボタンのdisabled制御に使用）
  const [isSubmitting, setIsSubmitting] = useState(false);

  // エラーメッセージを格納する状態
  const [error, setError] = useState("");

  // フォームが送信済みかどうかの状態（送信後の画面表示切替に使用）
  const [submitted, setSubmitted] = useState(false);

  // コンポーネント初回マウント時にsessionStorageをチェックして
  // 既に送信済みならsubmittedをtrueにセットする
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = sessionStorage.getItem("submitted");
      if (saved === "true") {
        setSubmitted(true);
      }
    }
  }, []);

  /**
   * フォーム入力値変更時のイベントハンドラ
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /**
   * フォーム送信時のイベントハンドラ
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // ページリロード防止
    setIsSubmitting(true);
    setError("");

    try {
      // 送信API呼び出し（/api/contactにPOST）
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // 成功したらフォーム初期化・送信済みフラグをtrueにセット
        setFormData({ name: "", email: "", message: "" });
        setSubmitted(true);
        // sessionStorageに送信済みフラグを保存（他タブでも反映可能に）
        sessionStorage.setItem("submitted", "true");
      } else {
        // 失敗時はエラーメッセージを取得してセット
        const errorData = await response.json();
        setError(errorData.message || "送信に失敗しました。");
      }
    } catch (err) {
      console.error(err);
      setError(
        "送信中にエラーが発生しました。お手数ですがもう一度送信をお願いいたします。"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    error,
    submitted,
    handleChange,
    handleSubmit,
  };
};
