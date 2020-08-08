// Your code goes here
const body = document.querySelector('body');
body.style.fontSize = "1.5rem";
body.addEventListener('keydown', (event) => {
    body.style.background = "lightblue";
});
const createH3 = document.createElement('h3');
createH3.textContent = "Press any key on your keybord so your page can turn blue :)";
createH3.style.fontSize = "1rem";
const h1 = document.querySelector('h1');
h1.appendChild(createH3);
h1.style.textAlign = "center";
const footerStyling = document.querySelector('footer');
footerStyling.style.color = "white";
footerStyling.style.padding = "2rem";
footerStyling.style.background = "deeppink";
footerStyling.style.textAlign = "center";
const navigation = document.querySelectorAll('.nav-link');
navigation.forEach((element) => {
    element.style.padding = "1.5rem";
    element.style.textDecoration = "none";
});
const navBar = document.querySelector('.nav');
navBar.style.padding = "3rem";
navBar.style.dispalyFlex = "flex";
navBar.style.justifyContent = "space-between";
navBar.style.alignItems = "space-between";
navigation.forEach((element) => {
    element.style.fontSize = "1.3rem";
    element.style.color = "black";
    // element.style.textAlign = "center";
});
//console.log(navBar);
navigation.forEach((element) => element.addEventListener('mouseover', (event) => {
    element.style.transforme = "scale(2)";
    element.style.background = "gray";
    element.style.color = "green";
    //element.style.fontSize = "1.5rem";
}));
navigation.forEach((element) => {
    element.addEventListener('mouseout', (event) => {
        element.style.transforme = "none";
        element.style.background = "white";
        element.style.color = "#00BFFF";
        //element.style.fontSize = "1.5rem";
    })
});
const imgTags = document.querySelectorAll('img');
window.addEventListener('resize', (event) => {
    imgTags[0].style.width = "100%";
    imgTags[1].style.width = "90%";
    imgTags[2].style.width = "90%";
    imgTags[3].style.width = "100%";
    // event.preventDefault();
});
window.addEventListener('load', (event) => {
    console.log('page has loaded');
});
const createButton = document.createElement('button');
createButton.textContent = "See More!";
//console.log(footerStyling);
//console.log(createButton);
footerStyling.appendChild(createButton);
createButton.addEventListener('dblclick', (event) => {
    createButton.style.background = "#9400D3";
    createButton.style.color = "white";
    event.stopPropagation();
});
footerStyling.addEventListener('dblclick', (event) => {
    footerStyling.style.background = "#BDB76B";
    footerStyling.style.border = "1px solid #D2691E";
});
imgTags[1].addEventListener('wheel', (event) => {
    event.target.src = "https://cdn3.vox-cdn.com/thumbor/bh23Zg-SBn3fvfJ2Ty6HTTPG82Y=/0x0:1386x780/1600x900/cdn0.vox-cdn.com/uploads/chorus_image/image/49965571/google-maps-earth-1.0.0.jpg";
});
const pTag = document.createElement('p');
pTag.textContent = "Click the image bellow for another cool picture of Venice!"
pTag.style.color = "#FF00FF";
const pendPTagHere = document.querySelector('.img-content');
pendPTagHere.appendChild(pTag);
//console.log(pTag);
imgTags[2].addEventListener('click', (event) => {
    event.target.src = "https://s27363.pcdn.co/wp-content/uploads/2017/10/Photographing-Venice.jpg.optimal.jpg";
});