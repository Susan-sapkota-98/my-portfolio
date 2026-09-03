"use client";

import { useEffect } from "react";

export function VisitTracker() {
  useEffect(() => {
    const alreadyNotified = sessionStorage.getItem("visit_notified");

    if (alreadyNotified) return;

    const sendVisit = async (
      gpsLocation: {
        lat: number;
        lng: number;
        accuracy: number;
      } | null
    ) => {
      try {
        const response = await fetch("/api/notify-visit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            page: window.location.href,
            gpsLocation,
          }),
        });

        if (response.ok) {
          sessionStorage.setItem("visit_notified", "true");
        }
      } catch (error) {
        console.error("Failed to send visit:", error);
      }
    };

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        // SUCCESS
        (position) => {
          const gpsLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            accuracy: position.coords.accuracy,
          };

          console.log("GPS LOCATION:", gpsLocation);

          sendVisit(gpsLocation);
        },

        // ERROR / DENIED
        (error) => {
          console.warn(
            "GPS unavailable:",
            error.code,
            error.message
          );

          // Still send visitor notification using IP location
          sendVisit(null);
        },

        // OPTIONS
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 0,
        }
      );
    } else {
      sendVisit(null);
    }
  }, []);

  return null;
}