import React from "react";
import cl from "./About.module.css";

export default function About() {
  return (
    <main className={cl.about__wrapper}>
      <div className={cl.about__content}>
        <h1 className={cl.content__title}>About Page</h1>
        <p className={cl.content__text}>
          Good day to everyone!! This is a mini project for React practice at
          the Ulbi TV course Implemented withdrawal of posts from fake API using
          Axios. Implemented on the principle of SPA. Page routing is done with
          react-router-dom. Also implemented pagination
        </p>
      </div>
    </main>
  );
}
