import React from "react";
import Header from "../components/Header";
import OtherProjects from "../components/OtherProjects";
import { assets } from "../assets/assets";
import { useState } from "react";

const Boozle = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div>
      <Header title="Boozle" />
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImage} alt="Expanded" />
        </div>
      )}
      <section>
        <div className="container two__column">
          <div className="text__column">
            <h2 className="colored_heading">Introduction</h2>
            <p>
              Libraries have been a cornerstone of education and knowledge
              acquisition for centuries. However, with the advent of technology,
              libraries have had to adapt to keep up with the changing times.
              This is where the library management mobile app comes in. In this
              case study, we will explore my design process of a library
              management mobile app, from user research to final product.
            </p>

            <h2 className="colored_heading">Background</h2>
            <p>
              My client was a local library that wanted to develop an app to
              manage their readers and the book reservation process . They
              wanted an app that would allow readers to easily reserve book from
              the comfort of their houses and pick them up at the library when
              they are available. The app needed to be intuitive and visually
              appealing.
            </p>
            <p>
              This project lasted 1 month, and I was the only product designer
              who worked on it.
            </p>
          </div>
          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img
                  src={assets.boozle_home}
                  height="450px"
                  width="auto"
                  alt="home page picture"
                  onClick={() => setSelectedImage(assets.boozle_home)}
                />
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
              <li>Research</li>
              <li>Wireframing</li>
              <li>User interface design</li>
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
                  src={assets.boozle_problem_statement}
                  alt="problem statement image"
                  onClick={() =>
                    setSelectedImage(assets.boozle_problem_statement)
                  }
                />
              </li>
              <li className="img">
                <img
                  src={assets.boozle_goal_statement}
                  alt="goal statement image"
                  onClick={() => setSelectedImage(assets.boozle_goal_statement)}
                />
              </li>
            </ul>
          </div>
          <div className="text__column">
            <h3 className="colored_heading">User Research</h3>
            <p>
              A qualitative user research was conducted using 7 participants who
              are regular readers at the library to empathize with them and
              identify their pain points. Participants were selected from all
              tribes of Nigeria to avoid sample bias and they were interviewed
              physically using a research script.
            </p>
            <p>The following are the painpoints I noted from the interview:</p>
            <ul className="list">
              <li>Limited time to visit physical libraries</li>
              <li>Difficulties in finding reliable book recommendations</li>
              <li>Difficulties interacting with other users</li>
              <li>Difficulty remembering the authors and titles to read.</li>
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
                <img
                  src={assets.boozle_persona}
                  alt="Persona img"
                  onClick={() => setSelectedImage(assets.boozle_persona)}
                />
              </li>
            </ul>
            <figcaption>Persona</figcaption>
          </div>

          <div className="image__column"></div>
        </div>
      </section>

      <section className="light__background">
        <div className="container two__column">
          <div className="text__column">
            <h2 className="colored_heading">Information Architecture</h2>
            <p>
              With our research in hand, I began to develop the information
              architecture of the app. I created a sitemap that outlined the
              various features and functions of the app, including catalog
              search, book reservation, discussion, reading list, and collection
              management. I also mapped out the user flows for each feature,
              ensuring that the app was intuitive and easy to use.
            </p>
          </div>

          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img
                  src={assets.ai_boozle}
                  alt="Information architecture"
                  onClick={() => setSelectedImage(assets.ai_boozle)}
                />
              </li>
            </ul>
            <figcaption>Information architecture</figcaption>
          </div>
        </div>
        <section>
          <div className="container two__column">
            <div className="image__column">
              <ul className="images">
                <li className="img">
                  <img
                    src={assets.userflowprofile}
                    alt="user flow"
                    onClick={() => setSelectedImage(assets.userflowprofile)}
                  />
                </li>
              </ul>
              <figcaption>user flow for editing profile</figcaption>
            </div>

            <div className="image__column">
              <ul className="images">
                <li className="img">
                  <img
                    src={assets.userflowdiscussion}
                    alt="user flow img"
                    onClick={() => setSelectedImage(assets.userflowdiscussion)}
                  />
                </li>
              </ul>
              <figcaption>User flow for discussions</figcaption>
            </div>
          </div>
        </section>
      </section>

      <section>
        <div className="container two__column">
          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img
                  src={assets.paper1boo}
                  height="300px"
                  width="auto"
                  id="img_special"
                  alt="paper wireframe 1"
                  onClick={() => setSelectedImage(assets.paper1boo)}
                />
                <img
                  src={assets.paper2boo}
                  height="300px"
                  width="auto"
                  id="img_special"
                  alt="paper wireframe 2"
                  onClick={() => setSelectedImage(assets.paper2boo)}
                />
              </li>
            </ul>
          </div>

          <div className="text__column">
            <h2 className="colored_heading">Wireframe</h2>
            <p>
              After creating the information architecture and user flow, I
              created wireframes of the app. Wireframes are low-fidelity mockups
              that outline the basic layout and functionality of an app. This
              was used for the usability studies which helped me to test my
              ideas and get feedback from users.
            </p>

            <p>
              One of the key design decisions I made during this phase was to
              incorporate a search bar to the homepage which allows the user to
              quickly search for books. I added a feature that allows users to
              save interesting books to their reading list and also reserve them
              whenever they are ready to read them.
            </p>
            <ul className="images">
              <li className="img">
                <img
                  src={assets.digital1boo}
                  id="img_special"
                  alt="digital wireframe 1"
                  onClick={() => setSelectedImage(assets.digital1boo)}
                />
                <img
                  src={assets.digital2boo}
                  id="img_special"
                  alt="digital wireframe 2"
                  onClick={() => setSelectedImage(assets.digital2boo)}
                />
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="container two__column">
          <div className="text__column">
            <h2 className="colored_heading">Design</h2>
            <p>
              After finalizing the wireframes, I started the high-fidelity
              design. I created a design system for the project. I used a
              4-point vertical grid system for the design and a simple color
              palette.
            </p>
            <p>
              I avoided the use of too many colors to avoid having an ugly
              interface after uploads of various book covers with different
              colors.
            </p>
          </div>

          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img src={assets.mock1} alt="Mockups" id="img_special" />
                <img
                  src={assets.digital2boo}
                  alt="high fidelity wireframe"
                  id="img_special"
                  onClick={() => setSelectedImage(assets.digital2boo)}
                />
              </li>
            </ul>
            <figcaption>Mockups</figcaption>
          </div>
        </div>

        <div className="container two__column">
          <div>
            <ul className="images">
              <li className="img">
                <img
                  src={assets.mock3}
                  alt="high fidelity wireframe"
                  id="img_special"
                  onClick={() => setSelectedImage(assets.mock3)}
                />
                <img
                  src={assets.mock4}
                  alt="high fidelity wireframe"
                  id="img_special"
                  onClick={() => setSelectedImage(assets.mock4)}
                />
              </li>
            </ul>
            <figcaption>Mockups</figcaption>
          </div>
          <div>
            <ul className="images">
              <li className="img">
                <img
                  src={assets.mock5}
                  alt="high fidelity wireframe"
                  id="img_special"
                  onClick={() => setSelectedImage(assets.mock5)}
                />
                <img
                  src={assets.mock6}
                  alt="high fidelity wireframe"
                  id="img_special"
                  onClick={() => setSelectedImage(assets.mock6)}
                />
              </li>
            </ul>
            <figcaption>Mockups</figcaption>
          </div>
        </div>
      </section>

      <section className="light__background">
        <div className="container two__column">
          <div className="text__column">
            <h2 className="colored_heading">User testing</h2>
            <p>
              I recruited several users to test the app to be sure it was easy
              to use. The users were able to complete the tasks given with ease.
            </p>
          </div>
          <div className="text__column">
            <h2 className="colored_heading">Conclusion</h2>
            <p>
              In conclusion, designing this app required a deep understanding of
              user needs and behavior. By conducting extensive user research,
              developing intuitive information architecture, creating wireframes
              and visual designs, and conducting user testing, I was able to
              create an app that is both functional and visually appealing.
            </p>
          </div>
        </div>
      </section>
      <OtherProjects title="Boozle" />
    </div>
  );
};

export default Boozle;
