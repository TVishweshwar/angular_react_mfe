import React, { useState, useEffect } from "react";

function Receive() {
  const [eventData, setEventData] = useState<string>("");

  useEffect(() => {
    const subscribeEvent = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent && customEvent.detail && customEvent.detail.data) {
        console.log("React App", customEvent.detail.data.name);
        customEvent.preventDefault(); // Prevent the mini-infobar from appearing on mobile
        setEventData(customEvent.detail.data.name);
      }
    };

    window.addEventListener("info", subscribeEvent);

    return () => {
      window.removeEventListener("info", subscribeEvent);
    };
  }, []);

  return (
    <div>
      {/* Render eventData in your UI */}
      <h2>Event Subscribe in React</h2>
      <p>Event data: {eventData}</p>
    </div>
  );
}

export default Receive;
