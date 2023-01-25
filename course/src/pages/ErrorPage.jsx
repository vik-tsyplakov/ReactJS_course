import React from "react";

export default function ErrorPage() {
  return (
    <div
      style={{
        color: "red",
        fontWeight: "600",
        textAlign: "center",
        minHeight: "80vh",
      }}
    >
      <p style={{ marginTop: "20px" }}>Error - invalid page address</p>
      <p>Please enter a valid address or use navigation</p>
    </div>
  );
}
