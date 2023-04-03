document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector(".slides");
    const slide = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let counter = 0;
    const size = slide[0].clientWidth;
    
    slides.style.transition = "none";
    slides.style.transform = `translateX(${-size * counter}px)`;

    // delay the transition until the page has fully loaded
    setTimeout(() => {
        slides.style.transition = "transform 1.5s ease-in-out";
    }, 500);

    nextBtn.addEventListener("click", () => {
        if (counter >= slide.length - 1) {
            // reset counter to 0 to loop back to the beginning
            counter = 0;
            slides.style.transition = "none";
            slides.style.transform = `translateX(${-size * counter}px)`;
        } else {
            counter++;
            slides.style.transform = `translateX(${-size * counter}px)`;
        }
    });

    prevBtn.addEventListener("click", () => {
        if (counter <= 0) {
            // set counter to the last slide to loop back to the end
            counter = slide.length - 1;
            slides.style.transition = "none";
            slides.style.transform = `translateX(${-size * counter}px)`;
        } else {
            counter--;
            slides.style.transform = `translateX(${-size * counter}px)`;
        }
    });
});



