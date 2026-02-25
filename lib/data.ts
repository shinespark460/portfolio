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
    title: "Narola Infotech",
    location: "Surat, IN",
    description:
      "I've started a journey as a full-stack JavaScript developer after completing my Master of Computer Applications.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2020",
  },
  {
    title: "Crest Infosystems",
    location: "Surat, IN",
    description:
      "As a backend developer I've been working on various projects. Like starKid, Rightback, and many more.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Opash Software",
    location: "Surat, IN",
    description:
      "As a co-founder and CTO of Opash Software, I've been working on various projects and contribute to the success of the company.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Worldwide",
    description:
      "I'm now a full-stack developer working as a freelancer.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
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
