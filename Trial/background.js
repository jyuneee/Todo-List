const images = [
    "city.png","house.png","lighthouse.png",
]
const chosenImages = images[Math.floor(Math.random()*images.length)];

const bgImages = document.createElement("img");

bgImages.src= `Trial/${chosenImages}`;

document.body.appendChild(bgImages);
bgImages.classList.add("backgroundImg");