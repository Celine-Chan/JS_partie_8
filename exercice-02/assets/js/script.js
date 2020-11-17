// let fables = document.querySelectorAll('a');

// fables.forEach(fable => {
//         fable.addEventListener('click', function (e) {
//             e.preventDefault();
//             document.querySelector(fable.getAttribute('href')).scrollIntoView({
//                 behavior: 'smooth'
//             });
//         });
//     });


// code Chris

// let textSmooth = document.querySelectorAll("nav a");

// textSmooth.forEach(e => e.addEventListener("click", function(e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute("href")).scrollIntoView({
//         behavior: "smooth"
//     });
// }));


// correction

const arrayA = document.querySelectorAll("li a");
console.log(arrayA);

// arrayA[0].onclick = function(event) {
//     console.log("ok");
//     event.preventDefault();
//     fable1.scrollIntoView({behavior: "smooth"});
// };

// arrayA[1].onclick = function(event) {
//     console.log("ok");
//     event.preventDefault();
//     fable2.scrollIntoView({behavior: "smooth"});
// };

// arrayA[2].onclick = function(event) {
//     console.log("ok");
//     event.preventDefault();
//     fable3.scrollIntoView({behavior: "smooth"});
// };

// arrayA[3].onclick = function(event) {
//     console.log("ok");
//     event.preventDefault();
//     fable4.scrollIntoView({behavior: "smooth"});
// };

// arrayA[4].onclick = function(event) {
//     console.log("ok");
//     event.preventDefault();
//     fable5.scrollIntoView({behavior: "smooth"});
// };

arrayA.forEach(element => element.onclick = function(event) {
    event.preventDefault();
    
    document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
    });
});

