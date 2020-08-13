function randon(event){
    let red = Math.floor(Math.random() * (255 - 0) + 0);
    let green = Math.floor(Math.random() * (255 - 0) + 0);
    let blue = Math.floor(Math.random() * (255 - 0) + 0);
    return `rgb(${red}, ${green}, ${blue})`;
}
function change(event){
    let paragraph = event.currentTarget;
    paragraph.style.color = randon();
} 
let x = document.querySelectorAll('.mainContent p');

for(let g = 0; g < x.length; g++){
    x[g].addEventListener('mouseenter', randon);
    x[g].addEventListener('mouseleave', change);
}

