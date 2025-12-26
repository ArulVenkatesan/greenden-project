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

//search functionality

var productcontainer = document.getElementById("productcontainer")
var search = document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")
console.log(productlist)

search.addEventListener("keyup", function (event) {
    var enteredvalue = event.target.value.toUpperCase()
    for (let i = 0; i < productlist.length; i++) {
        var productname = productlist[i].querySelector("h2").textContent
        if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
            productlist[i].style.display = "none"
        }
        else {
            productlist[i].style.display = "block"
        }
    }
})