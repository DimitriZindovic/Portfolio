<template>
  <section id="projects">
    <div class="container-project">
      <h2>PROJETS</h2>
      <div class="project" v-for="(project, index) in projects" :key="index">
        <p>{{ project.number }}</p>
        <h3>{{ project.name }}</h3>
        <p>{{ project.technologies }}</p>
        <a class="link-project" :href="project.link">{ Voir le projet }</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          number: "01 - 05",
          name: "Mangoo",
          technologies: "HTML SCSS",
          link: "https://github.com/DimitriZindovic/Mangoo",
        },
        {
          number: "02 - 05",
          name: "Event Time",
          technologies: "Symfony",
          link: "https://github.com/DimitriZindovic/Event-Time",
        },
        {
          number: "03 - 05",
          name: "Poké shop",
          technologies: "JavaScript",
          link: "https://github.com/DimitriZindovic/Poke-shop",
        },
        {
          number: "04 - 05",
          name: "Appli téléphone",
          technologies: "Vue CSS",
          link: "https://github.com/DimitriZindovic/Application-telephone",
        },
        {
          number: "05 - 05",
          name: "Ping Passion",
          technologies: "Wordpress",
          link: "https://github.com/DimitriZindovic/Ping-passion",
        },
      ],
    };
  },
};
</script>

<style>
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

@media screen and (max-width: 768px) {
  .project {
    margin: 1rem 2rem;
  }

  .container-project > h2 {
    font-size: 1.5rem;
  }

  .project > h3 {
    font-size: 4rem;
  }

  .project > p,
  .link-project {
    font-size: 1.2rem;
  }
}

@media screen and (min-width: 769px) and (max-width: 1524px) {
  .project {
    margin: 1.2rem 2.5rem;
  }

  .container-project > h2 {
    font-size: 1.8rem;
  }

  .project > h3 {
    font-size: 5.5rem;
  }

  .project > p,
  .link-project {
    font-size: 1.4rem;
  }
}

@media screen and (min-width: 1921px) {
  .project {
    margin: 2.5rem 7.5rem;
  }

  .container-project > h2 {
    font-size: 2.5rem;
  }

  .project > h3 {
    font-size: 12rem;
  }

  .project > p,
  .link-project {
    font-size: 2rem;
  }
}
</style>
