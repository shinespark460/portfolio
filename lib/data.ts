import cashremitImg from "@/public/cashremit.png";
import tjdistributorsImg from "@/public/tjdistributors.png";

import { CgWorkAlt } from "react-icons/cg";
import { FaAws, FaReact, FaRaspberryPi } from "react-icons/fa";
import {
  RiCss3Line,
  RiDatabase2Line,
  RiGatsbyLine,
  RiGitBranchLine,
  RiHtml5Line,
  RiJavaLine,
  RiJavascriptLine,
  RiNextjsFill,
  RiNextjsLine,
  RiNodejsLine,
  RiReactjsLine,
  RiTailwindCssLine,
  RiVuejsLine,
} from "react-icons/ri";
import {
  TbBrandDocker,
  TbBrandFramerMotion,
  TbBrandGraphql,
  TbBrandLaravel,
  TbBrandMongodb,
  TbBrandMysql,
  TbBrandNodejs,
  TbBrandPython,
  TbBrandReactNative,
  TbBrandRedux,
  TbBrandSocketIo,
  TbBrandTypescript,
  TbBrandVercel,
} from "react-icons/tb";

import React from "react";

const experienceInYears = new Date().getFullYear() - 2020;

export const profile = {
  avatar: "https://avatars.githubusercontent.com/u/34062262?v=4",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  name: "Sophie Wilson",
  title: "Senior Full Stack Developer",
  experience: `${experienceInYears} years`,
  likes: "building web and mobile apps",
  // resumeLink: `https://www.uvic.ca/career-services/_assets/docs/resume-computer-engineering.pdf`,
  linkedInLink: "",
  githubLink: "https://github.com/shinespark460",
} as const;

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Incentro",
    location: "Amsterdam, Netherlands",
    description: 
      "Senior Full Stack Engineer building scalable SaaS platforms with React and Node.js, optimizing backend performance (70% MySQL improvement), and deploying real-time, cloud-based solutions on AWS with Docker.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2022 - Present",
  },
  {
    title: "Info Support",
    location: "Utrecht, Netherlands",
    description:
      "Frontend engineer experienced in building React and Next.js applications with Redux, integrating APIs, optimizing UI performance, and collaborating across teams on Angular, Vue, and WordPress projects.As a backend developer I've been working on various projects. Like starKid, Rightback, and many more.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2020 - Aug 2022",
  },
  {
    title: "Ordina",
    location: "Rotterdam, Netherlands",
    description:
      "Developed secure web applications in a cybersecurity-focused environment, implementing authentication workflows, secure session handling, and resolving performance and security issues.",
    icon: React.createElement(FaReact),
    date: "2019 - Oct 2020",
  },
] as const;

export const projectsData = [
  {
    title: "CashRemit",
    description:
      "A seamless money transfer platform. CashRemit allows Australian users to transfer AUD to African countries like Nigeria, Ghana, Kenya, etc",
    tags: ["React", "NodeJS", "MongoDB", "ChakraUI", "Ant Design", "AWS"],
    imageUrl: cashremitImg,
    url: "http://cashremit.com.au",
  },
  {
    title: "TJ Distributors",
    description:
      "An inspection app, admin portal, staff will use mobile app to create inspection on site (like school, stadium etc...) and submit, admin will check, approve, proceed, generate report and certificates. ",
    tags: ["React", "NodeJS", "MongoDB", "React Native"],
    imageUrl: tjdistributorsImg,
    url: "",
  },
] as const;

export const skillsData = [
  { name: "HTML", icon: RiHtml5Line },
  { name: "CSS", icon: RiCss3Line },
  { name: "JavaScript", icon: RiJavascriptLine },
  { name: "TypeScript", icon: TbBrandTypescript },
  { name: "React", icon: RiReactjsLine },
  { name: "React Native", icon: TbBrandReactNative },
  { name: "Next.js", icon: RiNextjsLine },
  { name: "Vue.js", icon: RiVuejsLine },
  { name: "Tailwind CSS", icon: RiTailwindCssLine } ,
  { name: "Material UI", icon: RiTailwindCssLine },
  { name: "Redux", icon: TbBrandRedux },
  { name: "NodeJS", icon: RiNodejsLine },
  { name: "Express", icon: TbBrandNodejs },
  { name: "Laravel", icon: TbBrandLaravel },
  { name: "Java", icon: RiJavaLine },
  { name: "Python", icon: TbBrandPython },
  { name: "GraphQL", icon: TbBrandGraphql },
  { name: "Socket IO", icon: TbBrandSocketIo },
  { name: "MongoDB", icon: TbBrandMongodb },
  { name: "MySQL", icon: TbBrandMysql },
  { name: "PostgreSQL", icon: RiDatabase2Line },
  { name: "Git", icon: RiGitBranchLine },
  { name: "Docker", icon: TbBrandDocker },
  { name: "Vercel", icon: TbBrandVercel },
  { name: "AWS", icon: FaAws },
] as const;
