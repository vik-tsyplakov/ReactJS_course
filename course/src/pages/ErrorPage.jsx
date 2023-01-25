import React from "react";
import cl from "./ErrorPage.module.css";
import error_404 from "./../img/error_404.png";

export default function ErrorPage() {
  return (
    <main className={cl.errorPage__wrapper}>
      <div className={cl.errorPage__content}>
        <div className={cl.errorPage__text}>
          <p>Error - invalid page address</p>
          <p>Please enter a valid address or use the navigation</p>
        </div>
        <div>
          <img
            className={cl.errorPage__img}
            src={error_404}
            alt="Error - invalid page address"
          />
        </div>
      </div>
    </main>
  );
}
