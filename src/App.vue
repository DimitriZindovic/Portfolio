<template>
  <div id="app">
    <Navbar />
    <Presentation />
    <About />
    <Experience />
    <Projects />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Presentation from "./components/Presentation.vue";
import About from "./components/About.vue";
import Experience from "./components/Experience.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Presentation,
    About,
    Experience,
    Projects,
    Contact,
    Footer,
  },
};
</script>

<style>
@font-face {
  font-family: "AzeretMono ExtraLight";
  src: url("./fonts/AzeretMono-ExtraLight.ttf");
}

@font-face {
  font-family: "AzeretMono Regular";
  src: url("./fonts/AzeretMono-Regular.ttf");
}

@font-face {
  font-family: "Inter Regular";
  src: url("./fonts/Inter-Regular.ttf");
}

@font-face {
  font-family: "RG_Standard";
  src: url("./fonts/RG_Standard.ttf");
}

@font-face {
  font-family: "RG_StandardMedium";
  src: url("./fonts/RG_StandardMedium.ttf");
}

@font-face {
  font-family: "RG_Standard_Semibold";
  src: url("./fonts/RG_Standard_Semibold.ttf");
}

@font-face {
  font-family: "Rochester";
  src: url("./fonts/Rochester.ttf");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #191919;
}

html {
  scroll-behavior: smooth;
}

body,
html {
  overflow-x: hidden;
}

ul,
li {
  list-style: none;
}

a,
.btn {
  transition: all 300ms ease;
}

nav,
.nav-links {
  display: flex;
}

nav {
  justify-content: space-around;
  align-items: center;
  justify-content: end;
  margin: 0 10rem;
  height: 12vh;
}

.nav-links {
  gap: 2rem;
  list-style: none;
  font-size: 1.5rem;
  background-color: black;
  font-family: "Inter Regular";
  padding: 1.5rem 3rem;
  margin-block: 2rem;
}

li > a {
  color: #f76b15;
  text-decoration: none;
}

.nav-links > li > a:hover {
  color: #f76b15;
  text-decoration: underline;
  text-underline-offset: 1rem;
}

section {
  padding-top: 4vh;
  min-height: fit-content;
}

.section-container {
  display: flex;
}

#presentation {
  margin-top: 2rem;
  border-top: #f76b15 0.1rem solid;
  height: 96vh;
  margin: 0 5rem;
}

#presentation > p {
  color: #f76b15;
  font-size: 1.5rem;
  padding: 3rem 0;
  font-family: "AzeretMono Regular";
}

h1 {
  font-size: 12rem;
  color: #f76b15;
  font-family: "RG_Standard";
}

#about {
  border-top: #f76b15 0.1rem solid;
  height: 40vh;
  margin: 0 5rem;
}

.container-about {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.container-about > h2 {
  font-size: 2rem;
  color: #f76b15;
  font-family: "AzeretMono ExtraLight";
}

.container-about > p {
  font-size: 1.5rem;
  color: #f76b15;
  font-family: "AzeretMono Regular";
}

#experience {
  background-color: black;
  padding: 6rem 0;
}

#experience > h2 {
  color: #f76b15;
  font-size: 6rem;
  font-family: "RG_Standard_Semibold";
  text-align: center;
  margin-bottom: 5%;
}

.container-skills {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  font-family: "AzeretMono Regular";
  color: #f76b15;
  margin: 0 5rem;
  padding-bottom: 5%;
}

.container-front-end,
.container-back-end,
.container-other {
  padding-top: 5%;
  border-top: #f76b15 0.1rem solid;
}

.badge {
  margin-top: 20px;
  padding: 5px 10px;
  margin-bottom: 10px;
}

.badge img {
  width: 20px;
  height: 20px;
  margin-right: 15px;
}

#projects {
  margin: 2rem 5rem;
}

.container-project > h2 {
  font-size: 2rem;
  color: #f76b15;
  font-family: "AzeretMono ExtraLight";
}

.project {
  border-top: #f76b15 0.1rem solid;
  margin: 2rem 5rem;
}

.project > h3 {
  font-size: 10rem;
  color: #f76b15;
  font-family: "Inter Regular";
}

.project > p {
  margin-top: 2rem;
  font-size: 1.5rem;
  color: #f76b15;
  font-family: "AzeretMono Regular";
}

