import React, { useState, useEffect } from "react";
import NavTracking from "./navTracking";
import TrackingInput from "./trackingInput";

export default function Tracking() {
  const [token, setToken] = useState("");
  const baseURL = "https://tracking.foreverprogrammer.com";

  useEffect(() => {
    const formData = new FormData();
    formData.append("email", "admin@argon.com");
    formData.append("password", "secret");
    async function fetchData() {
      const request = await fetch(baseURL + "/api/login", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          setToken(data.data.token);
        });
      return () => {
        return request;
      };
    }
    fetchData();
  }, []);

  return (
    <div>
      <NavTracking />
      <TrackingInput accessToken={token} />
    </div>
  );
}
