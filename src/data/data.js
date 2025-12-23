import React from "react";
import { assets } from "../assets/assets";

export const HeroText =
  "I am a google certified senior product designer with over 4 years of experience in the tech industry. My expertise lies in user-centered design and I have a proven track record of creating products that are visually stunning and intuitive to use.";

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
    title: "Ethnocopia",
    desc: "Ethnocopia is a culture-focused social platform designed to help people from different ethnic backgrounds connect, share stories, and learn from one another",
    imgSrc: `${assets.ethnocopiaprofile}`,
    pageLink: "/ethnocopia",
    netlify: "/",
    hosted: false,
  },
  {
    title: "EduTech",
    desc: "EduTech is a modern web-based platform that empowers teachers to effectively manage their students and classrooms — while enabling school administrators to oversee both students and teaching staff",
    imgSrc: `${assets.dashboardedu}`,
    pageLink: "/edutech",
    netlify: "/",
    hosted: false,
  },
  {
    title: "Egolending",
    desc: "A P2P lending platform where users can get quick no-collateral loans.",
    imgSrc: `${assets.egodashboard}`,
    pageLink: "/egolending",
    netlify: "/",
    hosted: false,
  },
  {
    title: "ProfootBallVerse",
    desc: "An online community where football lovers discuss everything about football",
    imgSrc: `${assets.profootballversedp}`,
    pageLink: "/profootballverse",
    netlify: "/",
    hosted: false,
  },
  {
    title: "Pleasurate",
    desc: "A real estate mobile app designed to simplify the process of securing a new apartment",
    imgSrc: `${assets.pleasuratehd}`,
    pageLink: "/pleasurate",
    netlify: "/",
    hosted: false,
  },
  {
    title: "Boozle",
    desc: "An easy-to-use book reservation app for library users.",
    imgSrc: `${assets.boozlecover}`,
    pageLink: "/boozle",
    netlify: "/",
    hosted: false,
  },
  {
    title: "Kanban Board",
    desc: "A simple Kanban board App which helps companies to manage their teams",
    imgSrc: `${assets.Kanbanboard}`,
    pageLink: "/KanbanBoard",
    netlify: "https://adex-react-calculator.netlify.app/",
    hosted: false,
  },
];

export const devprojectList = [
  {
    title: "MiniCommerce",
    desc: "An Ecommerce Furniture App built with Next Js, Zustand, React Query and Tailwindcss",
    imgSrc: `${assets.minicommerce}`,
    github: "https://github.com/adexfit/minicommerce",
    netlify: "https://stupendous-cuchufli-cac44d.netlify.app/",
    hosted: true,
  },
  {
    title: "Twitter Clone",
    desc: "A MEARN stack twitter app designed using Daisy UI, Tailwind css, Tanstack Query",
    imgSrc: `${assets.twiclone}`,
    github: "https://github.com/adexfit/twitterclone",
    netlify: "https://twitterclone-274y.onrender.com/login",
    hosted: true,
  },
  {
    title: "Next JS Task Manager App",
    desc: "A fully working task manager built with Next JS, Typescript, Tailwindcss and Zustand",
    imgSrc: `${assets.taskmanager}`,
    github: "https://github.com/adexfit/nexttaskmanager",
    netlify: "https://adextaskmanager.netlify.app/",
    hosted: true,
  },
  {
    title: "Ticket",
    desc: "A responsive ticket generator designed using react js",
    imgSrc: `${assets.ticketshot}`,
    github: "https://github.com/adexfit/TickectGenerator",
    netlify: "https://adexticketgen.netlify.app/",
    hosted: true,
  },
  {
    title: "Chrome Origin Trials",
    desc: "I participated in the chrome origin trials program where I implemented the translation API and the Summarizer API",
    imgSrc: `${assets.adexai}`,
    github: "https://github.com/adexfit/adexai",
    netlify: "https://adexai.netlify.app/",
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
