




// header hover and logo transition 🔝
document.addEventListener('DOMContentLoaded', function() {
     const header = document.querySelector('header');
     const logoBlack = document.getElementById('logo-black');
     const logoWhite = document.getElementById('logo-white');

     header.addEventListener('mouseover', function() {
         logoBlack.style.display = 'none';
         logoWhite.style.display = 'block';
    });

     header.addEventListener('mouseout', function() {
         logoBlack.style.display = 'block';
         logoWhite.style.display = 'none';
    });
});

// Hamburger Click Event 🍔
document.addEventListener('DOMContentLoaded', function() {
     const header = document.querySelector('header');
     const menuContainer = document.querySelector('.menu-container');
     const closeMenu = document.getElementById('close-menu');
     const hamburgerMenu = document.getElementById('hamburger-menu');

     // Toggle menu on header click
     header.addEventListener('click', function(event) {
         if (!menuContainer.classList.contains('show')) {
             event.stopPropagation();
             menuContainer.classList.add('show');
             hamburgerMenu.style.display = 'none';
             closeMenu.style.display = 'block';
        }
    });

// Close menu when clicking on the close button ❌
closeMenu.addEventListener('click', function(event) {
     event.stopPropagation();
     menuContainer.classList.remove('show');
     hamburgerMenu.style.display = 'block';
     closeMenu.style.display = 'none';
    });

// Close menu when clicking outside of the menu container
document.addEventListener('click', function(event) {
     if (!menuContainer.contains(event.target) && !header.contains(event.target)) {
         menuContainer.classList.remove('show');
         hamburgerMenu.style.display = 'block';
         closeMenu.style.display = 'none';
        }
    });

    // Prevent menu from closing when clicking inside the menu container
     menuContainer.addEventListener('click', function(event) {
     event.stopPropagation();
    });
});

// masonry-layout-container 🧱
document.addEventListener('click', function(event) {
    const dropdownHeader = document.getElementById('dropdownHeader');
    const dropdownContent = document.getElementById('dropdownContent');
    const overlayModal = document.getElementById('overlayModal');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.getElementById('closeBtn');

    // Toggle dropdown content when clicking on the dropdown header
    if (dropdownHeader.contains(event.target)) {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    } else if (event.target.classList.contains('dropdown-item')) {
        // Show modal when a dropdown item is clicked
        const content = event.target.getAttribute('data-content');
        modalBody.textContent = content;
        overlayModal.style.display = 'flex'; // Show modal
        dropdownContent.style.display = 'none'; // Hide dropdown content
    } else if (overlayModal.style.display === 'flex' && 
              (event.target === overlayModal || event.target === closeBtn)) {
        // Close modal when clicking on the overlay or close button
        overlayModal.style.display = 'none';
    } else {
        // Close the dropdown content when clicking outside of it
        dropdownContent.style.display = 'none';
    }
});





