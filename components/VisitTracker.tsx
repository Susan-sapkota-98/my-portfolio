"use client";
import { useEffect } from "react";

export function VisitTracker() {
  useEffect(() => {
    const alreadyNotified = sessionStorage.getItem("visit_notified");
    if (alreadyNotified) return;

    const sendVisit = (gpsLocation: { lat: number; lng: number } | null) => {
      fetch("/api/notify-visit", {
        method: "POST",
        body: JSON.stringify({
          page: window.location.href,
          gpsLocation,
        }),
      });
      sessionStorage.setItem("visit_notified", "true");
    };

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          sendVisit({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          // visitor denied permission or it failed — fall back to IP-only
          sendVisit(null);
        },
        { timeout: 5000 }
      );
    } else {
      sendVisit(null);
    }
  }, []);

  return null;
}