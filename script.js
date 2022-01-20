let backgroundColor = document.querySelectorAll(".theme");
backgroundColor.forEach(color => {

    color.addEventListener("click", () => {
        let dataColor = color.getAttribute("data-color");
        document.querySelector(":root").style.setProperty("--main-color", dataColor);
    });
});


