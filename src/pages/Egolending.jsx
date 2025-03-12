import React from "react";
import Header from "../components/Header";
import OtherProjects from "../components/OtherProjects";
import { assets } from "../assets/assets";

const Egolending = () => {
  return (
    <div>
      <Header title="Egolending" />

      <section>
        <div className="container two__column">
          <div className="text__column">
            <h2 className="colored_heading">Introduction</h2>
            <p>
              The UI/UX design process is crucial when developing a peer-to-peer
              lending app. A well-designed app can enhance the user experience,
              increase trust, and improve communication between lenders and
              borrowers. In this case study, I will discuss my UI/UX design
              process for a peer-to-peer lending web app.
            </p>

            <h2 className="colored_heading">Background</h2>
            <p>
              My client was a startup that wanted to develop a peer-to-peer
              lending web app. They wanted an app that would allow lenders to
              invest in loans and borrowers to access funding quickly and
              easily. The app needed to be intuitive, visually appealing, and
              accessible on desktop and mobile devices.
            </p>
            <p>
              This project lasted 4 months (December, 2022 - March, 2023) , and
              I was the only product designer who worked on it.
            </p>
          </div>
          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img src={assets.egolendingdp} alt="home page picture" />
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
            <ul className="images">
              <li className="img">
                <img
                  src={assets.problem_statement_ego}
                  alt="problem statement image"
                />
              </li>
              <li className="img">
                <img
                  src={assets.ego_goal_statement}
                  alt="goal statement image"
                />
              </li>
            </ul>
          </div>
          <div className="text__column">
            <h3 className="colored_heading">User Research</h3>
            <p>
              The first step in designing any user interface is understanding
              the needs of the users. I conducted extensive user research to
              identify the pain points and challenges faced by borrowers and
              lenders in the peer-to-peer lending industry. I conducted surveys
              and interviews to gather data on user behavior and preferences.
            </p>
            <p>
              One of the key insights I gained from the research was that
              borrowers often struggle with finding lenders who are willing to
              fund their loans. Lenders, on the other hand, often find it
              difficult to identify trustworthy borrowers. Other painpoints
              include the following:
            </p>

            <ul className="list">
              <li>Difficulty getting guarantors for loan</li>
              <li>Difficulty getting collaterals for loans</li>
              <li>High interest rates on loans</li>
              <li>Stressful loan application process</li>
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
          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img src={assets.ego_persona} alt="Persona img" />
              </li>
            </ul>
            <figcaption>Persona</figcaption>
          </div>

          <div className="image__column">
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

      <OtherProjects title="Egolending" />
    </div>
  );
};

export default Egolending;
