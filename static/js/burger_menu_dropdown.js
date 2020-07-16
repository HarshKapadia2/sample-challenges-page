const ul = document.querySelector(".navbar-main-ul");
const burger_menu = document.querySelector(".burger-menu");

window.addEventListener
(
    "load",
    () =>
    {
        const width = document.documentElement.clientWidth;

        if(width < 1183)
            ul.classList.add("hide");
    }
);

window.addEventListener
(
    "resize",
    () =>
    {
        const width = document.documentElement.clientWidth;

        if(width < 1183)
            ul.classList.add("hide");
        else
           ul.classList.remove("hide");
    }
);

burger_menu.addEventListener
(
    "click",
    () =>
    {
        ul.classList.toggle("hide");
        ul.classList.toggle("burger-menu-dropdown");
    }
);