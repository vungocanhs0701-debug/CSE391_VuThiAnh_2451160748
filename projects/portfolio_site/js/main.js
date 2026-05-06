document.addEventListener("DOMContentLoaded", () => {
    const skillBars = document.querySelectorAll(".skill-progress");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.getAttribute("data-progress");
                entry.target.style.width = progress + "%";
            }
        });
    }, { threshold: 0.4 });

    skillBars.forEach(bar => observer.observe(bar));
});