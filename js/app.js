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
   }
   // Constructor function object
   function UI() { }
   UI.prototype.hidePreloader = function () {
      document.querySelector('.preloader').style.display = 'none';
   }
   UI.prototype.showNav = function () {
      document.querySelector('.nav').classList.toggle('nav__show');
   }

})();