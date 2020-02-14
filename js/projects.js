const projects = document.querySelectorAll(".projectCover");

projects.forEach((e) => {
    e.onclick = () => {
        e.classList.toggle("on")
    }
})