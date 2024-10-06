// Select images only inside the .gamer section
const images = document.querySelectorAll('.gamer .slider img');
let currentIndex = 0; // Start from the first image

function updateSlider() {
    images.forEach((img, index) => {
        // Calculate the position based on currentIndex
        let position = ((index - currentIndex + images.length) % images.length) * 100;

        // Apply the 3D effect with scaling and opacity changes
        img.style.transform = `translateX(${position}%) scale(${position === 0 ? 1.2 : 0.8})`;
        img.style.opacity = position === 0 ? 1 : 0.5;
        img.style.zIndex = position === 0 ? 1 : 0; // Ensure the current image stays in front
    });
}

function startSlider() {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length; // Increment index in a loop
        updateSlider();
    }, 2000); // Adjust speed as needed
}

startSlider();
updateSlider();
