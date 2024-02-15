<template>
  <section id="experience">
    <h2>TECH</h2>
    <div class="container-skills">
      <div class="container-front-end">
        <h3>FRONT-END</h3>
        <div class="badge">
          <img :src="htmlLogo" alt="HTML logo" /><span>HTML</span>
        </div>
        <div class="badge">
          <img :src="cssLogo" alt="CSS logo" /><span>CSS</span>
        </div>
        <div class="badge">
          <img :src="jsLogo" alt="JavaScript logo" /><span>JavaScript</span>
        </div>
        <div class="badge">
          <img :src="vueLogo" alt="Vue logo" /><span>Vue</span>
        </div>
      </div>
      <div class="container-back-end">
        <h3>BACK-END</h3>
        <div class="badge">
          <img :src="phpLogo" alt="PHP logo" /><span>PHP</span>
        </div>
        <div class="badge">
          <img :src="symfonyLogo" alt="Symfony logo" /><span>Symfony</span>
        </div>
        <div class="badge">
          <img :src="mysqlLogo" alt="MySQL logo" /><span>MySQL</span>
        </div>
      </div>
      <div class="container-other">
        <h3>OTHERS</h3>
        <div class="badge">
          <img :src="gitLogo" alt="Git logo" /><span>Git</span>
        </div>
        <div class="badge">
          <img :src="githubLogo" alt="GitHub logo" /><span>GitHub</span>
        </div>
        <div class="badge">
          <img :src="wordpressLogo" alt="WordPress logo" /><span
            >WordPress</span
          >
        </div>
        <div class="badge">
          <img :src="figmaLogo" alt="Figma logo" /><span>Figma</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";
import vueLogo from "../assets/vue.png";
import phpLogo from "../assets/php.png";
import symfonyLogo from "../assets/symfony.png";
import mysqlLogo from "../assets/mysql.png";
import gitLogo from "../assets/git.png";
import githubLogo from "../assets/github.png";
import wordpressLogo from "../assets/wordpress.png";
import figmaLogo from "../assets/figma.png";

export default {
  name: "Experience",
  data() {
    return {
      htmlLogo,
      cssLogo,
      jsLogo,
      vueLogo,
      phpLogo,
      symfonyLogo,
      mysqlLogo,
      gitLogo,
      githubLogo,
      wordpressLogo,
      figmaLogo,
    };
  },
};
</script>

<style>
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

@media screen and (max-width: 768px) {
  #experience {
    padding: 3rem 0;
  }

  #experience > h2 {
    font-size: 3rem;
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
}

@media screen and (min-width: 769px) and (max-width: 1920px) {
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
}

@media screen and (min-width: 1921px) {
  #experience > h2 {
    font-size: 8rem;
    margin: 3.5rem;
  }
}
</style>
