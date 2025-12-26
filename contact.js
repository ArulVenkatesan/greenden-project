//selecting side-nav,menu-bar,remove-nav

var menubar = document.getElementById("menu-bar")
var sidenav = document.getElementById("side-nav")
var removenav = document.getElementById("remove-nav")

//event listener function

menubar.addEventListener("click", function () {
    sidenav.style.right = 0
})

removenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})