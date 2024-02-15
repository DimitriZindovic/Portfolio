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

section {
  padding-top: 4vh;
  min-height: fit-content;
}

@media screen and (max-width: 768px) {
  section {
    padding-top: 2vh;
  }
}

@media screen and (min-width: 769px) and (max-width: 1524px) {
  section {
    padding-top: 2.5vh;
  }
}

@media screen and (min-width: 1921px) {
  section {
    padding-top: 6vh;
  }
}
</style>
