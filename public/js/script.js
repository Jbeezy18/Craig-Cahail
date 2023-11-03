var iframeElement   = document.querySelector('iframe');
var iframeElementID = iframeElement.id;
var widget1         = SC.Widget(iframeElement);
var widget2         = SC.Widget(iframeElementID);

const navbar = document.getElementById("main-navbar")
    
          window.addEventListener('scroll', function () {
            if (window.pageYOffset > 0) {
              navbar.classList.add("navbar-after-scroll")
            } else {
              navbar.classList.remove("navbar-after-scroll")
            }
          });