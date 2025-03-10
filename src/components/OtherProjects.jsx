import React from "react";
import { projectList } from "../data/data";
import { Link } from "react-router-dom";

const OtherProjects = ({ title }) => {
  return (
    <section className="portfolio">
      <h2> Other Projects</h2>
      <div className="container portfolio__container">
        {projectList
          .filter((proj) => proj.title != title)
          .map((proj) => (
            <article
              className="project proj-case-studues"
              id={proj.title}
              data-name="ux"
              key={proj.title}
            >
              <div className="project__image">
                <img src={proj.imgSrc} alt="" />
              </div>
              <div className="project__info">
                <h4>{proj.title}</h4>
                <p>{proj.desc}</p>
                <Link
                  to={proj.pageLink}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Read More
                </Link>{" "}
                <br />
                <br />
                {proj.hosted ? (
                  <>
                    {/* <Link to={proj.netlify} target="_blank" className="hoverLink">
                Live link
              </Link> */}
                  </>
                ) : (
                  ""
                )}
              </div>
            </article>
          ))}
      </div>
    </section>
  );
};

export default OtherProjects;
