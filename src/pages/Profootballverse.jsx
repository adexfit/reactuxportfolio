import React from "react";
import Header from "../components/Header";
import OtherProjects from "../components/OtherProjects";
import { assets } from "../assets/assets";
import { BiUnderline } from "react-icons/bi";

const Profootballverse = () => {
  return (
    <div>
      <Header title="Profootballverse" />
      <section>
        <div className="container two__column">
          <div className="text__column">
            <h2 className="colored_heading">Introduction</h2>
            <p>
              ProFootballVerse is an all-in-one platform designed for football
              enthusiasts to stay updated with real-time scores, engage in
              discussions via chat, read the latest football news, and
              participate in quizzes to test their knowledge. The goal of this
              UX case study is to analyze the design process, user experience
              improvements, and key takeaways from developing this interactive
              platform.
            </p>

            <h2 className="colored_heading">Background</h2>
            <p>
              This project was done for a start-up aiming to create a seamless
              and engaging football experience for fans worldwide. The project
              lasted for two months, and I was the only designer who worked on
              the project.
            </p>
          </div>
          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img src={assets.ProfootBallVersedp} alt="home page picture" />
              </li>
            </ul>
            <figcaption></figcaption>
          </div>
        </div>
      </section>

      <section className="light__background">
        <div className="container two__column">
          <div className="text__column">
            <h2 className="colored_heading">My roles</h2>

            <ol className="list">
              <li>User Research</li>
              <li>Interaction design</li>
              <li>Wireframing</li>
              <li>Prototyping and Testing</li>
            </ol>
          </div>
          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img src={assets.designprocess} alt="design process image" />
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="container two__column">
          <div className="text__column">
            <h3 className="colored_heading">Problem Statement</h3>
            <p>
              Football fans crave a centralized platform where they can discuss
              matches, read football news, and take engaging quizzes. Existing
              platforms are either too fragmented or fail to provide an
              immersive experience that balances discussion, news, and
              interactive quizzes in one place. The goal was to design an
              engaging, user-friendly, and content-rich football platform that
              encourages interaction and community building.
            </p>

            <img src={assets.UXDesign} alt="user journey img" />
          </div>
          <div className="text__column">
            <h3 className="colored_heading">User Research & Insights</h3>
            <p>
              To understand football fans’ behavior and expectations, I
              conducted 7 in-depth user interviews and surveyed 50 football
              enthusiasts across various demographics, including casual fans,
              analysts, and bloggers.
            </p>
            <h6
              style={{
                fontSize: 16,
                fontWeight: 400,
              }}
            >
              Target Audience
            </h6>
            <ul className="list">
              <li>Football fans of all ages</li>
              <li>Users who actively follow real-time matches</li>
              <li>
                Sports enthusiasts who enjoy discussing and debating
                football-related topics
              </li>
              <li>Quiz lovers who want to test their football knowledge</li>
            </ul>
            <br />

            <h6 style={{ fontSize: 16, fontWeight: 400 }}>
              Pain Points Identified:
            </h6>
            <ul className="list">
              <li>
                Switching between multiple apps for scores, news, and
                discussions
              </li>
              <li>
                Difficult to find real-time discussions on ongoing matches.
              </li>
              <li>
                Many football platforms have cluttered UI and overwhelming ads.
              </li>
            </ul>
            <br />
            <h6 style={{ fontSize: 16, fontWeight: 400 }}>Needs:</h6>
            <ul className="list">
              <li>A seamless discussion forum with live match threads.</li>
              <li>A news feed with credible sources and real-time updates.</li>
              <li>
                Interactive football quizzes to test knowledge and engagement.
              </li>
            </ul>
            <br />

            <p>
              Armed with this knowledge, I set out to design an app that would
              address these issues.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container two__column">
          <div className="text__column">
            <h3 className="colored_heading">Personas & User Journey Mapping</h3>
            <h6 style={{ fontSize: 16, fontWeight: 400 }}>
              Persona 1: James - A Die-Hard Football Fan
            </h6>
            <ul className="list">
              <li>Needs: A community space to discuss matches in real time.</li>
              <li>
                Pain Point: Struggles to find quality discussions without
                trolls.
              </li>
              <li>
                Goal: Wants a well-moderated discussion board with real
                insights.
              </li>
            </ul>
            <br />
            <h6 style={{ fontSize: 16, fontWeight: 400 }}>
              Persona 2: Maria - A Casual Football Viewer
            </h6>
            <ul className="list">
              <li>
                Needs: A one-stop platform for news and interactive content.
              </li>
              <li>Pain Point: Gets overwhelmed by complex sports analytics.</li>
              <li>Goal: Wants simple, engaging, and interactive content.</li>
            </ul>
            <p>
              After defining the personas, I mapped their user journeys to
              optimize the navigation flow and content structure.
            </p>
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
                <img src={assets.ego_user_journey} alt="user journey img" />
              </li>
            </ul>
            <figcaption>User Journey Map</figcaption>
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
                <img
                  src={assets.match}
                  alt="borrower information achitecture img"
                />
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
            </ul>
          </div>
          <div className="text__column">
            <h2 className="colored_heading">Wireframe</h2>
            <p>
              One of the key design decisions I made during this phase was to
              create a dashboard for borrowers and lenders. Also, instead of
              joining the features of the two dashboards, I separated them like
              we have on Fiverr (for buyers and sellers). This helps the users
              to focus on the part of the app that is important to them, thereby
              reducing cognition load.
            </p>
          </div>
        </div>
      </section>

      <section className="light__background">
        <div className="container two__column">
          <div className="text__column">
            <h2 className="colored_heading">Design</h2>
            <p>
              With the wireframes finalized, I began the visual design phase of
              the project. I created a style guide that outlined the app's color
              scheme, typography, and iconography. I also created high-fidelity
              mockups of the app, incorporating my visual design choices into
              the wireframes.
            </p>
            <p>
              One of the key challenges I faced during this phase was creating a
              design that was both visually appealing and functional. I wanted
              the app to be easy on the eyes, but also easy to navigate. To
              achieve this, we used a simple color palette and clean typography,
              while also incorporating intuitive iconography and clear calls to
              action.
            </p>
          </div>

          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img src={assets.egogifhd} alt="high fidelity wireframe" />
              </li>
            </ul>
            <figcaption>high-fidelity prototype</figcaption>
          </div>
        </div>
      </section>

      <section>
        <div className="container two__column">
          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img src={assets.egomobile2} alt="high fidelity wireframe" />
              </li>
            </ul>
            <figcaption>mobile app</figcaption>
          </div>

          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img src={assets.egomock2} alt="high fidelity wireframe" />
              </li>
            </ul>
            <figcaption>mobile app</figcaption>
          </div>
        </div>
      </section>

      <section className="light__background">
        <div className="container two__column">
          <div className="text__column">
            <h2 className="colored_heading">User testing</h2>
            <p>
              After completing the design, I conducted user testing to ensure
              that the application was easy to use and met the needs of our
              target audience. I recruited participants who fit our target
              demographic and asked them to perform various tasks using the
              application. Based on their feedback, I made several adjustments
              to the design to improve usability.
            </p>
          </div>
          <div className="text__column">
            <h2 className="colored_heading">Conclusion</h2>
            <p>
              By conducting extensive user research, developing intuitive
              information architecture, creating wireframes and visual designs,
              and conducting user testing, I was able to create an app that is
              both functional and visually appealing. I believe that this app
              has the potential to revolutionize the way borrowers and lenders
              connect, making peer-to-peer lending more accessible and
              convenient than ever before.
            </p>
          </div>
        </div>
      </section>
      <OtherProjects title="ProfootBallVerse" />
    </div>
  );
};

export default Profootballverse;
