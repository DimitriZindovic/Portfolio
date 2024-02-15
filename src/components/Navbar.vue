<template>
  <nav id="desktop-nav">
    <div>
      <ul class="nav-links">
        <li><a href="#about">À propos</a></li>
        <li><a href="#experience">Tech</a></li>
        <li><a href="#projects">Projets</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
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
}
</style>
