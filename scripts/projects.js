const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const displayContainer = document.getElementById("projects-container");
const lastModified = document.lastModified;

document.getElementById("last-updated").textContent = `Last modified: ${lastModified}`;

let projectsData = [];

// Botón Grid
gridbutton.addEventListener("click", () => {
  displayContainer.classList.remove("list");
  displayGrid(projectsData);
});

// Botón Lista
listbutton.addEventListener("click", () => {
  displayList(projectsData);
});

// Cargar proyectos al iniciar
document.addEventListener("DOMContentLoaded", () => {
  loadProjects();
});

async function loadProjects() {
  try {
    const response = await fetch("scripts/data.json");
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const projects = await response.json();
    projectsData = projects;
    displayGrid(projects); 
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
}

// GRID VIEW
function displayGrid(projects) {
  displayContainer.innerHTML = "";
  projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <div class="card-image">
        <img src="${project.image}" alt="${project.name}" />
      </div>
      <div class="card-info-project">
        <h3>${project.name}</h3>
        <p>${project.shortDescription}</p>
        <a href="${project.links.liveDemo}" target="_blank">Ver Live</a> | 
        <a href="${project.links.repo}" target="_blank">Ver Repo</a>
      </div>
    `;
    displayContainer.appendChild(card);
  });
}

// LIST VIEW
function displayList(projects) {
  displayContainer.innerHTML = "";
  displayContainer.classList.add("list");

  projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("card-list");

    card.innerHTML = `
      <div class="card-list-info">
        <p class="name-list">${project.name}</p>
        <p>${project.description}</p>
        <a href="${project.live}" target="_blank">Live</a> | 
        <a href="${project.repo}" target="_blank">Repo</a>
      </div>
    `;
    displayContainer.appendChild(card);
  });
}
