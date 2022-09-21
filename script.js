const text = document.querySelector(".country");

const animation = () => {
    setTimeout(() => {
        text.textContent = "Spain";
    }, 0);
    setTimeout(() => {
        text.textContent = "France";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Italy";
    }, 8000);
    setTimeout(() => {
        text.textContent = "Turkey";
    }, 12000);
    setTimeout(() => {
        text.textContent = "Greece";
    }, 16000);
    setTimeout(() => {
        text.textContent = "Cyprus";
    }, 20000);
    setTimeout(() => {
        text.textContent = "Portugal";
    }, 24000);
    setTimeout(() => {
        text.textContent = "Croatia";
    }, 28000);
}

animation();
setInterval(animation, 32000);