import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./AboutProject.css";

function AboutProject() {
  const data = {
    width: "20",
    completedText: "1 неделя",
    remainingText: "4 недели",
    completedSubText: "Back-end",
    remainingSubText: "Front-end"
  };
  return (
    <section id="about-project" className="about-project">
      <h2 className="section-title about-project__section-title">О проекте</h2>
      <div className="about-project__columns">
        <div className="about-project__column">
          <h3 className="about-project__title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__description">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__column">
          <h3 className="about-project__title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__description">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <ProgressBar {...data} />
    </section>
  );
}
export default AboutProject;
