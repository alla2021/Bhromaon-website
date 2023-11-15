document.addEventListener('DOMContentLoaded', function () {
   const scrollBtn = document.getElementById('scroll-btn');
   const aboutSection = document.getElementById('choose');

   scrollBtn.addEventListener('click', function () {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
   });

   const burgerBtn = document.querySelector('.js-burger-btn');
   const header = document.querySelector('.js-header');

   burgerBtn.addEventListener('click', function () {
      if (header.classList.contains('active')) {
         header.classList.remove('active');
      } else {
         header.classList.add('active');
      }
   });
});

