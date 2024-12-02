// Start of Dark mode 
document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");

    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            darkModeToggle.classList.toggle("dark-mode");
        });
    } else {
        console.error("Dark Mode is Fucked up");
    }
});

// end of dark mode 