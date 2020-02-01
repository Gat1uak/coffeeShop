// hide preloader
// all the images scripts links have finished loading

(function () {
   // EventListeners function
   const ui = new UI();
   eventListeners();
   function eventListeners() {
      // window event list
      window.addEventListener('load', function () {
         setTimeout(function () {
            ui.hidePreloader();
         }, 2500)
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

   // Submit form
   document.querySelector('.drink-form').addEventListener('submit', function (event) {
      event.preventDefault();
      const name = document.querySelector('.input-name').value;
      const lastName = document.querySelector('.input-lastname').value;
      const email = document.querySelector('.input-email').value;

      let value = ui.checkIfEmpty(name, lastName, email);
      if (!value) {
         ui.showFeedback('You must enter valid values', 'error');
      } else {
         let customer = new Customer(name, lastName, email);
         ui.addCustomer(customer);
         ui.showFeedback('Welcome to our shop!', 'success');
         ui.clearInputFields();
      }
   })
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
   // Check for empty values
   UI.prototype.checkIfEmpty = function (name, lastName, email) {
      let result;
      if (name === '' || lastName === '' || email === '') {
         reuslt = false;
      } else {
         result = true;
      }
      return result;
   }
   UI.prototype.showFeedback = function (text, type) {
      let feedback = document.querySelector('.drink-form__feedback');
      if (type === 'success') {
         feedback.classList.add(type);
         feedback.innerText = text;
         this.removeAlert('success');
      } else if (type === 'error') {
         feedback.classList.add(type);
         feedback.innerText = text;
         this.removeAlert('error');
      }
   }
   // Remove alert
   UI.prototype.removeAlert = function (type) {
      setTimeout(function () {
         document.querySelector('.drink-form__feedback').classList.remove(type);
      },2000)
   }
   // add customer
   UI.prototype.addCustomer = function (customer) {
      const images = [1, 2, 3, 4, 5];
      let random = Math.floor(Math.random() * images.length);

      const div = document.createElement('div');
      div.classList.add('person');
      div.innerHTML = `
      <img src="img/person-${images[random]}.jpeg" alt="perosn" class="person__thumbnail">
      <h4 class="person__name">${customer.name}</h4>
      <h4 class="person__name">${customer.lastName}</h4>
      `;
      document.querySelector('.drink-card__list').appendChild(div);
   }
   // Clear input fields
   UI.prototype.clearInputFields = function () {
      document.querySelector('.input-name').value = '';
      document.querySelector('.input-lastname').value = '';
      document.querySelector('.input-email').value = '';
   }
   // Customer constructor function
   function Customer(name, lastName, email) {
      this.name = name;
      this.lastName = lastName;
      this.email = email;
   }
})();