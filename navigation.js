// Creates a top-left navigation menu and injects it into the page
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.createElement("nav");
  nav.id = "side-nav";

  nav.innerHTML = `
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About Me</a></li>
      <li><a href="work.html">Work Experience</a></li>
      <li><a href="skills.html">Skills</a></li>
    </ul>
  `;

  document.body.appendChild(nav);
});
