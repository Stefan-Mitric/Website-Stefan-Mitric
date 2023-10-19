// Selektiere das mobile Menü-Element und speichere es in der Variablen 'menu'
const menu = document.querySelector('#mobile-menu');


// Selektiere das Menü mit den Links und speichere es in der Variablen 'menuLinks'
const menuLinks = document.querySelector('.navbar__menu');


// Füge einen Event-Listener hinzu, der auf das Klicken des mobilen Menüs reagiert
menu.addEventListener('click', function() {

  
  // Toggle die CSS-Klasse 'is-active' für das mobile Menü-Element
  menu.classList.toggle('is-active');
  

  // Toggle die CSS-Klasse 'active' für das Menü mit den Links
  menuLinks.classList.toggle('active');
});
