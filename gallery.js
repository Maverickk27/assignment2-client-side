// Array of image data with full-size image, thumbnail, and caption text
const images = [
    { src: 'images/flowers-yellow-large.jpg', thumbnail: 'images/flowers-yellow-small.jpg', caption: 'Sunflowers in Dernekamp, Kirchspiel, Germany' },
    { src: 'images/flowers-red-large.jpg', thumbnail: 'images/flowers-red-small.jpg', caption: 'Poppies in cornfield, Dülmen, Germany' },
    { src: 'images/flowers-white-large.jpg', thumbnail: 'images/flowers-white-small.jpg', caption: 'Daffodils in Sentmaring park, Münster, Germany' },
    { src: 'images/flowers-pink-large.jpg', thumbnail: 'images/flowers-pink-small.jpg', caption: 'Sentmaring Park, Münster, Germany' },
    { src: 'images/flowers-purple-large.jpg', thumbnail: 'images/flowers-purple-small.jpg', caption: 'Market in Münster, Germany' }
];

// Get references to the featured image, caption, and the list of thumbnails in the DOM
const featuredImage = document.querySelector('figure img'); // The main image element
const figcaption = document.querySelector('figure figcaption'); // The caption element for the main image
const thumbnailList = document.querySelector('ul'); // The unordered list where thumbnails will be added

// Function to update the featured image and caption when a thumbnail is clicked
function updateFeaturedImage(image) {
    featuredImage.src = image.src; // Update the src of the main image
    figcaption.textContent = image.caption; // Update the caption with the selected image's caption

    // Set grayscale filter on all thumbnails, then remove it from the active thumbnail
    document.querySelectorAll('ul li img').forEach(img => img.classList.add('inactive')); // Add 'inactive' class to all thumbnails (grayscale them)
    document.querySelector(`img[src="${image.thumbnail}"]`).classList.remove('inactive'); // Remove 'inactive' class from the clicked thumbnail to highlight it
}

// Dynamically create the thumbnail list based on the images array
images.forEach(image => {
    const li = document.createElement('li'); // Create a new list item for each image
    const img = document.createElement('img'); // Create a new image element for the thumbnail
    img.src = image.thumbnail; // Set the src of the thumbnail image
    img.alt = image.caption; // Set the alt text for the thumbnail image
    img.width = 240; // Set the width of the thumbnail image
    img.height = 160; // Set the height of the thumbnail image
    img.classList.add('inactive'); // Start with all thumbnails in grayscale by adding the 'inactive' class

    // Add a click event to each thumbnail to update the featured image when clicked
    img.addEventListener('click', () => updateFeaturedImage(image));

    li.appendChild(img); // Append the thumbnail image to the list item
    thumbnailList.appendChild(li); // Append the list item to the thumbnail list
});

// Initialize the gallery with the first image as the featured image when the page loads
updateFeaturedImage(images[0]);
