const header = document.querySelector("#header-main");
const headerSection = document.querySelectorAll(".landing-section");

const observerOptions = {
    root: null, //defaults to viewport root,
    rootMargin: "0px", //Defines the minimum distance from the top-left corner of the root to the top-left corner of the target element, in CSS units (e.g., "10px", "20%").
    threshold: 0.9, //Defines the intersection ratio at which the target element should be considered visible, as a decimal value (e.g., 0, 0.5, 1).
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const { isIntersecting } = entry;
        if (isIntersecting) {
            const color = entry.target.getAttribute("data-header-color");
            console.log(color);
            header.style.color = color;
        }
    });
}, observerOptions);

headerSection.forEach((section) => observer.observe(section));
