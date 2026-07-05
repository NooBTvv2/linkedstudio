const cascadeems = document.querySelectorAll('.cascade-container')

cascadeems.forEach(element => {
    document.addEventListener("mousemove", (event) => {
        rotate3d(event, element)
    })    
});

function rotate3d(event, element) {
    const x = event.clientX;
    const y = event.clientY;

    const midX = window.innerWidth /2 ;
    const midY = window.innerHeight / 2;

    const offsetX = ((x - midX) / midX)*20
    const offsetY = ((y - midY) / midY)*20
    
    element.style.setProperty("--rotate3dX", -1 * offsetY + "deg")
    element.style.setProperty("--rotate3dY", offsetX + "deg")
}