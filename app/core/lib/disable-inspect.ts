// disable-content.ts
"use client";

import toast from "react-hot-toast";

// بررسی می‌کنیم که در محیط کلاینت هستیم
if (typeof window !== "undefined") {
  const hostName = window.location.host;

  document.body.onkeydown = (e: KeyboardEvent) => {
    if (e.key === "F12" && !hostName.includes("localhost")) {
      toast.error("Yo, what you looking for? 😜");
      return false;
    }
  };
}