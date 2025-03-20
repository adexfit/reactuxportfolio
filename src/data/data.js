import React from "react";
import { assets } from "../assets/assets";

export const HeroText =
  "I am a seasoned senior product designer with over 4 years of experience in the tech industry. My expertise lies in user-centered design and I have a proven track record of creating products that are visually stunning and intuitive to use.";

export const MyName = "Hi, I'm Elisha";

export const mySkills = [
  { name: "Figma", imgSrc: `${assets.figma}`, alt: "Figma Img" },
  {
    name: "Adobe Photoshop",
    imgSrc: `${assets.adobephotoshop}`,
    alt: "Photoshop Img",
  },
  {
    name: "Adobe Illustrator",
    imgSrc: `${assets.adobeillustrator}`,
    alt: "Illustrator Img",
  },
  { name: "React", imgSrc: `${assets.react}`, alt: "React Img" },
  {
    name: "Javascript",
    imgSrc: `${assets.javascript}`,
    alt: "Javascript img",
  },
  { name: "HTML", imgSrc: `${assets.html}`, alt: "HTML img" },
  { name: "CSS", imgSrc: `${assets.css3}`, alt: "CSS img" },

  { name: "Adobe XD", imgSrc: `${assets.adobexd}`, alt: "Adobe XD Img" },
];

export const projectList = [
  {
    title: "ProfootBallVerse",
    desc: "An online community where football lovers discuss everything about football",
    imgSrc: `${assets.ProfootBallVersedp}`,
    pageLink: "/profootballverse",
    netlify: "https://adex-react-quiz.netlify.app/",
    hosted: true,
  },
  {
    title: "Egolending",
    desc: "A P2P lending platform where users can get quick no-collateral loans.",
    imgSrc: `${assets.egolendingdp}`,
    pageLink: "/egolending",
    netlify: "https://adex-react-quiz.netlify.app/",
    hosted: true,
  },
  {
    title: "Pleasurate",
    desc: "A real estate mobile app designed to simplify the process of securing a new apartment",
    imgSrc: `${assets.pleasuratehd}`,
    pageLink: "/pleasurate",
    netlify: "https://adexticketgen.netlify.app/",
    hosted: true,
  },
  {
    title: "Boozle",
    desc: "An easy-to-use book reservation app for library users.",
    imgSrc: `${assets.boozlecover}`,
    pageLink: "/boozle",
    netlify: "",
    hosted: false,
  },

  {
    title: "Kanban Board",
    desc: "A simple Kanban board App which helps companies to manage their teams",
    imgSrc: `${assets.Kanbanboard}`,
    pageLink: "/KanbanBoard",
    netlify: "https://adex-react-calculator.netlify.app/",
    hosted: true,
  },
];

// {
//   title: "Filez",
//   desc: "A file management application that simplifies file organization and retrieval for big companies",
//   imgSrc: `${assets.signaturedp}`,
//   pageLink: "/filez",
//   netlify: "https://adex-react-calculator.netlify.app/",
//   hosted: true,
// },
