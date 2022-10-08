
const btnEl = document.querySelector('.btn');

btnEl.addEventListener("mouseover", (event) => {
    console.log("X: ", event.pageX);
    console.log("Y: ", event.pageY);

    const x = event.pageX - btnEl.offsetLeft;
    const y = event.pageY - btnEl.offsetTop;

    btnEl.style.setProperty("--xPos", x + "px");
    btnEl.style.setProperty("--yPos", y + "px");
    //Center of the hovering background will start from the mouse hoverpoint.
});