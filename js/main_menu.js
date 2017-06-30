// Jquery of the menu
var sideNav = $('#sideNav');
var openNav = $('#openNav');
var closeNav = $('#closeNav');

openNav.on('click', function () {
    sideNav.css('width', '100%');
});

closeNav.on('click',function () {
    sideNav.css('width', '0');
});