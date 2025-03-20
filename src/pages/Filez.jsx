import React from "react";
import Header from "../components/Header";
import OtherProjects from "../components/OtherProjects";
import { assets } from "../assets/assets";

const Filez = () => {
  return (
    <div>
      <Header title="Filez" />
      <section>
        <div className="container two__column">
          <div className="text__column">
            {/* <h2 className="colored_heading">Project Overview</h2> */}
            <ul className="list">
              <li>Project Name: Filez</li>
              <li>Role: UX/UI Designer</li>
              <li>Tools Used: Figma, Adobe Illustrator</li>
              <li>Timeline: 10 weeks</li>
              <li>
                Team: UX Designer, Developers, Product Manager, Legal
                Consultants
              </li>
            </ul>
          </div>
          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img src={assets.signaturedp} alt="home page picture" />
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
              Traditional document signing methods are often cumbersome,
              involving excessive paperwork, delays, and security risks. Many
              existing e-signature platforms have complex user interfaces and
              lack intuitive workflows. The objective was to design an
              efficient, secure, and user-friendly document signing platform
              that enables users to upload, sign, and share documents
              effortlessly while ensuring compliance with legal standards.
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
              I conducted 8 user interviews and surveyed 50 individuals,
              including business owners, legal professionals, and remote
              workers, to understand their pain points and requirements.
            </p>
            <h5 className="">Pain Points:</h5>
            <ul className="list">
              <li>Complex navigation in existing e-signature platforms.</li>
              <li>Security concerns with document authenticity.</li>
              <li>
                No seamless way to request signatures from multiple parties.
              </li>
            </ul>
            <h5 className="">Needs:</h5>
            <ul className="list">
              <li>A simplified document workflow (upload, sign, share).</li>
              <li>Legally binding and secure digital signatures.</li>
              <li>Multi-party signing support with real-time tracking.</li>
            </ul>
          </div>
          <div className="text__column">
            <h3 className="colored_heading">Personas & User Journey Mapping</h3>
            <h5>Persona 1: Sarah - Legal Consultant</h5>
            <ul className="list">
              <li>
                Needs: A fast and legally compliant way to sign and store
                contracts.
              </li>
              <li>
                Pain Point: Time-consuming manual signing process with paper
                trails.
              </li>
              <li>
                Goal: Wants an automated signing system with audit trails.
              </li>
            </ul>
            <br />
            <h5>Persona 2: Mark - Startup Founder</h5>
            <ul className="list">
              <li>
                Needs: A simple way to send contracts to investors and
                employees.
              </li>
              <li>
                Pain Point: Struggles with coordinating multiple signers
                remotely.
              </li>
              <li>Goal: Wants an intuitive multi-signature request feature.</li>
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
            <p>I started with low-fidelity wireframes focusing on:</p>
            <ul className="list">
              <li>
                A dashboard showing pending, signed, and in-progress documents.
              </li>
              <li>An upload feature with drag-and-drop functionality.</li>
              <li>A guided signature placement system.</li>
              <li>Multi-signer workflows with real-time status tracking.</li>
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
            <p>Based on feedback, I refined the UI with:</p>
            <ul className="list">
              <li>One-click signing for efficiency.</li>
              <li>Customizable templates for frequent document types.</li>
              <li>
                Secure authentication (2FA, biometrics) for document integrity.
              </li>
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
              <li>Can users easily upload, sign, and send documents?</li>
              <li>How intuitive is the multi-signer process?</li>
              <li>Does the UI provide clear progress tracking?</li>
            </ul>
            <br />
            <h5>Results:</h5>
            <ul className="list">
              <li>
                90% of users found the dashboard intuitive and easy to navigate.
              </li>
              <li>Some users requested additional signature format options.</li>
              <li>
                Multi-signer coordination improved after streamlining
                notifications.
              </li>
            </ul>
          </div>

          <div className="text__column">
            <h5>Iteration Changes:</h5>
            <ul className="list">
              <li>
                Introduced custom signature styles (typed, drawn, uploaded).
              </li>
              <li>Enhanced document tracking notifications.</li>
              <li>Added a document expiration reminder feature.</li>
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
              <li>Drag-and-drop document upload for ease of use.</li>
              <li> One-click legally binding e-signatures.</li>
              <li> Multi-party signing with real-time tracking.</li>
              <li>Secure authentication & encryption.</li>
              <li>Reusable document templates to save time.</li>
              <li>
                {" "}
                Audit trail & compliance adherence (e.g., eIDAS, ESIGN Act).
              </li>
              <li> Cross-device accessibility (desktop, mobile, tablet).</li>
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
              <li>50% faster document completion time.</li>
              <li>Improved user adoption due to a streamlined interface.</li>
              <li>
                Enhanced security with 2FA and encrypted document storage.
              </li>
            </ul>
          </div>
          <div className="text__column">
            <h2 className="colored_heading">Lessons Learned & Next Steps</h2>
            <ul className="list">
              <li>
                Simplification matters – Users prefer fewer clicks for complex
                tasks.
              </li>
              <li>
                Security and compliance are top priorities for legal users.
              </li>
              <li>
                Real-time tracking boosts transparency and user confidence.
              </li>
            </ul>
            <br />
            <h5>Next Steps:</h5>
            <ul className="list">
              <li>Implement AI-powered contract analysis.</li>
              <li>Introduce blockchain verification for added security.</li>
              <li>
                Expand integration with third-party apps (Google Drive, Dropbox,
                Slack).
              </li>
            </ul>{" "}
          </div>
        </div>
      </section>
      <OtherProjects title="Filez" />
    </div>
  );
};

export default Filez;
