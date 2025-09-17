/* =====================================================
   Resume section tabs and tab contents
===================================================== */
const resumeTab = document.querySelector(".resume-tabs");
const resumePortfolioTabBtns = document.querySelectorAll('.tab-btn');
const resumeTabContents = document.querySelectorAll('.resume-tab-content');

let resumeTabNav = function(resumeTabClick){

   resumeTabContents.forEach((resumeTabContent) =>{
      resumeTabContent.style.display = 'none';
      resumeTabContent.classList.remove('active');
   });

   resumePortfolioTabBtns.forEach((resumePortfolioTabBtn) =>{
      resumePortfolioTabBtn.classList.remove('active');
   })

   resumeTabContents[resumeTabClick].style.display = 'flex';

   setTimeout(() => {
      resumeTabContents[resumeTabClick].classList.add('active');   
   }, 100);

   resumePortfolioTabBtns[resumeTabClick].classList.add('active');
}

resumePortfolioTabBtns.forEach((resumePortfolioTabBtn, i) => {
  resumePortfolioTabBtn.addEventListener("click", (e) => {
    e.preventDefault(); // stop <a> from reloading page
    resumeTabNav(i);
  });
});

/* =====================================================
   Service modal open/close function
===================================================== */
const serviceCardModals = document.querySelectorAll(".service-container .card-with-modal");

serviceCardModals.forEach((serviceCardModal) => {
   const serviceCard = serviceCardModal.querySelector(".service-card");
   const serviceBackDrop = serviceCardModal.querySelector(".service-modal-backdrop");
   const modalCloseBtn = serviceCardModal.querySelector(".modal-close-btn");
   const serviceModal = serviceCardModal.querySelector(".service-modal");

   // Open modal
   serviceCard.addEventListener("click", (e) => {
      e.preventDefault(); // prevent link reload
      serviceBackDrop.style.display = "flex";
      setTimeout(() => {
         serviceBackDrop.classList.add("active");
         serviceModal.classList.add("active");
      }, 10);
   });

   // Close modal with close button
   modalCloseBtn.addEventListener("click", (e) => {
      e.preventDefault();
      closeModal();
   });

   // Close modal by clicking backdrop
   serviceBackDrop.addEventListener("click", (e) => {
      if (e.target === serviceBackDrop) {
         closeModal();
      }
   });

   function closeModal() {
      serviceModal.classList.remove("active");
      serviceBackDrop.classList.remove("active");
      setTimeout(() => {
         serviceBackDrop.style.display = "none";
      }, 300); // matches CSS transition
   }
});


/* =====================================================
   Portfolio modals, tabs and cards
===================================================== */

// Filter portfolio cards according to portfolio tabs.

// Open/Close Portfolio modals.

/* =====================================================
   Testimonial Swiper
===================================================== */

/* =====================================================
   Send/Receive emails from contact form - EmailJS
===================================================== */

/* =====================================================
   Shrink the height of the header on scroll
===================================================== */

/* =====================================================
   Bottom navigation menu
===================================================== */

// Each bottom navigation menu items active on page scroll.

// Javascript to show bottom navigation menu on home(page load).

// Javascript to show/hide bottom navigation menu on home(scroll).

// Hide bottom navigation menu on click menu-hide-btn.

// Show bottom navigation menu on click menu-show-btn.

/* =====================================================
   To-top-button with scroll indicator bar
===================================================== */

/* =====================================================
   Customized cursor on mousemove
===================================================== */

// Cursor effects on hover website elements.

/* =====================================================
   Website dark/light theme
===================================================== */

// Change theme and save current theme on click the theme button.

// Get saved theme icon and theme on document loaded.

/* =====================================================
   ScrollReveal JS animations
===================================================== */

// Common reveal options to create reveal animations.

// Target elements and specify options to create reveal animations.
      