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
              UX case study is to analyze the design challenges, user experience
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
              Football fans often struggle to find a single, seamless platform
              that provides real-time scores, interactive discussions, and
              engaging content. Current solutions are often fragmented,
              requiring users to switch between multiple apps or websites.
              ProFootballVerse aims to bridge this gap by integrating these
              essential features into one cohesive experience.
            </p>

            <img src={assets.UXDesign} alt="user journey img" />
          </div>
          <div className="text__column">
            <h3 className="colored_heading">User Research & Insights</h3>
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
              <li>Delayed updates and unreliable sources</li>
              <li>Lack of engagement with other fans during live matches</li>
              <li>Uninspiring quiz formats with repetitive questions</li>
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
            <h3 className="colored_heading">Design Goals</h3>
            <ul className="list">
              <li>
                Seamless real-time experience: Ensure live scores are updated
                instantly without lag.
              </li>
              <li>
                Engaging community interaction: Provide an intuitive and dynamic
                chat experience.
              </li>
              <li>
                Comprehensive football news: Curate reliable and up-to-date news
                articles.
              </li>
              <li>
                Interactive and fun quizzes: Design an engaging quiz experience
                with dynamic difficulty levels.
              </li>
            </ul>
          </div>

          <div className="text__column">
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
            <h2 className="colored_heading">Information Architecture</h2>
            <p>
              With the research findings in hand, I began to develop the
              information architecture of the app. I created a sitemap that
              outlined the various features and functions of the app, including
              borrower profiles, lender profiles, loan listings, and payment
              processing. I also mapped out the user flows for each feature,
              ensuring that the app was intuitive and easy to use
            </p>
          </div>

          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img
                  src={assets.borrowerai}
                  alt="borrower information achitecture img"
                />
              </li>
              <li className="img">
                <img
                  src={assets.investorsai}
                  alt="investor information achitecture img"
                />
              </li>
            </ul>
            <figcaption>Information architecture</figcaption>
          </div>
        </div>
      </section>

      <section>
        <div className="container two__column">
          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img src={assets.digitalegowire} alt="digital wireframe" />
              </li>
              <li className="img">
                <img src={assets.egogif} alt="low fidelity prototype" />
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
            <ul className="images">
              <li className="img">
                <img src={assets.paperwireego} alt="paper wireframe" />
              </li>
            </ul>
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
