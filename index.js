import { useState, useEffect } from "react";

export default function useNavigatorOnline() {
  const supported =
    typeof window !== "undefined" &&
    typeof navigator !== "undefined" &&
    "onLine" in navigator;

  const [isOnline, setIsOnline] = useState({
    previous: supported ? navigator.onLine : false,
    current: supported ? navigator.onLine : false,
  });

  useEffect(() => {
    if (supported) {
      const updateStatus = (event) => {
        setIsOnline({
          previous: isOnline.current,
          current: event.type === "online",
        });
      };

      window.addEventListener("offline", updateStatus);
      window.addEventListener("online", updateStatus);

      return () => {
        window.removeEventListener("offline", updateStatus);
        window.removeEventListener("online", updateStatus);
      };
    }

    return () => {};
  }, [isOnline, supported]);

  return {
    backOnline: !isOnline.previous && isOnline.current,
    backOffline: isOnline.previous && !isOnline.current,
    isOnline: isOnline.current,
    isOffline: !isOnline.current,
  };
}