.link-project {
  font-size: 1.5rem;
  color: #f76b15;
  font-family: "AzeretMono Regular";
  text-decoration: none;
  display: flex;
  justify-content: flex-end;
  padding: 4rem 0;
}

#contact {
  background-color: black;
}

.container-contact {
  font-family: "AzeretMono Regular";
  color: #f76b15;
  margin: 0 5rem;
}

.container-contact > h2 {
  font-size: 4rem;
  color: #f76b15;
  font-family: "AzeretMono Regular";
  padding: 4rem 0;
}

.container-contact-cv {
  display: flex;
  gap: 30rem;
  padding-bottom: 4rem;
}

.contact {
  border-top: #f76b15 0.1rem solid;
  width: 350px;
  padding: 2rem 0;
  display: flex;
  gap: 1rem;
  flex-direction: column;
}

.contact > a {
  display: flex;
  font-size: 1.5rem;
  align-items: center;
  background-color: #f76b15;
  color: black;
  font-family: "AzeretMono Regular";
  text-decoration: none;
  padding: 1rem 0;
  text-align: center;
  padding-left: 10px;
  text-align: center;
}

.contact > a:hover {
  background-color: #f76b15;
  color: white;
}

.contact > a > img {
  width: 30px;
  height: 30px;
  margin-right: 1rem;
}

.cv {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.cv > a {
  background-color: #f76b15;
  padding: 3rem;
  color: black;
  font-family: "AzeretMono Regular";
  text-decoration: none;
  font-size: 2rem;
}

.cv > a:hover {
  background-color: #f76b15;
  color: white;
}

footer {
  padding: 3rem 0;
}

footer > p {
  font-family: "AzeretMono Regular";
  color: #f76b15;
  font-size: 1rem;
  text-align: center;
}

.nav-links-footer {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

.nav-footer {
  font-family: "AzeretMono Regular";
  color: #f76b15;
  font-size: 2rem;
  width: 300px;
  margin: 0 5rem;
  padding-bottom: 2rem;
}

.nav-footer > li {
  border-top: #f76b15 0.1rem solid;
  padding: 1rem 0;
}

@media screen and (max-width: 768px) {
  nav {
    margin: 0 2rem;
    height: auto;
  }

  .nav-links {
    gap: 1rem;
    font-size: 1.2rem;
    padding: 1rem 1.5rem;
  }

  li > a {
    font-size: 1rem;
  }

  .nav-links > li > a:hover {
    text-underline-offset: 0.5rem;
  }

  section {
    padding-top: 2vh;
  }

  .section-container {
    flex-direction: column;
  }

  #presentation {
    margin: 1rem;
    height: auto;
  }

  #presentation > p {
    font-size: 1.2rem;
    padding: 1.5rem 0;
  }

  h1 {
    font-size: 4rem;
  }

  #about {
    height: auto;
    margin: 0 2rem;
  }

  .container-about {
    grid-template-columns: 1fr;
  }

  .container-about > h2 {
    font-size: 1.5rem;
  }

  .container-about > p {
    font-size: 1.2rem;
  }

  #experience > h2 {
    font-size: 3rem;
    text-align: start;
    margin: 2rem;
  }

  .container-skills {
    grid-template-columns: 1fr;
    justify-items: normal;
  }

  .container-front-end,
  .container-back-end,
  .container-other {
    padding-top: 5%;
    padding-bottom: 5%;
  }

  #projects {
    margin: 1rem 2rem;
  }

  .container-project > h2 {
    font-size: 1.5rem;
  }

  .project {
    margin: 1rem 2rem;
  }

  .project > h3 {
    font-size: 4rem;
  }

  .project > p,
  .link-project {
    font-size: 1.2rem;
  }

  .container-contact {
    margin: 0 2rem;
  }

  .container-contact > h2 {
    font-size: 2rem;
  }

  .container-contact-cv {
    flex-direction: column;
    gap: 2rem;
  }

  .contact {
    width: auto;
  }

  .contact > a {
    font-size: 1.2rem;
  }

  .cv {
    align-items: center;
    justify-content: center;
  }

  .cv > a {
    padding: 1.5rem;
    font-size: 1.5rem;
  }

  .nav-links-footer {
    justify-content: center;
  }

  .nav-footer {
    font-size: 1.5rem;
    margin: 0 2rem;
  }

  .container-about {
    gap: 4rem;
    margin: 5rem 0;
  }
}

