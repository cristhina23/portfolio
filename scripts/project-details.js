const projectContainer = document.getElementById("projects-details");

async function loadProject() {
  const params = new URLSearchParams(window.location.search);
  const projectId = parseInt(params.get("id"));

  if (!projectId) {
    projectContainer.innerHTML = "<h2>Project not found</h2>";
    return;
  }

  try {
    const response = await fetch("scripts/data.json");
    const projects = await response.json();
    console.log(projects);
    const project = projects.find(p => p.id === projectId);

    if (!project) {
      projectContainer.innerHTML = "<h2>Project not found</h2>";
      return;
    }

    
    projectContainer.innerHTML = `
      <h1 class="title-projects">${project.name}</h1>
      <p><strong>Date Completed:</strong> ${project.dateCompleted}</p>
      <img src="${project.image}" alt="${project.name}" style="max-width:100%; height:auto;"/>

      <div class="">
        <h2 class="highlight">Description</h2>
        <p class="cs_text">${project.longDescription}</p>
      </div>

      
        <div >
        <h4>Technologies Used</h4>
        <ul class="text-start technologies-list">
          ${project.technologies.map(tech => `<li class="cs_text">${tech}</li>`).join('')}
        </ul>
      </div>
      <div class="portfolio_grid_2"  >
      <div class="card">
        <h4>UI / UX Highlights</h4>
        <ul class="text-start">
          ${project.uiux.map(item => `<li class="cs_text">${item}</li>`).join('')}
        </ul>
      </div>

      <div class="card" >
        <h4>Main Features</h4>
        <ul class="text-start">
          ${project.features.map(item => `<li class="cs_text">${item}</li>`).join('')}
        </ul>
      </div>

      <div class="card">
        <h4>Lessons Learned</h4>
        <ul class="text-start">
          ${project.lessons.map(item => `<li class="cs_text">${item}</li>`).join('')}
        </ul>
      </div>

      <div class="card">
        <h4>Challenges</h4>
        <ul class="text-start">
          ${project.challenges.map(item => `<li class="cs_text">${item}</li>`).join('')}
        </ul>
      </div>
      
      </div>
      <div class="flex-center">
        <p>
          <a class="cs_btn cs_style_1" href="${project.links.liveDemo}" target="_blank">Live Demo</a> | 
          <a class="cs_btn cs_style_1" href="${project.links.repo}" target="_blank">GitHub Repo</a>
        </p>
      </div>

 
    `;

  } catch (error) {
    console.error("Error loading project:", error);
    projectContainer.innerHTML = "<h2>Error loading project data</h2>";
  }
}

document.addEventListener("DOMContentLoaded", loadProject);