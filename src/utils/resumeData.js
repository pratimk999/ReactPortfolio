import { Facebook, LinkedIn, GitHub } from "@material-ui/icons";
import webDevImg from "../assets/images/programming.png";
import certificate1 from "../assets/images/certificate1.PNG";
import certificate2 from "../assets/images/certificate2.jpeg";
import certificate4 from "../assets/images/certificate4.jpg";
import certificate5 from "../assets/images/certificate5.jpg";
import atom from "../assets/images/atom.png";
import c from "../assets/images/c.png";
import cplus from "../assets/images/c++.png";
import css from "../assets/images/css.png";
import github from "../assets/images/github.png";
import html from "../assets/images/html-5.png";
import java from "../assets/images/java.png";
import javascript from "../assets/images/javascript.png";
import mysql from "../assets/images/mysql.png";
import nodejs from "../assets/images/nodejs.png";
import react from "../assets/images/react.png";
import bootstrap from "../assets/images/bootstrapImg.png";
import express from "../assets/images/express.png";
import expressJs from "../assets/images/expressjs.svg";
import wordpress from "../assets/images/wordpress.svg";
import programming from "../assets/images/undraw_programming_2svr.svg";
import feeling_proud from "../assets/images/undraw_feeling_proud_qne1.svg";
import thinking from "../assets/images/undraw_Code_thinking_re_gka2.svg";

const resumeData = {
  name: "Pratim Kundu",
  title: "Web developer",
  birthday: "26th December 2000",
  email: "pratimkundu15@gmail.com",
  address: "Berhampore, West Bengal",
  phone: "7864990069",
  socials: {
    facebook: {
      link: "https://www.facebook.com/pratim.kundu.5/",
      text: "Pratim",
      icon: <Facebook />,
    },
    linkedin: {
      link: "https://www.linkedin.com/in/pratim-kundu-946a851a4/",
      text: "Pratim",
      icon: <LinkedIn />,
    },
    github: {
      link: "https://github.com/pratimk999",
      text: "Pratim",
      icon: <GitHub />,
    },
  },
  // about:
  //   "I am an independent and self-motivated engineering student , tech enthusiast ,sportsfreak. Knowledge in Web Development. Alwaysbelieve teamwork will lead you towardssuccess",
  about:
    "Maecenas scelerisque pulvinar tellus, vel facilisis mauris facilisis vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi tortor tellus, ullamcorper id nisl a, placerat fringilla eros. Suspendisse aliquet vehicula nulla at faucibus. Curabitur ut nisl malesuada, mollis odio vel, consequat orci. Phasellus accumsan condimentum diam vitae ultrices. Nunc ac lorem pulvinar, ullamcorper nunc non, finibus erat. In in est purus. Praesent auctor, nisl nec vestibulum mattis, libero magna venenatis turpis, at accumsan quam sapien pretium tortor.",
  key_qualities: {
    "Web Development": {
      img: webDevImg,
      body: "I have been working on web development for last 1 year",
    },
    Flutter: {
      img: webDevImg,
      body: "I have been working on web development for last 1 year",
    },
    "Problem Solving": {
      img: webDevImg,
      body: "I have been working on web development for last 1 year",
    },
    "Data Structure": {
      img: webDevImg,
      body: "I have been working on web development for last 1 year",
    },
  },
  work_experience: {
    "Front-end developer Intern at GoDial":
      "Working as a front-end developer creating desired functionalities in the project works",
    "Web Development Trainee at TechBairn":
      "Training on Full Stack development with MERN stack",
    "Trainee at HighRadius":
      "Training on ML,MySQL,Java and React where I developed a payment prediction model, responsive UI with React js",
  },
  educations: {
    "KIIT University": "B.Tech in Electronics & Computer Sc. CGPA:9.06",
    "Berhampore J.N.Academy(Secondary)": "Completed my 10th with 93% ",
    "Berhampore J.N.Academy(H.S)":
      "Completed my intermediate with 92.4% in Science (Physics,Chemistry,Math,Biology)",
  },

  projects: [
    {
      tag: "React",
      title: "Project 1",
      caption: "A short description",
      img:
        "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      desc:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,",
      links: [
        {
          link: "https://github.com/pratimk999",
          icon: <GitHub />,
        },
      ],
    },
    {
      tag: "Node",
      title: "Project 1",
      caption: "A short description",
      img:
        "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      desc:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,",
      links: [
        {
          link: "https://github.com/pratimk999",
          icon: <GitHub />,
        },
      ],
    },
    {
      tag: "Java",
      title: "Project 1",
      caption: "A short description",
      img:
        "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      desc:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,",
      links: [
        {
          link: "https://github.com/pratimk999",
          icon: <GitHub />,
        },
      ],
    },
  ],
  certificates: [
    {
      img: certificate1,
      caption: "Flutter Development Bootcamp",
    },
    {
      img: certificate2,
      caption: "Full Stack Web development with Django",
    },
    {
      img: certificate4,
      caption: "Web Development Bootcamp",
    },
    {
      img: certificate5,
      caption: "MERN Stack training",
      size: "big",
    },
  ],
  productLevelSkills: [
    {
      img: react,
      title: "React",
    },
    {
      img: c,
      title: "C",
    },
    {
      img: cplus,
      title: "C++",
    },
    {
      img: java,
      title: "Java",
    },
    {
      img: mysql,
      title: "MySql",
    },
    {
      img: nodejs,
      title: "Node js",
    },
    {
      img: html,
      title: "HTML",
    },
    {
      img: css,
      title: "CSS",
    },
    {
      img: javascript,
      title: "Javascript",
    },
    {
      img: github,
      title: "GitHub",
    },
    {
      img: atom,
      title: "Atom",
    },
    {
      img: bootstrap,
      title: "Bootstrap",
    },
    {
      img: express,
      title: "Express js",
    },
    {
      img: wordpress,
      title: "WordPress",
    },
  ],
  frontPageImages: [
    {
      src: programming,
    },
    {
      src: thinking,
    },
    {
      src: feeling_proud,
    },
  ],
};

export default resumeData;
