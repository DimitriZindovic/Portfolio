<template>
  <section id="presentation">
    <p>Apprenti Développeur Full Stack</p>
    <h1>{ Portfolio de * Dimitri ZINDOVIC }</h1>
  </section>
</template>

<script>
export default {
  name: "Presentation",
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
    height: auto;
  }

  #presentation > p {
    font-size: 1.2rem;
    padding: 1.5rem 0;
  }

  h1 {
    font-size: 4rem;
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
