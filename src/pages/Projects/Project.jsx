import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import "../Projects/project.css";
import { projectList } from "../../data/data";
import { devprojectList } from "../../data/data";
import AppScrollContext from "../../contexts/AppScrollContext";
import ImageGallery from "../../components/ImageGallery";

const Project = () => {
  const { scrollToContact, scrollToDivRef, scrollToProject, scrollToProjRef } =
    useContext(AppScrollContext);

  const tabs = ["uiux" , "graphics", "frontend"]; //
  const [activeTab, setActiveTab] = useState("uiux"); //tabs[0]
  return (
    <section className="portfolio" ref={scrollToProjRef}>
      <h2> Projects</h2>
      <div className="pill-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`pill-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div
        className={`container  ${
          activeTab !== "graphics" ? "portfolio__container" : ""
        }`}
      >
        {activeTab === "uiux" ? (
          projectList.map((proj) => (
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
          ))
        ) : activeTab === "frontend" ? (
          devprojectList.map((proj) => (
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
                  to={proj.github}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Github
                </Link>{" "}
                <br />
                <br />
                {proj.hosted ? (
                  <>
                    <Link
                      to={proj.netlify}
                      target="_blank"
                      className="hoverLink"
                    >
                      Live link
                    </Link>
                  </>
                ) : (
                  ""
                )}
              </div>
            </article>
          ))
        ) : (
          <ImageGallery />
        )}
      </div>
    </section>
  );
};

export default Project;
