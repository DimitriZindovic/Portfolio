<template>
  <section id="contact">
    <div class="container-contact">
      <h2>CONTACT</h2>
      <div class="container-contact-cv">
        <div class="contact">
          <a
            href="https://www.linkedin.com/in/dimitri-zindovic/"
            class="btn-contact"
          >
            <img :src="linkedin" alt="" />LinkedIn
          </a>
          <a href="https://github.com/DimitriZindovic" class="btn-contact">
            <img :src="githubBlack" alt="" />GitHub
          </a>
          <a href="mailto:dimitri.zindovic@gmail.com" class="btn-contact">
            <img :src="email" alt="" />Email
          </a>
        </div>
        <div class="cv">
          <a href="../assets/CV_Dimitri_ZINDOVIC.pdf" class="btn-cv" download>
            Télécharger mon CV
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import linkedin from "../assets/linkedin.png";
import githubBlack from "../assets/github-black.png";
import email from "../assets/email.png";

export default {
  name: "Contact",
  data() {
    return {
      linkedin,
      githubBlack,
      email,
    };
  },
};
</script>

<style>
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

@media screen and (max-width: 768px) {
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
}

@media screen and (min-width: 769px) and (max-width: 1524px) {
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
}

@media screen and (min-width: 1921px) {
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
}
</style>
