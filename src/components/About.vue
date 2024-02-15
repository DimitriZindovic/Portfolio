<template>
  <section id="about">
    <div class="container-about">
      <h2>À PROPOS DE MOI</h2>
      <p>
        Je suis actuellement étudiant en 2ème année à l'IIM Digital School.
        Passionné par ce domaine, je cherche continuellement à m'améliorer en
        solidifiant mes bases et en voulant acquérir de nouvelles compétences,
        c'est pourquoi je suis à la recherche d'une entreprise pour septembre
        2023 dans le cadre d'une alternance au rythme de 3 semaines d'entreprise
        / 1 semaine d'école pour une durée de 1 an.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style>
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

@media screen and (max-width: 768px) {
  #about {
    height: auto;
    margin: 0 2rem;
  }

  .container-about {
    grid-template-columns: 1fr;
    gap: 4rem;
    margin: 5rem 0;
  }

  .container-about > h2 {
    font-size: 1.5rem;
  }

  .container-about > p {
    font-size: 1.2rem;
  }
}

@media screen and (min-width: 769px) and (max-width: 1524px) {
  #about {
    height: auto;
    margin: 0 2.5rem;
  }

  .container-about {
    grid-template-columns: 1fr;
    gap: 5rem;
    margin: 6rem 0;
  }

  .container-about > h2 {
    font-size: 1.8rem;
  }

  .container-about > p {
    font-size: 1.4rem;
  }
}

@media screen and (min-width: 1921px) {
  #about {
    height: auto;
    margin: 0 7.5rem;
  }

  .container-about > h2 {
    font-size: 2.5rem;
  }

  .container-about > p {
    font-size: 2rem;
  }
}
</style>
