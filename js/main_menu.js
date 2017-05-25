var sideNav = document.getElementById('sideNav');

var openNav = document.getElementById('openNav');
openNav.addEventListener("click",function () {
    sideNav.style.width = "100%";
})

var closeNav = document.getElementById('closeNav');
closeNav.addEventListener("click",function () {
    sideNav.style.width = "0";
})