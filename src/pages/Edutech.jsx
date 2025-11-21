import React from "react";
import Header from "../components/Header";
import OtherProjects from "../components/OtherProjects";
import { assets } from "../assets/assets";
import { BiUnderline } from "react-icons/bi";

const EduTech = () => {
  return (
    <div>
      <Header title="EduTech" />
      <section>
        <div className="container two__column">
          <div className="text__column">
            <h2 className="colored_heading">Introduction</h2>
            <p>
              EduTech is a web-based school management platform that helps
              teachers manage their students more efficiently and enables
              schools to oversee both students and staff. I led the end-to-end
              design of this project with the goal of simplifying academic
              administration, improving communication, and giving educators more
              time to focus on teaching rather than paperwork.
            </p>

            <h2 className="colored_heading">Project Context</h2>
            <p>
              This project was done for a start-up in Nigeria. It lasted for a
              year during which I collaborated with a product manager, two
              frontend developers and two backend developers.
            </p>
          </div>
          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img src={assets.eduproto} alt="home page picture" />
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
              <li>UX Research</li>
              <li>Interaction Design</li>
              <li>UI Design</li>
              <li>Prototyping</li>
              <li>Usability Testing</li>
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
            <h3 className="colored_heading">Project goals</h3>
            <p>
              Build an intuitive, scalable platform that supports the daily
              workflows of:
              <ul className="list">
                <li>
                  <b>Teachers:</b> managing students, attendance, classes, and
                  performance
                </li>
                <li>
                  <b>Schools:</b> managing teachers, students, departments, and
                  overall academic operations
                </li>
              </ul>
            </p>

            {/* <img src={assets.UXDesign} alt="user journey img" /> */}
          </div>
          <div className="text__column">
            <h3 className="colored_heading">Problem Statement</h3>
            <p>
              During discovery, I observed that most schools rely heavily on
              fragmented tools like spreadsheets, WhatsApp groups, and paper
              records. This created several challenges:
              <ul className="list">
                <li>Time-consuming administrative tasks</li>
                <li>Limited visibility into student performance</li>
                <li>Manual processes prone to human error</li>
                <li>
                  Inefficient workflow for teachers juggling multiple classes
                </li>
                <li>No unified source of truth for school-wide operations</li>
              </ul>
            </p>
            <p>
              I defined the core problem as: <br />
              <i>
                Teachers and administrators need a centralized system that
                simplifies daily workflows, improves visibility, and makes
                academic management more efficient.
              </i>
            </p>

            <br />
          </div>
        </div>
      </section>

      <section className="light__background">
        <div className="container two__column">
          <div className="text__column">
            <h3 className="colored_heading">Research Approach</h3>
            <h6 style={{ fontSize: 16, fontWeight: 400 }}>
              User Groups Identified
            </h6>
            <ul className="list">
              <li>Teachers</li>
              <li>School Administrators</li>
              <li>Department Heads</li>
            </ul>
            <br />
            <h6 style={{ fontSize: 16, fontWeight: 400 }}>Methods I Used</h6>
            <ul className="list">
              <li>Stakeholder interviews</li>
              <li>Competitive analysis of existing EduTech platforms</li>
              <li>Contextual inquiry in real classroom settings</li>
            </ul>

            <br />
          </div>

          <div className="text__column">
            <h3 className="colored_heading">Key Insights I Uncovered</h3>
            <ul className="list">
              <li>
                Teachers value speed above all — “I don’t have time to click
                through five screens to mark attendance.”
              </li>
              <li>
                Admins need real-time visibility into student and teacher
                activity.
              </li>
              <li>
                Many platforms in the market are either too cluttered or too
                technical.
              </li>
              <li>
                Mobile responsiveness is essential due to inconsistent access to
                laptops.
              </li>
            </ul>
            <p>These insights shaped my design direction and UX priorities.</p>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container two__column">
          <div className="text__column">
            <h3 className="colored_heading">Information Architecture</h3>
            <p>
              I designed two role-specific experiences:
              <ul className="list">
                <li>Teacher Dashboard</li>
                <li>School Admin Dashboard</li>
              </ul>
            </p>
            <p>
              Other IA choices included:
              <ul className="list">
                <li>Role-based permissions</li>
                <li>
                  Modular navigation grouped by tasks (Students, Teachers,
                  Classes, Reports)
                </li>
                <li>Global search for quick access to records</li>
                <li>Notification center for reminders and announcements</li>
              </ul>
            </p>
          </div>
          <div className="text__column">
            <h3 className="colored_heading">Wireframing</h3>
            <p>
              After defining the information architecture and identifying key
              workflows, I moved into wireframing to explore layout
              possibilities and interaction patterns. I started with
              low-fidelity sketches to quickly test ideas around navigation,
              dashboard structure, and task flows like attendance marking and
              student management. These sketches helped me collaborate closely
              with the product manager and engineering team before committing to
              visual direction.
            </p>
            <p>
              Once the core structure felt solid, I created mid-fidelity
              wireframes in Figma. These allowed me to refine hierarchy, content
              grouping, and task efficiency without getting distracted by visual
              details. Through several iterative rounds, I validated the flow of
              key features—such as class management, student profiles, teacher
              directory, and reporting. These wireframes later became the
              foundation for usability testing and guided the transition into
              high-fidelity UI design.
            </p>
          </div>
        </div>
      </section>

      <section className="light__background">
        <div className="container two__column">
          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img src={assets.Match} alt="football img" />
              </li>
            </ul>
            <figcaption>low fidelity wireframe</figcaption>
          </div>

          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img src={assets.Match} alt="football img" />
              </li>
            </ul>
            <figcaption>Mid fidelity wireframe</figcaption>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container two__column">
          <div className="text__column">
            <h3 className="colored_heading">Workflow Optimization</h3>
            <p>
              I focused heavily on reducing friction in teacher workflows:
              <ul className="list">
                <li>Attendance marking reduced from 6 steps to 2 steps</li>
                <li>Student registration reduced from 5 steps to 3 steps</li>
                <li>
                  Results upload improved with an Excel-compatible template and
                  inline editing
                </li>
              </ul>
            </p>
            <p>
              These improvements came directly from observing how teachers work
              in real environments.
            </p>
          </div>
          <div className="text__column"></div>
        </div>
      </section>

      <section className="light__background">
        <div className="container two__column">
          <div className="text__column">
            <h2 className="colored_heading">Prototypes & Usability Testing</h2>
            <p>
              I conducted moderated usability testing with 10 educators. We
              tested flows for both teachers and school admins, measuring:
            </p>
            <ul className="list">
              <li>First-click success</li>
              <li>Time-on-task</li>
              <li>Perceived ease of use</li>
            </ul>

            <br />
          </div>

          <div className="text__column">
            <h2 className="colored_heading">What I Learned</h2>
            <ul className="list">
              <li>
                Teachers preferred one-click shortcuts for frequent actions
              </li>
              <li>
                Admins requested a global search bar for quick record lookup
              </li>
              <li>
                Users appreciated the minimal UI but wanted exportable reports
              </li>
              <li>
                Navigation grouping needed refinement, which I resolved by
                reorganizing key sections
              </li>
              <p>
                After iterating based on feedback, task success rate increased
                from 68% to 94%.
              </p>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="container two__column">
          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img src={assets.eduproto} alt="football img" />
              </li>
            </ul>
          </div>
          <div className="text__column">
            <h2 className="colored_heading">Final UI Design:</h2>
            <p>The final EduTech platform delivers:</p>
            <ul className="list">
              <li>
                Role-based dashboards designed for teacher or admin priorities
              </li>
              <li>A comprehensive student management system</li>
              <li>Tools for teacher management and school administration</li>
              <li>
                Streamlined workflows for attendance, grading, and class
                organization
              </li>
              <li>Real-time analytics with actionable insights</li>
              <li>A unified announcement and communication system</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="light__background">
        <div className="container two__column">
          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img src={assets.dashboardedu} alt="high fidelity wireframe" />
              </li>
            </ul>
            <figcaption>Dashboard</figcaption>
          </div>
          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img src={assets.edustaff} alt="high fidelity wireframe" />
              </li>
            </ul>
            <figcaption>Staff management page</figcaption>
          </div>
        </div>
      </section>

      <section>
        <div className="container two__column">
          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img src={assets.edubilling} alt="high fidelity" />
              </li>
            </ul>
            <figcaption>Billing page</figcaption>
          </div>

          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img src={assets.edurequest} alt="high fidelity" />
              </li>
            </ul>
            <figcaption>School request page</figcaption>
          </div>
        </div>
      </section>
      <section className="light__background">
        <div className="container two__column">
          <div className="text__column">
            <h2 className="colored_heading">Outcome & Impact</h2>
            <h5>Measured Outcomes</h5>
            <ul className="list">
              <li>40% reduction in administrative time for teachers</li>
              <li>3× faster onboarding for new staff</li>
              <li>Significantly improved accuracy of student records</li>
              <li>Greater transparency across the school ecosystem</li>
            </ul>
            <br />
            <h5>Feedback Highlights</h5>
            <ul className="list">
              <li>
                “The platform feels like it was designed for real teachers.”
              </li>
              <li>“I can finally track everything in one place.”</li>
              <li>“Our operations feel more organized and predictable.”</li>
            </ul>
          </div>
          <div className="text__column">
            <h2 className="colored_heading">Next Steps:</h2>
            <p>
              This project reinforced the importance of designing for
              efficiency, clarity, and real-world constraints. Balancing
              simplicity for teachers with the complexity needed by
              administrators required thoughtful IA and continuous validation
              through testing. <br />
              If I had more time, I would explore:
            </p>
            <ul className="list">
              <li>AI-driven student performance predictions</li>
              <li>A parent communication portal</li>
              <li>
                An offline-first mobile experience for low-connectivity
                environments
              </li>
            </ul>
            <br />
          </div>
        </div>
      </section>

      <OtherProjects title="EduTech" />
    </div>
  );
};

export default EduTech;
