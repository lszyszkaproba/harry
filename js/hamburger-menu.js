
$(function(){

    var nav = document.querySelector('.nav');
    var toggle = document.querySelector('.hamburger');
    var navItems = nav.querySelectorAll('.nav__link');

    toggle.addEventListener('click', toggleNav);

    function toggleNav() {
        
        nav.classList.toggle('active');

        toggle.classList.toggle('active');

        for (var i = 0; i < navItems.length; i++) {
            navItems[i].classList.toggle('active');
        }
    }

});


