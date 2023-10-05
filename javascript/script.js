
const toggleButton = document.getElementById('toggleButton');
const navCenter = document.getElementById('navCenter');

toggleButton.addEventListener('click', function() {
    
    if (navCenter.style.display === 'flex') {
        navCenter.style.display = 'none';
       
    } else {
        navCenter.style.display = 'flex';
        
    }
});

// Get references to the buttons and the article
const bBack = document.getElementById("bBack");
const bNext = document.getElementById("bNext");
const article = document.getElementById("Fiteams1");

// Function to scroll the article to the left
function scrollLeft() {
    article.scrollLeft -= 100; // You can adjust the scroll distance as needed
}

// Function to scroll the article to the right
function scrollRight() {
    article.scrollLeft += 100; // You can adjust the scroll distance as needed
}

// Add click event listeners to the buttons
bBack.addEventListener("click", scrollLeft);
bNext.addEventListener("click", scrollRight);

// Get references to the buttons and the article
const bBack1 = document.getElementById("bBack1");
const bNext1 = document.getElementById("bNext1");
const article1 = document.getElementById("Fiteams2");

// Function to scroll the article to the left
function scrollLeft1() {
    article1.scrollLeft -= 100; // You can adjust the scroll distance as needed
}

// Function to scroll the article to the right
function scrollRight1() {
    article1.scrollLeft += 100; // You can adjust the scroll distance as needed
}

// Add click event listeners to the buttons
bBack1.addEventListener("click", scrollLeft1);
bNext1.addEventListener("click", scrollRight1);
