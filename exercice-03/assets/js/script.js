let firstParagraph = document.getElementById("firstParagraph");
let secondParagraph = document.getElementById("secondParagraph");

window.onscroll = function () {
    if (window.scrollY >= firstParagraph.getBoundingClientRect().top) {
        firstParagraph.style.visibility = "visible";
    }
    if (window.scrollY >= secondParagraph.getBoundingClientRect().top) {
        secondParagraph.style.visibility = "visible";
    }
};