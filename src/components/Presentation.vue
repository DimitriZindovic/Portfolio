<template>
  <section id="presentation">
    <p data-aos="fade-down">Apprenti Développeur Full Stack</p>
    <h1 data-aos="fade-down">{ Portfolio de * Dimitri ZINDOVIC }</h1>
  </section>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "Presentation",
  mounted() {
    AOS.init({
      duration: 3000,
    });
  },
};
</script>

<style>
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

@media screen and (max-width: 768px) {
  #presentation {
    margin: 1rem;
    height: 50vh;
  }

  #presentation > p {
    font-size: 1.2rem;
    padding: 1.5rem 0;
  }

  h1 {
    margin-top: 2git 5%;
    font-size: 5rem;
  }
}

@media screen and (min-width: 769px) and (max-width: 1524px) {
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
}

@media screen and (min-width: 1921px) {
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
}
</style>
