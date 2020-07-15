const dropdown = document.querySelector(".dropdown");
const account = document.querySelector(".account");

window.addEventListener
(
    "load",
    () =>
    {
        dropdown.classList.add("hide");
    }
);

account.addEventListener
(
    "click",
    () =>
    {
        dropdown.classList.toggle("hide");
    }
);