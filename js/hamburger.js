document.getElementById("hamburgerIcon").addEventListener("click", function(event) {
    var menuContent = document.getElementById("menuContent");
    var hamburgerMenu = document.getElementById("hamburgerMenu");
    
    if (menuContent.classList.contains("show")) {
      menuContent.classList.remove("show");
      hamburgerMenu.classList.remove("show");
    } else {
      menuContent.classList.add("show");
      hamburgerMenu.classList.add("show");
    }
    event.stopPropagation(); // Zapobiega propagacji zdarzenia kliknięcia
  });
  
  document.addEventListener("click", function(event) {
    var menuContent = document.getElementById("menuContent");
    var hamburgerMenu = document.getElementById("hamburgerMenu");
  
    if (menuContent.classList.contains("show") && !menuContent.contains(event.target)) {
      menuContent.classList.remove("show");
      hamburgerMenu.classList.remove("show");
    }
  });
  
  document.getElementById("menuContent").addEventListener("click", function(event) {
    event.stopPropagation(); // Zapobiega propagacji zdarzenia kliknięcia wewnątrz menu
  });
  