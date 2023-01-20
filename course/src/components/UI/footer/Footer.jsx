import React from "react";
import cl from "./Footer.module.css";
import github_icon from "./../../../img/github_icon.svg";
import linkedin_icon from "./../../../img/linkedin_icon.svg";
import mail_icon from "./../../../img/mail_icon.svg";

export default function Footer() {
  return (
    <footer className={cl.footer}>
      <div className={cl.footer__content}>
        <div className={cl.footer__social}>
          <div className={cl.social__item}>
            <a
              href="https://github.com/vik-tsyplakov/ReactJS_course/tree/course-continuation"
              target="_blank"
            >
              <img className={cl.social__item} src={github_icon} alt="github" />
            </a>
          </div>
          <div className={cl.social__item}>
            <a
              href="https://www.linkedin.com/in/viktor-tsyplakov-3716b525a/"
              target="_blank"
            >
              <img
                className={cl.social__item}
                src={linkedin_icon}
                alt="linkedin"
              />
            </a>
          </div>
          <div className={cl.social__item}>
            <a href="mailto:vik.tsyplakov@gmail.com" target="_blank">
              <img src={mail_icon} alt="mail" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
