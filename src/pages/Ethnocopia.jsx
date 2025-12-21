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
            <h2 className="colored_heading">Project Overview</h2>
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
            <figcaption>User feed (click to enlarge)</figcaption>
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
            <h2 className="colored_heading">My roles</h2>
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
            <h2 className="colored_heading">Problem Statement</h2>
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

            <figcaption>User Persona 1 (click to enlarge)</figcaption>
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

            <figcaption>User Persona 3 (click to enlarge)</figcaption>
          </div>
        </div>
      </section>

      <section className="light__background">
        <div className="container two__column">
          <div className="text__column">
            <h2 className="colored_heading">User Research & Insights</h2>
            <p>
              I conducted a moderated usability study with participants who
              matched Ethnocopia’s target audience: culture enthusiasts,
              creatives, and socially curious users. Participants were asked to
              complete common tasks such as exploring cultural groups, finding
              content, and understanding the platform’s purpose.
            </p>
            <h4>Key Findings:</h4>
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
            <h2 className="colored_heading">Competitive Audit</h2>
            <p>
              I conducted a competitive audit of both direct and indirect
              competitors, including cultural platforms, community forums, and
              social networks with strong group-based interactions.
            </p>
            <h4>Key findings:</h4>
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
            <h3 className="colored_heading">Wireframing & Prototyping</h3>
            <p>
              I started with low-fidelity wireframes to outline the core
              structure, focusing on:
            </p>
            <ul className="list">
              <li>
                A homepage with trending discussions, latest news, and quizzes.
              </li>
              <li>
                A discussion forum with match-specific threads and live updates.
              </li>
              <li>
                A news section with categorized and personalized articles.
              </li>
              <li>
                A quiz module for football trivia and prediction challenges.
              </li>
            </ul>
            <ul className="images">
              <li className="img">
                <img src={assets.wirefootball} alt="wireframe img" />
              </li>
            </ul>
            <figcaption>Wireframe</figcaption>
          </div>
        </div>
      </section>

      <section className="light__background">
        <div className="container two__column">
          <div className="text__column">
            <h2 className="colored_heading">High-Fidelity Prototyping</h2>
            <p>
              Based on initial feedback, I developed high-fidelity prototypes in
              Figma, incorporating:
            </p>
            <ul className="list">
              <li>Live Match Discussion Threads with real-time comments.</li>
              <li>
                Personalized News Feed based on favorite teams and leagues.
              </li>
              <li>
                Interactive Football Quizzes with leaderboards and rewards.
              </li>
            </ul>
          </div>

          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img src={assets.profootballgif} alt="football img" />
              </li>
            </ul>
            <figcaption>Hi fidelity design</figcaption>
          </div>
        </div>
      </section>

      <section>
        <div className="container two__column">
          <div className="text__column">
            <h2 className="colored_heading">Usability Testing & Iterations</h2>
            <h5>Usability Test Goals:</h5>
            <ul className="list">
              <li>
                Is the navigation intuitive for both casual and hardcore fans?
              </li>
              <li>
                Can users easily switch between discussions, news, and quizzes?
              </li>
              <li>
                How well does the mobile version perform for on-the-go users?
              </li>
            </ul>
            <br />
            <h5>Results:</h5>
            <ul className="list">
              <li>85% of users found the discussion board layout intuitive.</li>
              <li>Some users requested a dark mode for better readability.</li>
              <li>
                Mobile responsiveness needed improvement for smaller screens.
              </li>
            </ul>
          </div>
          <div className="text__column">
            <h2 className="colored_heading">Iteration Changes:</h2>
            <ul className="list">
              <li>Improved thread organization and filtering options.</li>
              <li>Some users requested a dark mode for better readability.</li>
              <li>Optimized mobile responsiveness with a collapsible menu.</li>
              <li>
                Tab navigation was implemented for mobile screens for easy
                navigation.
              </li>
            </ul>{" "}
            <br />
            <h2 className="colored_heading">Final UI Design:</h2>
            <h5>Key Features</h5>
            <ul className="list">
              <li>Real-time discussion forums with match-specific threads.</li>
              <li>Trending football news with personalized content.</li>
              <li>Interactive quizzes with leaderboards and rewards.</li>
              <li>User profiles with team preferences and achievements.</li>

              <li>Mobile-friendly design for an optimal experience.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="light__background">
        <div className="container two__column">
          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img
                  src={assets.profootballtable}
                  alt="high fidelity wireframe"
                />
              </li>
            </ul>
            <figcaption>high-fidelity design</figcaption>
          </div>
          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img
                  src={assets.profootballchat}
                  alt="high fidelity wireframe"
                />
              </li>
            </ul>
            <figcaption>high-fidelity design</figcaption>
          </div>
        </div>
      </section>

      <section>
        <div className="container two__column">
          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img src={assets.mobilechat} alt="high fidelity wireframe" />
              </li>
            </ul>
            <figcaption>mobile app</figcaption>
          </div>

          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img
                  src={assets.mobileHome}
                  alt="high fidelity wireframe"
                  height={563}
                />
              </li>
            </ul>
            <figcaption>mobile app</figcaption>
          </div>
        </div>
      </section>
      <section className="light__background">
        <div className="container two__column">
          <div className="text__column">
            <h2 className="colored_heading">Outcome & Impact</h2>
            <h5>Usability Test Goals:</h5>
            <ul className="list">
              <li>
                Increased engagement by 60% during live matches (based on user
                testing).
              </li>
              <li>
                Enhanced retention through personalized news and interactive
                content.
              </li>
              <li>
                Positive feedback from early users on ease of use and
                navigation.
              </li>
            </ul>
            <br />
            <h5>Lessons Learned & Next Steps</h5>
            <ul className="list">
              <li>
                Balancing content and engagement is crucial for community
                platforms.
              </li>
              <li>
                Real-time interaction features need scalability for peak traffic
                times.
              </li>
              <li>
                User customization (team-based news, quiz categories) boosts
                retention.
              </li>
            </ul>
          </div>
          <div className="text__column">
            <h2 className="colored_heading">Next Steps:</h2>
            <ul className="list">
              <li>Implement AI-driven content recommendations.</li>
              <li>Introduce live match prediction challenges.</li>
              <li>Expand social sharing features for wider reach.</li>
            </ul>{" "}
            <br />
          </div>
        </div>
      </section>

      <OtherProjects title="Ethnocopia" />
    </div>
  );
};

export default Ethnocopia;
