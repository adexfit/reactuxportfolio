import React from "react";
import Header from "../components/Header";
import OtherProjects from "../components/OtherProjects";
import { assets } from "../assets/assets";
import { useState } from "react";

const Ethnocopia = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <Header title="Ethnocopia" />

      {/* Modal for expanded image view */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImage} alt="Expanded" />
        </div>
      )}

      <section>
        <div className="container two__column">
          <div className="text__column">
            <h3 className="colored_heading">Project Overview</h3>
            <p>
              Ethnocopia is a culture-focused social platform designed to help
              people from different ethnic backgrounds connect, share stories,
              and learn from one another. The goal of this redesign was to
              improve usability, clarity, and engagement while positioning
              Ethnocopia as a credible alternative to fragmented cultural
              communities on mainstream social platforms.
              <br />
              <br />
              This case study outlines my end-to-end redesign process, from
              research and strategy to execution and outcomes.
            </p>
          </div>
          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img
                  src={assets.ethnohome}
                  alt="home page picture"
                  onClick={() => setSelectedImage(assets.ethnohome)}
                />
              </li>
            </ul>
            <figcaption className="center">
              User feed (click to enlarge)
            </figcaption>
          </div>
        </div>
      </section>

      <section className="light__background">
        <div className="container two__column">
          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img
                  src={assets.designprocess}
                  alt="design process image"
                  onClick={() => setSelectedImage(assets.designprocess)}
                />
              </li>
            </ul>
          </div>
          <div className="text__column">
            <h3 className="colored_heading">My roles</h3>
            <p>
              I led the redesign as the sole product designer, collaborating
              with stakeholders and developers. My responsibilities included:
            </p>

            <ol className="list">
              <li>Planning and conducting usability research</li>
              <li>Running a UX competitive audit</li>
              <li>Defining UX problems and success metrics</li>
              <li>Information architecture and navigation restructuring</li>
              <li>Homepage redesign and interaction patterns</li>
              <li>Low- and high-fidelity design iterations</li>
            </ol>
          </div>
        </div>
      </section>

      <section>
        <div className="container two__column">
          <div className="text__column">
            <h3 className="colored_heading">Problem Statement</h3>
            <p>
              Despite strong positioning around culture and community,
              Ethnocopia struggled with user engagement and retention. Early
              users expressed interest in the mission but found the platform
              difficult to navigate and understand.
              <br />
              The existing experience made it hard for users to:
            </p>
            <ol className="list">
              <li>
                Understand what Ethnocopia offers within the first few seconds
              </li>
              <li>
                Navigate between communities, content, and user interactions
              </li>
              <li>Discover relevant cultural content</li>
              <li>Feel motivated to explore or contribute</li>
            </ol>
          </div>
          <div className="image__column">
            <img
              src={assets.ethpersona1}
              alt="user persona 1"
              onClick={() => setSelectedImage(assets.ethpersona1)}
            />

            <figcaption className="center">
              User Persona 1 (click to enlarge)
            </figcaption>
          </div>
        </div>
      </section>

      <section>
        <div className="container two__column">
          <div className="image__column">
            <img
              src={assets.ethpersona2}
              alt="user persona 2"
              onClick={() => setSelectedImage(assets.ethpersona2)}
            />

            <figcaption>User Persona 2 (click to enlarge)</figcaption>
          </div>
          <div className="image__column">
            <img
              src={assets.ethpersona3}
              alt="user persona 3"
              onClick={() => setSelectedImage(assets.ethpersona3)}
            />

            <figcaption className="center">
              User Persona 3 (click to enlarge)
            </figcaption>
          </div>
        </div>
      </section>

      <section className="light__background">
        <div className="container two__column">
          <div className="text__column">
            <h3 className="colored_heading">User Research & Insights</h3>
            <p>
              I conducted a moderated usability study with participants who
              matched Ethnocopia’s target audience: culture enthusiasts,
              creatives, and socially curious users. Participants were asked to
              complete common tasks such as exploring cultural groups, finding
              content, and understanding the platform’s purpose.
            </p>
            <h5>Key Findings:</h5>
            <ol className="list">
              <li>
                Users struggled to understand the platform’s value proposition
                on arrival
              </li>
              <li>Users felt lost when moving between pages</li>
              <li>
                Most participants struggled to navigate the platform without
                guidance
              </li>
              <li>No strong feedback or confirmation after actions</li>
            </ol>
          </div>
          <div className="text__column">
            <h3 className="colored_heading">Competitive Audit</h3>
            <p>
              I conducted a competitive audit of both direct and indirect
              competitors, including cultural platforms, community forums, and
              social networks with strong group-based interactions.
            </p>
            <h5>Key findings:</h5>
            <ol className="list">
              <li>
                Competitors excelled at clear onboarding and content surfacing
              </li>
              <li>
                Visual storytelling plays a key role in emotional connection
              </li>
              <li>No platform that celebrates ethnicity holistically</li>
              <li>
                No competitor successfully combined deep cultural storytelling
                with modern social UX patterns
              </li>
              <li>
                Ethnocopia had a stronger cultural narrative but weaker UX
                clarity
              </li>
            </ol>
            <p>
              This audit helped me identify gaps and opportunities for
              Ethnocopia to differentiate through cultural depth combined with
              modern UX patterns.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container two__column">
          <div className="text__column">
            <h3 className="colored_heading">Defining the Design Strategy</h3>
            <p>Based on research, I defined the following design goals:</p>
            <ul className="list">
              <li>Make Ethnocopia’s purpose instantly clear</li>
              <li>Reduce cognitive load through simplified navigation</li>
              <li>Improve content discoverability</li>
              <li>Encourage exploration and participation</li>
              <li>Design a scalable foundation for future features</li>
            </ul>
            <p>
              These goals guided every design decision throughout the redesign.
            </p>
            <br />
          </div>

          <div className="text__column">
            <h3 className="colored_heading">
              Information Architecture & Navigation
            </h3>
            <p>
              One of the biggest changes was restructuring the existing
              navigation.
            </p>
            <h5>Key Improvements:</h5>
            <ul className="list">
              <li>
                Simplified top-level navigation to focus on core user goals
              </li>
              <li>
                Renamed navigation items using familiar, task-oriented language
              </li>
              <li>
                Grouped related features to reduce visual and cognitive overload
              </li>
            </ul>
          </div>
        </div>

        <div className="padded">
          <img
            className="img images"
            src={assets.ethnoai}
            alt="Information Architecture"
            onClick={() => setSelectedImage(assets.ethnoai)}
          />

          <figcaption className="center">Information Architecture</figcaption>
        </div>
      </section>

      <section className="light__background">
        <div className="container two__column">
          <div className="text__column">
            <h3 className="colored_heading">Homepage Redesign</h3>
            <p>The homepage redesign was central to the project.</p>
            <h5>Goals:</h5>
            <ul className="list">
              <li>
                Clearly communicate Ethnocopia’s value proposition within
                seconds
              </li>
              <li>Guide first-time users toward meaningful engagement</li>
              <li>Balance inspiration with usability</li>
            </ul>
            <br />

            <h5>Key Design Decisions:</h5>
            <ul className="list">
              <li>
                Introduced a strong hero section explaining what Ethnocopia is
              </li>
              <li>Added a clear primary call-to-action for new users</li>
              <li>
                Surfaced cultural stories and short videos to inspire
                exploration
              </li>
              <li>Used visual hierarchy and spacing to reduce clutter</li>
              <li>Designed modular sections to support future scalability</li>
            </ul>
          </div>

          <div className="image__column">
            <div>
              <img
                className="img images"
                src={assets.ethnohomeproto}
                alt="football img"
                onClick={() => setSelectedImage(assets.ethnohomeproto)}
              />
              <figcaption className="center"> Homepage design</figcaption>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container two__column">
          <div className="image__column">
            <h3 className="colored_heading">Low-fidelity prototype</h3>
            <ul className="images">
              <li className="img">
                <img
                  src={assets.ethnolowfiproto}
                  alt="football img"
                  onClick={() => setSelectedImage(assets.ethnolowfiproto)}
                />
              </li>
            </ul>
            <figcaption>Low-fidelity design</figcaption>
          </div>
          <div className="image__column">
            <h3 className="colored_heading">High-fidelity prototype</h3>
            <ul className="images">
              <li className="img">
                <img
                  src={assets.ethnohifiproto}
                  alt="football img"
                  onClick={() => setSelectedImage(assets.ethnohifiproto)}
                />
              </li>
            </ul>
            <figcaption>High fidelity prototype</figcaption>
          </div>
        </div>
      </section>
      <section className="light__background">
        <div className="container two__column">
          <div className="image__column">
            <h3 className="colored_heading">Before</h3>
            <ul className="images">
              <li className="img">
                <img
                  src={assets.ethnofeedbefore}
                  alt="football img"
                  onClick={() => setSelectedImage(assets.ethnofeedbefore)}
                />
              </li>
            </ul>
            <figcaption>User feed page</figcaption>
          </div>
          <div className="image__column">
            <h3 className="colored_heading">After</h3>
            <ul className="images">
              <li className="img">
                <img
                  src={assets.ethnohome}
                  alt="football img"
                  onClick={() => setSelectedImage(assets.ethnohome)}
                />
              </li>
            </ul>
            <figcaption>User feed page</figcaption>
          </div>
        </div>
      </section>
      <section className="light__background">
        <div className="container two__column">
          <div className="image__column">
            <h3 className="colored_heading">Before</h3>
            <ul className="images">
              <li className="img">
                <img
                  src={assets.ethnobeforegroup}
                  alt="football img"
                  onClick={() => setSelectedImage(assets.ethnobeforegroup)}
                />
              </li>
            </ul>
            <figcaption>Cultural groups page</figcaption>
          </div>
          <div className="image__column">
            <h3 className="colored_heading">After</h3>
            <ul className="images">
              <li className="img">
                <img
                  src={assets.ethnogroup}
                  alt="football img"
                  onClick={() => setSelectedImage(assets.ethnogroup)}
                />
              </li>
            </ul>
            <figcaption>Cultural groups page</figcaption>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container two__column">
          <div className="text__column">
            <h3 className="colored_heading">Validation & Iteration</h3>
            <p>
              After designing the new flows and screens, I validated the
              redesign by walking users through interactive prototypes.
            </p>
            <h5>Results:</h5>
            <ul className="list">
              <li>Users understood the platform’s purpose immediately</li>
              <li>Task completion time was significantly reduced</li>
              <li>Navigation felt intuitive and confidence-inspiring</li>
              <li>
                Participants reported feeling more motivated to explore content
              </li>
            </ul>
            <p>
              These sessions helped me fine-tune labels, spacing, and content
              prioritization before handoff.
            </p>
            <br />
          </div>
          <div className="text__column">
            <h3 className="colored_heading">Outcome & Impact</h3>
            <p>
              The redesign positioned Ethnocopia as a clearer, more engaging
              cultural platform.
            </p>
            <br />
            <h5>Key Outcomes:</h5>
            <ul className="list">
              <li>Improved usability and navigation clarity</li>
              <li>Stronger first impression and value communication</li>
              <li>Increased content discoverability</li>
              <li>Scalable UX foundation for future growth</li>
            </ul>

            <p>
              While long-term metrics are ongoing, early feedback from users and
              stakeholders has been highly positive.
            </p>
          </div>
        </div>
      </section>

      <section className="light__background">
        <div className="container two__column">
          <div className="">
            <h3 className="colored_heading">Conclusion</h3>
            <p>
              The Ethnocopia redesign was an opportunity to transform a
              meaningful idea into a usable, scalable product experience. By
              grounding design decisions in research and focusing on clarity, I
              was able to realign the platform with both user needs and business
              goals. This case study reflects my approach as a product designer:
              strategic, research-driven, and deeply focused on user experience
              outcomes.
            </p>
          </div>
          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img
                  src={assets.ethnoanalytics}
                  alt="high fidelity wireframe"
                  onClick={() => setSelectedImage(assets.ethnoanalytics)}
                />
              </li>
            </ul>
            <figcaption>Admin Dashboard design</figcaption>
          </div>
        </div>
      </section>

      <OtherProjects title="Ethnocopia" />
    </div>
  );
};

export default Ethnocopia;
