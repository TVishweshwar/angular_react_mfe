import React from "react";

function Publisher() {
  const EmitEvent = () => {
    window.dispatchEvent(
      new CustomEvent("info", {
        detail: { data: { name: "Vishal" } },
      })
    );
  };
  return (
    <div>
      <div>
        <button onClick={() => EmitEvent()}>Emit Events from React</button>
      </div>
    </div>
  );
}

export default Publisher;
