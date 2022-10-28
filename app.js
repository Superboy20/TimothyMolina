const about = document.getElementById('about')
const skills = document.getElementById('skills')
const experience = document.getElementById('experience');
const projects = document.getElementById('projects');
const contact = document.getElementById('contact');

const firstItem = document.getElementById('firstItem');
const secondItem = document.getElementById('secondItem');
const thirdItem = document.getElementById('thirdItem');
const fourthItem = document.getElementById('fourthItem');
const fifthItem = document.getElementById('fifthItem');

about.addEventListener("click", navigateFirst, false);
skills.addEventListener("click", navigateSecond, false);
experience.addEventListener("click", navigateThird, false);
projects.addEventListener("click", navigateFourth, false);
contact.addEventListener("click", navigateFifth, false);

function navigateFirst(e) {
    firstItem.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
    });
};
function navigateSecond(e) {
    secondItem.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
    });
};
function navigateThird(e) {
    thirdItem.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
    });
};
function navigateFourth(e) {
    fourthItem.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
    });
};
function navigateFifth(e) {
    fifthItem.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
    });
};

document.addEventListener("DOMContentLoaded", function () {

    el_autohide = document.querySelector('.autohide');

    if (el_autohide) {
        var last_scroll_top = 0;
        window.addEventListener('scroll', function () {
            let scroll_top = window.scrollY;
            if (scroll_top < last_scroll_top || window.pageYOffset < 50) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            }
            else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;
        });
        // window.addEventListener
    }
});
