"use client";

import React from "react";
import { useState } from "react";
import {
  contactButtonStyle,
  OverlayStyle,
  modalStyle,
  modalContentStyle,
  modalMenueStyle,
  modalTitleStyle,
  closeButtonStyle,
  closeIconStyle,
  errorStyle,
  formStyle,
  formContentTitleStyle,
  formInputStyle,
  submitStyle,
  submitButtonStyle,
  thanksStyle,
  thanksTitleStyle,
  thanksTextStyle,
  thanksCloseStyle,
  thanksCloseButtonStyle,
} from "./style.css";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        setError(errorData.message || "送信に失敗しました。");
      }
    } catch (err) {
      console.error(err);
      setError(
        "送信中にエラーが発生しました。\nお手数ですがもう一度送信をお願いいたします。"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        id="Contact"
        type="button"
        className={contactButtonStyle}
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="hs-vertically-centered-modal"
        data-hs-overlay="#hs-vertically-centered-modal"
      >
        Contact
      </button>

      <div
        id="hs-vertically-centered-modal"
        className={`hs-overlay hidden ${OverlayStyle}`}
        role="dialog"
        tabIndex={-1}
        aria-labelledby="hs-vertically-centered-modal-label"
      >
        <div
          className={`hs-overlay-open:opacity-100 hs-overlay-open:mt-7 ${modalStyle}`}
        >
          <div className={modalContentStyle}>
            {success ? (
              <>
                <div className={thanksStyle}>
                  <h3 id="hs-vertically-centered-modal-label">
                    <span className={thanksTitleStyle}>Thank You!</span>
                    <br />
                    <span className={thanksTextStyle}>
                      返信があるまで少々お待ちください。
                    </span>
                  </h3>
                  <button
                    type="button"
                    className={thanksCloseStyle}
                    aria-label="Close"
                    data-hs-overlay="#hs-vertically-centered-modal"
                  >
                    <span className="sr-only">Close</span>
                    <div className={thanksCloseButtonStyle}>Close</div>
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className={modalMenueStyle}>
                  <h3
                    id="hs-vertically-centered-modal-label"
                    className={modalTitleStyle}
                  >
                    Contact Form
                  </h3>
                  <button
                    type="button"
                    className={closeButtonStyle}
                    aria-label="Close"
                    data-hs-overlay="#hs-vertically-centered-modal"
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className={closeIconStyle}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                    >
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                  </button>
                </div>
                {error && <p className={errorStyle}>{error}</p>}
                <form onSubmit={handleSubmit} className={formStyle}>
                  <div>
                    <label htmlFor="name" className={formContentTitleStyle}>
                      name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required
                      className={formInputStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={formContentTitleStyle}>
                      address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required
                      className={formInputStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className={formContentTitleStyle}>
                      message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required
                      rows={4}
                      className={formInputStyle}
                    />
                  </div>

                  <div className={submitStyle}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={submitButtonStyle}
                    >
                      {isSubmitting ? "Sending..." : "Send"}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
