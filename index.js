let cont = document.querySelectorAll('.bloc');

function color() {
    setInterval(() =>
        cont.forEach((cont) => {
            let randomColor = Math.floor(Math.random() * 16777215).toString(16);
            cont.style.background = "#" + randomColor;
        }), 1000);
}

color();
click = document.getElementById("#click");
click.addEventListener("click",  color);
