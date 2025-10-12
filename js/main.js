
document.querySelectorAll('a[href^=\"#\"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault()
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' })
  })
})


const toggleDark = document.createElement('button')
toggleDark.textContent = '🌙'
toggleDark.style.position = 'fixed'
toggleDark.style.bottom = '1rem'
toggleDark.style.right = '1rem'
document.body.appendChild(toggleDark)

toggleDark.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})

document.head.insertAdjacentHTML('beforeend', `
<style>
  body.dark { background-color: #111; color: #eee; }
  body.dark .header, body.dark .footer { background: #222; }
</style>
`)

// js/main.js
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
});

// js/main.js

document.addEventListener("DOMContentLoaded", () => {
  const words = ["esfuerzo", "autocrecimiento", "aprendizaje"];
  let index = 0;
  let char = 0;
  const element = document.querySelector(".typing");

  function typeEffect() {
    if (!element) return;

    if (char < words[index].length) {
      element.textContent += words[index].charAt(char);
      char++;
      setTimeout(typeEffect, 120);
    } else {
      setTimeout(() => {
        element.textContent = "";
        index = (index + 1) % words.length;
        char = 0;
        typeEffect();
      }, 1500);
    }
  }

  typeEffect();
});

