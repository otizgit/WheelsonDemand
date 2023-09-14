import React, { useRef } from "react";
import { toast } from "react-toastify";

export default function NewsletterForm() {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const inputRef = useRef(null);

  function NewsletterEmailSubmit() {
    if (inputRef.current.value === "") {
      toast.error("Please enter an email", {
        theme: "dark",
      });
    } else if (!inputRef.current.value.match(emailRegex)) {
      toast.error("Please enter a valid email", {
        theme: "dark",
      });
    } else {
      toast.success("Subscription successful, you'll start receiving emails.", {
        theme: "dark",
      });
    }
  }

  return (
    <div className="footer-input-container">
      <input
        ref={inputRef}
        className="footer-input"
        type="text"
        placeholder="Enter your email"
      />
      <button
        onClick={NewsletterEmailSubmit}
        className="sec-font standard-fz pri-bg btn-padding scale transition"
      >
        <i className="fa-solid fa-paper-plane"></i>
      </button>
    </div>
  );
}
