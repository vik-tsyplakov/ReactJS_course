import React from "react";
import cl from "./Footer.module.css";
import github_icon from "./../../../img/github_icon.svg";
import linkedin_icon from "./../../../img/linkedin_icon.svg";
import mail_icon from "./../../../img/mail_icon.svg";
import github_icon_hover from "./../../../img/github_icon_hover.svg";
import linkedin_icon_hover from "./../../../img/linkedin_icon_hover.svg";
import mail_icon_hover from "./../../../img/mail_icon_hover.svg";

export default function Footer() {
  return (
    <footer className={cl.footer}>
      <div className={cl.footer__content}>
        <div className={cl.footer__social}>
          <a
            href="https://github.com/vik-tsyplakov/ReactJS_course/tree/course-continuation"
            target="_blank"
          >
            <div className={cl.social__item + ` ` + cl.github_icon}></div>
          </a>
          <a
            href="https://www.linkedin.com/in/viktor-tsyplakov-3716b525a/"
            target="_blank"
          >
            <div className={cl.social__item + ` ` + cl.linkedin_icon}></div>
          </a>
          <a href="mailto:vik.tsyplakov@gmail.com" target="_blank">
            <div className={cl.social__item + ` ` + cl.mail_icon}></div>
          </a>
        </div>
      </div>
    </footer>
  );
}
