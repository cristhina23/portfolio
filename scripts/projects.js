const displayContainer = document.getElementById("projects-container");


let projectsData = [];

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
      <div >
        <div>
        <img src="${project.image}" alt="${project.name}" />
      </div>
      <div>
        <h3>${project.name}</h3>
        <p class="cs_text">${project.shortDescription}</p>
        <div class="flex-center"><a class="cs_btn cs_style_1" href="project-details.html?id=${project.id}">Project Details</a></div>
        <a class="links" href="${project.links.liveDemo}" target="_blank">Ver Live</a> | 
        <a class="links" href="${project.links.repo}" target="_blank">Ver Repo</a>
      </div>
      </div>
    `;
    displayContainer.appendChild(card);
  });
}


