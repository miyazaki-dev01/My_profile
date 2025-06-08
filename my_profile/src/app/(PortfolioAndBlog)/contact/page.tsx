"use client";

import React from "react";
import { useEffect, useState } from "react";
import { useContactForm } from "@/hooks/useContactForm";

export default function Contact() {
  const {
    formData,
    isSubmitting,
    error,
    submitted,
    handleChange,
    handleSubmit,
  } = useContactForm();

  // ReactのSSR環境対応（マウント後に表示する）
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) return null;

  return (
    <div className="">
      <h2>Contact</h2>
      {submitted ? (
        <h3 id="hs-vertically-centered-modal-label">
          <span>Thank You!</span>
          <br />
          <span>返信があるまで少々お待ちください。</span>
        </h3>
      ) : (
        <>
          {error && <p>{error}</p>}
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                required
              />
            </label>
            <label>
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                required
              />
            </label>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </form>
        </>
      )}
    </div>
  );
}
