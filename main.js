
$(document).ready(function() {
    var ptoggle = document.getElementById("project-carousel");

    function toggleSlide(x) {
        if (x.matches) { // If media query matches
            ptoggle.classList.toggle("slide");
        } else{
            ptoggle.classList.toggle("slide");
        }
    }

    var x = window.matchMedia("(max-width: 992px)");
    toggleSlide(x); // Call listener function at run time
    x.addListener(toggleSlide); // Attach listener function on state 
});
