const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-menu-line" : "ri-close-line");
  if (isOpen) {
    navLinks.classList.add("close");
    navLinks.addEventListener(
      "animationend",
      (e) => {
        navLinks.classList.remove("open");
        navLinks.classList.remove("close");
      },
      { once: true }
    );
  } else {
    navLinks.classList.add("open");
  }
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container .section__subheader", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container .scroll__btn", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__container .header__socials", {
  ...scrollRevealOption,
  origin: "left",
  delay: 1500,
});

ScrollReveal().reveal(".about__image-1, .about__image-3", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".about__image-2", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});


const mountains = [
  { name: ' Ala-Too mountain', height: 4895, width: 32, Plazas: 354,  location: ' Ala-Too/Ala-Too mountain' },
  { name: ' Ala-Too mountain', height: 4895, width: 32, Plazas: 354,  location: ' Pobeda Peak/Pobeda Peak mountain' },
  { name: 'Kangchenjunga', height: 8586, location: 'photo/photo' },

];

function searchMountains() {
  const query = document.getElementById('search-input').value.toLowerCase();
  const resultsContainer = document.getElementById('results-container');

  
  resultsContainer.innerHTML = '';


  const results = mountains.filter(mountain => 
      mountain.name.toLowerCase().includes(query) ||
      mountain.location.toLowerCase().includes(query)
  );


  if (results.length > 0) {
      results.forEach(mountain => {
          const resultDiv = document.createElement('div');
          resultDiv.className = 'result';
          resultDiv.innerHTML = `<strong>${mountain.name}</strong><br>Height: ${mountain.height} m<br>width: ${mountain.width} m<br>plazas${mountain.Plazas} m<br>Location: ${mountain.location}`;
          resultsContainer.appendChild(resultDiv);
      });
  } else {
      resultsContainer.innerHTML = 'No results found';
  }
}
