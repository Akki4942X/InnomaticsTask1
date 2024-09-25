// Optional JS to highlight table rows on hover
const rows = document.querySelectorAll("#timetable tbody tr");

rows.forEach(row => {
    row.addEventListener("mouseover", () => {
        row.style.backgroundColor = "lightblue";
    });
    row.addEventListener("mouseout", () => {
        row.style.backgroundColor = "";
    });
});
