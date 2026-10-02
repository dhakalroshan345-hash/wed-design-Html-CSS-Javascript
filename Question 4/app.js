
const searchInput = document.getElementById("searchInput");
const toggleDetailsBtn = document.getElementById("toggleDetailsBtn");
const courseDetails = document.getElementById("courseDetails");
const searchStatus = document.getElementById("searchStatus");
const searchGrid = document.getElementById("searchGrid");
const nameInput = document.getElementById("nameInput");
const charCount = document.getElementById("charCount");
const trimCount = document.getElementById("trimCount");
const courseCards = searchGrid.querySelectorAll(".card");

// toggle details box
toggleDetailsBtn.addEventListener("click", () => {
  const hidden = courseDetails.classList.toggle("hidden");
  toggleDetailsBtn.textContent = hidden ? "Show Details" : "Hide Details";
  toggleDetailsBtn.setAttribute("aria-expanded", String(!hidden));
});

// update details when card clicked
courseCards.forEach(card => {
  card.addEventListener("click", () => {
    courseDetails.querySelector("h2").textContent = `${card.dataset.name} Details`;
    courseDetails.querySelector("p").textContent = card.dataset.detail;
    courseDetails.classList.remove("hidden");
    toggleDetailsBtn.textContent = "Hide Details";
    toggleDetailsBtn.setAttribute("aria-expanded", "true");
  });
});

// filter courses
function filterCourses() {
  const query = searchInput.value.toLowerCase().trim();
  let visibleCount = 0;
  courseCards.forEach(card => {
    const name = card.dataset.name.toLowerCase();
    const tags = card.dataset.tags.toLowerCase();
    const match = !query || name.includes(query) || tags.includes(query);
    card.style.display = match ? "block" : "none";
    if (match) visibleCount++;
  });
  searchStatus.textContent = query
    ? `${visibleCount} results for ${query}`
    : "Showing all 4 courses.";
}

// search input events
searchInput.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    searchInput.value = ""; // clear
    filterCourses();
    searchInput.focus();
  }
  if (event.key === "Enter") {
    event.preventDefault();
    searchStatus.textContent = "Searching...";
  }
});

searchInput.addEventListener("keyup", event => {
  if (!["Shift", "Control", "Alt", "Enter", "Escape"].includes(event.key)) {
    filterCourses();
  }
});

// character count
nameInput.addEventListener("input", () => {
  const value = nameInput.value;
  const trimmed = value.trim();
  charCount.textContent = value.length;
  trimCount.textContent = trimmed.length;
  const spacesOnly = value.length > 0 && trimmed.length === 0;
  charCount.style.color = spacesOnly ? "red" : "#2563eb";
  trimCount.style.color = spacesOnly ? "red" : "#2563eb";
});
