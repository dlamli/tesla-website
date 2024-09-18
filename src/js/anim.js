const listItem = document.querySelectorAll("#header-main li");
const menuDrop = document.querySelector("#menu-backdrop");

listItem.forEach((item) => {
    item.addEventListener("mouseenter", ({ target }) => {
        const { left, top, width, height } = target.getBoundingClientRect();
        menuDrop.style.setProperty("--left", `${left}px`);
        menuDrop.style.setProperty("--top", `${top}px`);
        menuDrop.style.setProperty("--width", `${width}px`);
        menuDrop.style.setProperty("--height", `${height}px`);
        menuDrop.style.opacity = "1";
        menuDrop.style.visibility = "visible";
    });

    item.addEventListener("mouseleave", () => {
        menuDrop.style.opacity = "0";
        menuDrop.style.visibility = "hidden";
    });
});
