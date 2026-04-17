// 1. Detail
const projects = [
    {
        title: "E-Commerce App",
        description: "Merch",
        tech: "React, Node.js",
        link: "#"
    },
    {
        title: "AI Chatbot",
        description: "AI FOR CHAT",
        tech: "Python, JS",
        link: "#"
    },
    {
        title: "Portfolio Website",
        description: "Responsive Website",
        tech: "HTML, CSS, JS",
        link: "#"
    }
];

// 2. Render
const portfolioGrid = document.getElementById('portfolio-grid');

function displayProjects() {
    portfolioGrid.innerHTML = projects.map(project => `
        <div class="card">
            <div class="card-content">
                <span class="tag">${project.tech}</span>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" style="color: #007bff; text-decoration: none; font-weight: bold;">ดูรายละเอียด →</a>
            </div>
        </div>
    `).join('');
}

// 3. Final
displayProjects();
