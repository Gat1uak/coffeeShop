// hide preloader
// all the images scripts links have finished loading

(function () {
   // EventListeners function
   eventListeners();
   function eventListeners() {
      const ui = new UI();
      // window event list
      window.addEventListener('load', function () {
         setTimeout(function () {
            ui.hidePreloader();
         }, 3000)
      })
      // Navigation Toggle Button
      document.querySelector('.navBtn').addEventListener('click', function () {
         ui.showNav();
      })
      // Video controller
      document.querySelector('.video__switch').addEventListener('click', function () {
         ui.videoControl();
      })
   }
   // Constructor function object
   function UI() { }
   // Hide Preloader
   UI.prototype.hidePreloader = function () {
      document.querySelector('.preloader').style.display = 'none';
   }
   // Show Navigation bar
   UI.prototype.showNav = function () {
      document.querySelector('.nav').classList.toggle('nav__show');
   }
   // Pause/Play video
   UI.prototype.videoControl = function () {
      let btn = document.querySelector('.video__switch-btn');
      if (!btn.classList.contains('btnSlide')) {
         btn.classList.add('btnSlide');
         document.querySelector('.video__item').pause();
      } else {
         btn.classList.remove('btnSlide');
         document.querySelector('.video__item').play();
      }
   }
})();