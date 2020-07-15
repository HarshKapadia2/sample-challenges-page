const all_challenges = document.querySelector(".challenges-container-all");
const all_challenges_button = document.querySelector(".all");

const unsolved_challenges = document.querySelector(".challenges-container-unsolved");
const unsolved_challenges_button = document.querySelector(".unsolved");

const solved_challenges = document.querySelector(".challenges-container-solved");
const solved_challenges_button = document.querySelector(".completed");

window.addEventListener
(
    "load",
    () =>
    {
        unsolved_challenges.classList.add("hide");
        solved_challenges.classList.add("hide");
    }
);

all_challenges_button.addEventListener
(
    "click",
    () =>
    {
        all_challenges.classList.remove("hide");
        unsolved_challenges.classList.add("hide");
        solved_challenges.classList.add("hide");
    }
);

unsolved_challenges_button.addEventListener
(
    "click",
    () =>
    {
        all_challenges.classList.add("hide");
        unsolved_challenges.classList.remove("hide");
        solved_challenges.classList.add("hide");
    }
);

solved_challenges_button.addEventListener
(
    "click",
    () =>
    {
        all_challenges.classList.add("hide");
        unsolved_challenges.classList.add("hide");
        solved_challenges.classList.remove("hide");
    }
);