@media screen and (min-width: 769px) and (max-width: 1524px) {
  nav {
    margin: 0 2.5rem;
  }

  .nav-links {
    gap: 1.2rem;
    font-size: 1.4rem;
    padding: 1.2rem 1.8rem;
  }

  li > a {
    font-size: 1.2rem;
  }

  .nav-links > li > a:hover {
    text-underline-offset: 0.6rem;
  }

  section {
    padding-top: 2.5vh;
  }

  .section-container {
    flex-direction: column;
  }

  #presentation {
    margin: 1.2rem;
    height: auto;
    padding: 5rem 0;
  }

  #presentation > p {
    font-size: 1.4rem;
    padding: 1.8rem 0;
  }

  h1 {
    font-size: 4.5rem;
  }

  #about {
    height: auto;
    margin: 0 2.5rem;
  }

  .container-about {
    grid-template-columns: 1fr;
  }

  .container-about > h2 {
    font-size: 1.8rem;
  }

  .container-about > p {
    font-size: 1.4rem;
  }

  #experience > h2 {
    font-size: 3.5rem;
    margin: 2.5rem;
  }

  .container-front-end,
  .container-back-end,
  .container-other {
    padding-top: 6%;
    padding-bottom: 6%;
  }

  #projects {
    margin: 1.2rem 2.5rem;
  }

  .container-project > h2 {
    font-size: 1.8rem;
  }

  .project {
    margin: 1.2rem 2.5rem;
  }

  .project > h3 {
    font-size: 5.5rem;
  }

  .project > p,
  .link-project {
    font-size: 1.4rem;
  }

  .container-contact {
    margin: 0 2.5rem;
  }

  .container-contact > h2 {
    font-size: 2.5rem;
  }

  .container-contact-cv {
    flex-direction: column;
    gap: 2.5rem;
  }

  .contact {
    width: auto;
  }

  .contact > a {
    font-size: 1.4rem;
  }

  .cv {
    align-items: center;
    justify-content: center;
  }

  .cv > a {
    padding: 1.8rem;
    font-size: 1.8rem;
  }

  .nav-links-footer {
    justify-content: center;
  }

  .nav-footer {
    font-size: 1.8rem;
    margin: 0 2.5rem;
  }

  .container-about {
    gap: 5rem;
    margin: 6rem 0;
  }
}

@media screen and (min-width: 1921px) {
  nav {
    margin: 0 15rem;
  }

  .nav-links {
    gap: 3rem;
    font-size: 2rem;
    padding: 2rem 4rem;
  }

  li > a {
    font-size: 1.8rem;
  }

  .nav-links > li > a:hover {
    text-underline-offset: 1.5rem;
  }

  section {
    padding-top: 6vh;
  }

  #presentation {
    margin: 0 7.5rem;
  }

  #presentation > p {
    font-size: 2rem;
    padding: 4rem 0;
  }

  h1 {
    font-size: 15rem;
  }

  #about {
    margin: 0 7.5rem;
  }

  .container-about > h2 {
    font-size: 2.5rem;
  }

  .container-about > p {
    font-size: 2rem;
  }

  #experience > h2 {
    font-size: 8rem;
    margin: 3.5rem;
  }

  .container-skills {
    margin: 0 7.5rem;
  }

  #projects {
    margin: 2.5rem 7.5rem;
  }

  .container-project > h2 {
    font-size: 2.5rem;
  }

  .project {
    margin: 2.5rem 7.5rem;
  }

  .project > h3 {
    font-size: 12rem;
  }

  .project > p,
  .link-project {
    font-size: 2rem;
  }

  .container-contact {
    margin: 0 7.5rem;
  }

  .container-contact > h2 {
    font-size: 5rem;
  }

  .contact {
    width: 400px;
  }

  .contact > a {
    font-size: 2rem;
  }

  .cv > a {
    padding: 4rem;
    font-size: 2.5rem;
  }

  .nav-footer {
    font-size: 2.5rem;
    margin: 0 7.5rem;
  }
}
</style>
