import React from "react";
import Header from "../components/Header";
import OtherProjects from "../components/OtherProjects";
import { assets } from "../assets/assets";

const KanbanBoard = () => {
  return (
    <div>
      <Header title="Kanban Board" />
      <section>
        <div className="container two__column">
          <div className="text__column">
            {/* <h2 className="colored_heading">Project Overview</h2> */}
            <ul className="list">
              <li>Project Name: Kanban Board</li>
              <li>Role: UX/UI Designer</li>
              <li>Tools Used: Figma, Adobe Illustrator</li>
              <li>Timeline: 6 weeks</li>
              <li>
                Team: Solo designer collaborating with developers and product
                managers
              </li>
            </ul>
          </div>
          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img src={assets.emptyDashboard} alt="home page picture" />
              </li>
            </ul>
            <figcaption></figcaption>
          </div>
        </div>
      </section>

      <section className="light__background">
        <div className="container two__column">
          <div className="text__column">
            <h2 className="colored_heading">Problem Statement</h2>
            <p>
              Startups often struggle with managing tasks efficiently due to the
              lack of a streamlined workflow system. Existing Kanban tools are
              either too complex for small teams or lack essential features. The
              goal was to design an intuitive, lightweight, and visually
              appealing Kanban board that balances functionality with ease of
              use.
            </p>
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
            <h3 className="colored_heading">User Research</h3>
            <p>
              To understand the needs and pain points of users, I conducted 5
              user interviews and surveyed 20 startup employees across various
              roles, including project managers, developers, and designers. Here
              are the key findings.
            </p>
            <h5 className="">Pain Points:</h5>
            <ul className="list">
              <li>Overly complex Kanban tools with too many features.</li>
              <li>Lack of mobile-friendly versions.</li>
              <li>Poor task tracking and visibility for remote teams.</li>
            </ul>
            <h5 className="">Needs:</h5>
            <ul className="list">
              <li>A simple drag-and-drop interface.</li>
              <li>Clear status indicators.</li>
              <li>Integration with existing tools like Slack and Notion.</li>
            </ul>
          </div>
          <div className="text__column">
            <h3 className="colored_heading">Personas & User Journey Mapping</h3>
            <h5>Persona 1: Lisa - Project Manager</h5>
            <ul className="list">
              <li>Needs: Quick task overview, delegation tools.</li>
              <li>Pain Point: Spends too much time updating tasks manually.</li>
              <li>Goal: Wants an easy way to track project progress.</li>
            </ul>
            <br />
            <h5>Persona 2: Jake - Developer</h5>
            <ul className="list">
              <li>Needs: A clear view of tasks assigned to him.</li>
              <li>Pain Point: Cluttered Kanban boards slow down workflow.</li>
              <li>Goal: Wants a minimalist UI with necessary details only.</li>
            </ul>
            <p>
              After defining the personas, I mapped their user journeys to
              understand touchpoints and friction areas.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container two__column">
          <div className="text__column">
            <h3 className="colored_heading">Wireframing & Prototyping</h3>
            <p>
              I started with low-fidelity wireframes in Figma to outline the
              structure, focusing on:
            </p>
            <ul className="list">
              <li>A four-column layout (To-Do, Doing, Done, Archive).</li>
              <li>A task card system with priority labels and due dates.</li>
              <li>A quick-add task feature for fast input.</li>
            </ul>
          </div>

          <div className="text__column">
            <ul className="images">
              <li className="img">
                <img src={assets.wirekanban} alt="wireframe" />
              </li>
            </ul>
            <figcaption>Wireframe</figcaption>
          </div>
        </div>
      </section>

      <section className="light__background">
        <div className="container two__column">
          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img
                  src={assets.Kanbanboard}
                  alt="borrower information achitecture img"
                />
              </li>
            </ul>
            <figcaption>Hi-Fidelity design</figcaption>
          </div>
          <div className="text__column">
            <p>
              After receiving initial feedback, I developed high-fidelity
              prototypes in Figma, incorporating:
            </p>
            <ul className="list">
              <li>A drag-and-drop task management system.</li>
              <li>Color-coded priority labels (High, Medium, Low).</li>
              <li>Collaboration features (comments, @mentions).</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="container two__column">
          <div className="text__column">
            <h2 className="colored_heading">Usability Testing & Iterations</h2>
            <h5>Usability Test Goals:</h5>
            <ul className="list">
              <li>Can users easily create, move, and complete tasks?</li>
              <li>Is the navigation intuitive?</li>
              <li>How well does it work across devices?</li>
            </ul>
            <br />
            <h5>Results:</h5>
            <ul className="list">
              <li>80% of users found the drag-and-drop feature intuitive.</li>
              <li>Some users requested a dark mode for better readability.</li>
              <li>
                Minor confusion regarding task status visibility led to improved
                design changes.
              </li>
            </ul>
          </div>

          <div className="text__column">
            <h2 className="colored_heading">Usability Testing & Iterations</h2>
            <h5>Iteration Changes:</h5>
            <ul className="list">
              <li>Improved contrast and readability.</li>
              <li>Added tooltips for first-time users.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="light__background">
        <div className="container two__column">
          <div className="text__column">
            <h2 className="colored_heading">Final UI Design</h2>
            <h5>Key Features:</h5>
            <ul className="list">
              <li>Simple drag-and-drop functionality</li>
              <li>Minimalist UI with color-coded tasks</li>
              <li>Real-time collaboration & comments</li>
              <li>Task filtering & search functionality</li>
              <li>Mobile-responsive design</li>
            </ul>
          </div>

          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img src={assets.finalkanban} alt="high fidelity wireframe" />
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
                <img src={assets.deleteColumn} alt="high fidelity design" />
              </li>
            </ul>
            <figcaption>mobile app</figcaption>
          </div>

          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img src={assets.newkanban} alt="high fidelity wireframe" />
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="light__background">
        <div className="container two__column">
          <div className="text__column">
            <h2 className="colored_heading">Outcome & Impact</h2>
            <ul className="list">
              <li>
                Increased task management efficiency by 40% based on user
                feedback.
              </li>
              <li>
                Reduced onboarding time by designing an intuitive interface.
              </li>
              <li>
                Received positive feedback from early adopters on ease of use
                and clarity.
              </li>
            </ul>
          </div>
          <div className="text__column">
            <h2 className="colored_heading">Lessons Learned & Next Steps</h2>
            <ul className="list">
              <li>
                Simplicity wins – Avoid overloading users with too many
                features.
              </li>
              <li>Mobile-first approach is critical for remote teams.</li>
              <li>Continuous iteration based on feedback is key.</li>
            </ul>
            <br />
            <h5>Next Steps:</h5>
            <ul className="list">
              <li>Implement AI-powered task suggestions.</li>
              <li>Introduce customizable workflow templates.</li>
            </ul>{" "}
            <br />
            <h5>Conclusion</h5>
            <p>
              This case study showcases how I used a user-centered design
              approach to design a functional and intuitive Kanban board. If
              you'd like to discuss this project further, feel free to reach
              out!
            </p>
          </div>
        </div>
      </section>
      <OtherProjects title="Kanban Board" />
    </div>
  );
};

export default KanbanBoard;
