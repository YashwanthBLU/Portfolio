// Skills Data
const skills = ["HTML", "CSS", "JavaScript", "React", "Git", "ASP.NET", "SQL"];

// Projects Data
const projects = [
  { 
    title: "QKart", 
    description: "QKart is an e-commerce application offering a variety of products for customers to choose from.", 
    techStack: ["React", "Material UI", "Hooks"],
    link: "https://cricyash15-me-qkart-frontend-v2-2bhnab2h9.vercel.app/" 
  },
  { 
    title: "QTripDynamic", 
    description: "QTrip is a travel website aimed at travellers looking for a multitude of adventures in different cities. ", 
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://qtrip-dynamic-flax-tau.vercel.app/" 
  },
  { 
    title: "QTIFY", 
    description: "QTify is a song-browsing application built from scratch using ReactJS paired with Material UI and Swiper.", 
    techStack: ["React", "Swiper", "Material UI"],
    link: "https://qtify-mu-one.vercel.app/" 
  },
  { 
    title: "XBoard", 
    description: "XBoard is a News Feed website that will feature the latest news for select topics, from Flipboard.", 
    techStack: ["HTML", "CSS", "Bootstrap Accordion"],
    link: "https://newsflick.netlify.app/" 
  },
  { 
    title: "QTripStatic", 
    description: "QTrip is a travel website aimed at travellers looking for a multitude of adventures in different cities. ", 
    techStack: ["HTML", "CSS", "Javascript"],
    link: "https://qtripstatic-olive.vercel.app/" 
  },
  { 
    title: "XCruise", 
    description: "XCruise is a responsive static website built from scratch using HTML and CSS to provide a seamless and visually appealing experience for users looking to book cruise vacations.", 
    techStack: ["HTML", "CSS", "Responsive Design"],
    link: "" 
  },

];

// Function to render skills
function renderSkills() {
  const skillsContainer = document.getElementById("skills-container");
  skills.forEach((skill) => {
    const skillCard = document.createElement("div");
    skillCard.className = "card";
    skillCard.innerHTML = `<h3>${skill}</h3>`;
    skillsContainer.appendChild(skillCard);
  });
}

// Function to render projects
function renderProjects() {
  const projectsContainer = document.getElementById("projects-container");
  projects.forEach((project, index) => {
    const projectCard = document.createElement("div");
    projectCard.className = "card";
    projectCard.innerHTML = `<h3>${project.title}</h3>`;
    projectCard.addEventListener("click", () => openModal(index));
    projectsContainer.appendChild(projectCard);
  });
}

// Updated openModal function to set correct `href` and ensure modal opens
function openModal(index) {
  const modal = document.getElementById("project-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalTechStack = document.getElementById("modal-tech-stack");
  const modalLink = document.getElementById("modal-link");

  const project = projects[index];
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalTechStack.innerHTML = project.techStack.map(tech => `<li>${tech}</li>`).join("");

  if (project.link) {
    modalLink.style.display = "inline-block";
    modalLink.href = project.link;
    modalLink.textContent = "Visit Project";
  } else {
    modalLink.style.display = "none";
  }

  modal.style.display = "flex"; // Ensure modal is displayed
}

// Updated closeModal function to handle clicking the backdrop as well
function closeModal() {
  const modal = document.getElementById("project-modal");
  modal.style.display = "none";
}

// Close modal on backdrop click
const modal = document.getElementById("project-modal");
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Add event listener to close button
document.getElementById("modal-close").addEventListener("click", closeModal);


// Render content
renderSkills();
renderProjects();
