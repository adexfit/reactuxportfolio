import React from "react";
import { mySkills } from "../data/data";
import "../components/skill.css";
import { assets } from "../assets/assets";

const Skills = () => {
  return (
    <section className="skills">
      <h1>Skills</h1>
      <div className="container skills__container">
        {mySkills.map((skill) => (
          <div className="skill__card" key={skill.name}>
            <img src={skill.imgSrc} alt={skill.alt} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>

      <div className="certification">
        <h3>Google UX Certification</h3>
        <img src={assets.adexgoogle} alt="Google certification" />
      </div>
    </section>
  );
};

export default Skills;
