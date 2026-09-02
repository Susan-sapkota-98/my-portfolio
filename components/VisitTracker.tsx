"use client";
import { useEffect } from "react";

export function VisitTracker() {
  useEffect(() => {
    const alreadyNotified = sessionStorage.getItem("visit_notified");
    if (alreadyNotified) return;

    fetch("/api/notify-visit", {
      method: "POST",
      body: JSON.stringify({ page: window.location.href }),
    });

    sessionStorage.setItem("visit_notified", "true");
  }, []);

  return null;
}