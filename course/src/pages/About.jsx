import React from "react";

export default function About() {
  return (
    <div style={{ background: "#FFF0E0", width: "100vw" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "35px 20px",
          maxWidth: "800px",
          margin: "0 auto",
          height: "80vh",
        }}
      >
        <h1 style={{ fontSize: "18px", marginBottom: "10px" }}>About Page</h1>
        <p>
          Good day to all!! This is a mini project for React practice at the
          Ulbi TV course Implemented withdrawal of posts from fake API using
          Axios. Implemented on the principle of SPA. Page routing is done with
          react-router-dom. Also implemented pagination
        </p>
      </div>
    </div>
  );
}
