const textArray = [
    "Monetize Your Gaming Passion",
    "Earn by Competing in Esports",
    "Create or Join Tournaments",
    "Instant Rewards in Rupees"
];

let currentIndex = 0;
const textElement = document.getElementById("changing-text");

function changeText() {
    // First fade out
    textElement.classList.add("fade-out");

    setTimeout(() => {
        // Change the text once it's faded out
        currentIndex = (currentIndex + 1) % textArray.length;
        textElement.textContent = textArray[currentIndex];

        // Fade in the new text
        textElement.classList.remove("fade-out");
        textElement.classList.add("fade-in");
    }, 500); // Matches the duration of the fade-out transition
}


setInterval(changeText, 3000);

// const track = document.querySelector('.carousel-track');
// const images = [
//     'compressed_0b55e17b97dbf1b09b6c58457e236079.webp', // Array of image sources
//     'WUy7pgH.pngg',
//     'minecraft-character-with-diamond-sword-rwjof6jq9gfdwc73.png',
//     // 'char4.png', // Add more characters as needed
//     // 'char5.png'
// ];

// let leftIndex = 0;
// let middleIndex = 1;
// let rightIndex = 2;

// function updateCarousel() {
//     // Move the track to the left by one image width (for sliding effect)
//     track.style.transform = 'translateX(-200px)';

//     setTimeout(() => {
//         // Swap the images after the animation completes (1s delay)
//         leftIndex = (leftIndex + 1) % images.length;
//         middleIndex = (middleIndex + 1) % images.length;
//         rightIndex = (rightIndex + 1) % images.length;

//         // Update image sources
//         document.getElementById('left-image').src = images[leftIndex];
//         document.getElementById('middle-image').src = images[middleIndex];
//         document.getElementById('right-image').src = images[rightIndex];

//         // Reset the track position for a seamless loop
//         track.style.transition = 'none'; // Disable transition temporarily
//         track.style.transform = 'translateX(0)';

//         // Re-enable transition after resetting the position
//         setTimeout(() => {
//             track.style.transition = 'transform 1s ease-in-out';
//         }, 50);
//     }, 1000); // Match the animation duration (1 second)
// }

// // Set the interval to update the carousel every 3 seconds
// setInterval(updateCarousel, 3000);

// const track = document.getElementById('carousel-track');
// const images = [
//     'compressed_0b55e17b97dbf1b09b6c58457e236079.webp',
//     'WUy7pgH.pngg',
//     'minecraft-character-with-diamond-sword-rwjof6jq9gfdwc73.png',
//     // 'char4.png',
//     // 'char5.png'
// ];

// let leftIndex = 0;
// let middleIndex = 1;
// let rightIndex = 2;

// function updateCarousel() {
//     // Animate the scroll to the left
//     track.style.transform = 'translateX(-200px)';

//     setTimeout(() => {
//         // Reset after the animation, and swap images for looping effect
//         leftIndex = (leftIndex + 1) % images.length;
//         middleIndex = (middleIndex + 1) % images.length;
//         rightIndex = (rightIndex + 1) % images.length;

//         // Swap the image sources
//         document.getElementById('left-image').src = images[leftIndex];
//         document.getElementById('middle-image').src = images[middleIndex];
//         document.getElementById('right-image').src = images[rightIndex];

//         // Reset the transform for seamless scrolling
//         track.style.transition = 'none'; // Disable transition for reset
//         track.style.transform = 'translateX(0)';

//         // Re-enable transition after the reset
//         setTimeout(() => {
//             track.style.transition = 'transform 1s ease-in-out';
//         }, 50);
//     }, 1000); // This matches the transition duration
// }

// // Set interval to update carousel every 3 seconds
// setInterval(updateCarousel, 3000);


//IMAGES 
