import React from "react";
import Header from "../components/Header";
import OtherProjects from "../components/OtherProjects";
import { assets } from "../assets/assets";
import { useState } from "react";

const Pleasurate = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div>
      <Header title="Pleasurate" />
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
              The real estate industry has been rapidly growing in recent years,
              with the emergence of new technologies and mobile applications
              making it easier for people to buy, sell, and rent properties. In
              this case study, I will be discussing the design process I used to
              create a cutting-edge real estate mobile application.
            </p>

            <h2 className="colored_heading">Background</h2>
            <p>
              As a leading real estate company, my client wanted to
              revolutionize the way people buy and sell and rent properties by
              creating a mobile application that would provide a seamless user
              experience. They approached me with the goal of developing an
              innovative app that would allow users to easily search for
              properties, view detailed information, and connect with agents. My
              challenge was to design a user interface that would be visually
              appealing, intuitive, and meet the needs of my client's target
              audience.
            </p>
            <p>
              This project lasted 4 months , and I was the only product designer
              who worked on it.
            </p>
          </div>
          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img
                  src={assets.pleasuratesplash}
                  alt="img"
                  onClick={() => setSelectedImage(assets.pleasuratesplash)}
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
              <li>User Research</li>
              <li>Interaction</li>
              <li>Visual design</li>
              <li>Prototyping and Testing</li>
              <li>Information Architecture</li>
            </ol>
          </div>
          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img
                  src={assets.designprocess}
                  alt="img"
                  onClick={() => setSelectedImage(assets.designprocess)}
                />
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
                  src={assets.brainstorm}
                  alt="img"
                  onClick={() => setSelectedImage(assets.brainstorm)}
                />
              </li>
              <li className="img">
                <img
                  src={assets.pleasurate_problem_statement}
                  alt="pleasurate_problem_statement.png"
                  onClick={() =>
                    setSelectedImage(assets.pleasurate_problem_statement)
                  }
                />
              </li>
            </ul>
          </div>
          <div className="text__column">
            <h2 className="colored_heading">Understanding the problem</h2>
            <p>
              {" "}
              This project was done to solve the following problems in the real
              estate industry:{" "}
            </p>
            <ol className="list">
              <li>
                <b>Limited access to property information:</b> In the
                traditional real estate industry, property information was only
                available through agents or brokers. This made it difficult for
                buyers to access information about properties they were
                interested in, and sellers had limited ways to market their
                properties. This project was done to make property information
                readily accessible to clients.
              </li>
              <li>
                <b>Time-consuming property search:</b> Searching for properties
                can be a time-consuming process, especially for those who are
                not familiar with the area they are searching in. There is
                therefore a need to develop a mobile app that can make the
                process faster and more efficient by providing users with a
                comprehensive list of properties that match their search
                criteria.
              </li>
              <li>
                <b>Lack of transparency:</b> The real estate industry has been
                criticized for its lack of transparency in the past. With a
                mobile app, buyers and sellers can access real-time information
                about properties, including pricing, location, and other
                relevant details.
              </li>
              <li>
                <b>Limited communication with agents:</b> Traditional real
                estate transactions often require buyers and sellers to
                communicate with agents through phone calls or emails. There is
                a need for a mobile app that can provide a platform for users to
                communicate with agents in real-time, making the process more
                efficient and streamlined.
              </li>
              <li>
                <b>Inefficient property management:</b> Property management can
                be a complex process, especially for those who own multiple
                properties. This project will provide a centralized platform for
                property owners to manage their properties, including
                maintenance requests, rent payments, and other important tasks.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section>
        <div className="container two__column">
          <div className="text__column">
            <h3 className="colored_heading">Research</h3>
            <p>
              To begin the design process, I conducted extensive research on the
              target audience of the application. The target audience include:{" "}
            </p>
            <ol className="list">
              <li>
                <b>Homebuyers:</b> Individuals who are looking to purchase a
                property for personal use.
              </li>
              <li>
                <b>Real estate investors:</b> Individuals who are interested in
                purchasing properties as an investment.
              </li>
              <li>
                <b>Renters:</b> Individuals who are looking to rent a property
                for personal or business use.
              </li>
              <li>
                <b>Property owners:</b> Individuals who own one or more
                properties and need a platform to manage their properties
                efficiently.
              </li>
              <li>
                <b>Real estate agents:</b> Professionals who work in the real
                estate industry and require a platform to connect with clients
                and manage their listings.
              </li>
            </ol>

            <p>
              I did a qualitative research using 5 Homebuyers, 5 Real estate
              investors, 5 Renters, 5 Property owners and 5 Real estate agents.
              I analyzed their behaviors, preferences, and pain points. I also
              conducted a competitive audit to identify the strength and
              weaknesses of our competitors and the areas for improvement.
            </p>
          </div>
          <div className="text__column">
            <h2 className="colored_heading">Research findings</h2>
            <ol className="list">
              <li>
                Homebuyers prefer a mobile app that allows them to easily search
                for properties based on their specific criteria, such as
                location, price range, and number of bedrooms and bathrooms.
              </li>
              <li>
                Real estate investors want a mobile app that provides them with
                detailed property information, including rental income
                potential, property taxes, and other financial data.
              </li>
              <li>
                Renters are looking for a mobile app that allows them to easily
                search for available rental properties in their preferred
                location, view photos and virtual tours, and communicate with
                landlords or property managers.
              </li>
              <li>
                Property owners want a mobile app that enables them to manage
                their properties remotely, including scheduling maintenance and
                repairs, viewing financial reports, and communicating with
                tenants.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="light__background">
        <div className="container two__column">
          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img
                  src={assets.question_landlords}
                  alt="img"
                  onClick={() => setSelectedImage(assets.question_landlords)}
                />
              </li>
            </ul>
            <figcaption>Some research questions</figcaption>
          </div>

          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img
                  src={assets.question_tenant}
                  alt="img"
                  onClick={() => setSelectedImage(assets.question_tenant)}
                />
              </li>
            </ul>
            <figcaption>some research questions</figcaption>
          </div>
        </div>
      </section>

      <section>
        <div className="container ">
          <div className="text__column">
            <h2 className="colored_heading">Design</h2>
            <p>
              Based on the research findings, I developed a user interface
              design that focused on simplicity and ease of use. I used a clean
              and modern design language with a simple color palette to create a
              visually appealing interface that would be easy to navigate.
            </p>
            <p>
              I also focused on creating a seamless user experience by
              incorporating intuitive navigation and clear calls to action. I
              used icons and graphics to help users quickly identify key
              features and functions of the application.
            </p>
            <p>
              One of the key features of the application was the ability to
              search for properties based on specific criteria such as location,
              price range, and property type. To make this process as easy as
              possible, I designed a search bar that was prominently displayed
              on the home screen. I also included filters that allowed users to
              refine their search results based on additional criteria such as
              number of bedrooms or bathrooms.
            </p>
            <p>
              Another important feature of the application was the ability to
              view property details such as photos, floor plans, and amenities.
              I designed a property detail page that displayed all relevant
              information in a clear and organized manner.
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
                  src={assets.person3}
                  alt="persona img"
                  onClick={() => setSelectedImage(assets.person3)}
                />
              </li>
            </ul>
            <figcaption>Persona 1</figcaption>
          </div>
          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img
                  src={assets.pleasurate_persona2}
                  alt="persona2 img"
                  onClick={() => setSelectedImage(assets.pleasurate_persona2)}
                />
              </li>
            </ul>
            <figcaption>persona 2</figcaption>
          </div>
        </div>
      </section>

      <section>
        <div className="container two__column">
          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img
                  src={assets.pleasurate_stories1}
                  alt="pleasurate user stories"
                  onClick={() => setSelectedImage(assets.pleasurate_stories1)}
                />
              </li>
            </ul>
            <figcaption>User stories</figcaption>
          </div>
          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img
                  src={assets.pleasurate_stories}
                  alt="pleasurate user stories"
                  onClick={() => setSelectedImage(assets.pleasurate_stories)}
                />
              </li>
            </ul>
            <figcaption>User stories</figcaption>
          </div>
        </div>
      </section>

      <section>
        <div className="container two__column">
          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img
                  src={assets.empathymap2}
                  alt="empathy map img"
                  onClick={() => setSelectedImage(assets.empathymap2)}
                />
              </li>
            </ul>
            <figcaption>Empathy map</figcaption>
          </div>
          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img
                  src={assets.painpoints}
                  alt="pain points img"
                  onClick={() => setSelectedImage(assets.painpoints)}
                />
              </li>
            </ul>
            <figcaption>painpoints</figcaption>
          </div>
        </div>
      </section>

      <section>
        <div className="container two__column">
          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img
                  src={assets.journeymap2}
                  alt="journeymap2 img"
                  onClick={() => setSelectedImage(assets.journeymap2)}
                />
              </li>
            </ul>
            <figcaption>Journey map</figcaption>
          </div>
        </div>
      </section>

      <section>
        <div className="container two__column">
          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img
                  src={assets.userflow2}
                  alt="img"
                  onClick={() => setSelectedImage(assets.userflow2)}
                />
              </li>
            </ul>
            <figcaption>User flow</figcaption>
          </div>
          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img
                  src={assets.ai}
                  alt="img"
                  onClick={() => setSelectedImage(assets.ai)}
                />
              </li>
            </ul>
            <figcaption>Information Architecture</figcaption>
          </div>
        </div>
      </section>

      <section>
        <div className="container two__column">
          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img
                  src={assets.wireframe}
                  alt="img"
                  onClick={() => setSelectedImage(assets.wireframe)}
                />
              </li>
            </ul>
            <figcaption>Wireframe</figcaption>
          </div>
          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img
                  src={assets.pleasuratehd}
                  alt="img"
                  onClick={() => setSelectedImage(assets.pleasuratehd)}
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
                <img
                  src={assets.pleasurate_low_proto}
                  alt="img"
                  onClick={() => setSelectedImage(assets.pleasurate_low_proto)}
                />
              </li>
            </ul>
            <figcaption>Low-fidelity prototype</figcaption>
          </div>
          <div className="image__column">
            <ul className="images">
              <li className="img">
                <img
                  src={assets.pleasurate_hd_proto}
                  alt="img"
                  onClick={() => setSelectedImage(assets.pleasurate_hd_proto)}
                />
              </li>
            </ul>
            <figcaption>High fidelity prototype</figcaption>
          </div>
        </div>
      </section>

      <section className="light__background">
        <div className="container two__column">
          <div className="text__column">
            <h2 className="colored_heading">User testing</h2>
            <p>
              After completing the design, we conducted user testing to ensure
              that the application was easy to use and met the needs of our
              target audience. We recruited participants who fit our target
              demographic and asked them to perform various tasks using the
              application. Based on their feedback, we made several adjustments
              to the design to improve usability.{" "}
            </p>
          </div>
          <div className="text__column">
            <h2 className="colored_heading">Conclusion</h2>
            <p>
              In conclusion, designing this real estate mobile app required
              extensive research, careful consideration of user needs, and
              iterative testing. By focusing on simplicity, ease of use, and
              intuitive navigation, we were able to create a visually appealing
              and functional application that met the needs of our client and
              their target audience.
            </p>
          </div>
        </div>
      </section>
      <OtherProjects title="Pleasurate" />
    </div>
  );
};

export default Pleasurate;
