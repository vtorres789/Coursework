

const root = document.getElementById("root");

const h1 = document.createElement("h1");
h1.innerHTML = "MONA LISA";

root.appendChild(h1);

const img = document.createElement("img");
img.src = './assets/mona_lisa.jpg';
root.appendChild(img);

const p = document.createElement("p");
p.innerText = "The Mona Lisa is a famous painting."
root.appendChild(p);