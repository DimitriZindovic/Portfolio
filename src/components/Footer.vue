<template>
  <footer>
    <div class="nav-links-footer">
      <ul class="nav-footer">
        <li><a href="#about">À propos</a></li>
        <li><a href="#experience">Tech</a></li>
        <li><a href="#projects">Projets</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
    <p>©Copyright 2024 - Dimitri Zindovic</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
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
  footer {
    padding: 2rem 0;
  }

  footer > p {
    font-size: 0.8rem;
  }

  .nav-links-footer {
    justify-content: center;
  }

  .nav-footer {
    font-size: 1.5rem;
    margin: 0 2rem;
  }
}

@media screen and (min-width: 769px) and (max-width: 1920px) {
  footer {
    padding: 2.5rem 0;
  }

  footer > p {
    font-size: 1rem;
  }

  .nav-footer {
    font-size: 1.8rem;
    margin: 0 2.5rem;
  }
}

@media screen and (min-width: 1921px) {
  footer {
    padding: 3rem 0;
  }

  footer > p {
    font-size: 1.2rem;
  }

  .nav-footer {
    font-size: 2rem;
    margin: 0 7.5rem;
  }
}
</style>
