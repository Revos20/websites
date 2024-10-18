// Function to refresh the page
document.getElementById('refreshBtn').addEventListener('click', function() {
    location.reload();
});

// Function to navigate to the previous page
document.getElementById('prevBtn').addEventListener('click', function() {
    // You can customize this by adding the URL of the previous page
    window.location.href = 'contact.html'; // Change to the actual previous page
});

// Function to navigate to the next page
document.getElementById('nextBtn').addEventListener('click', function() {
    // You can customize this by adding the URL of the next page
    window.location.href = 'blog.html'; // Change to the actual next page
});

// Display the current date
function displayCurrentDate() {
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById('dateDisplay').textContent = `Today's Date: ${formattedDate}`;
}

// Call the function to display the date when the page loads
displayCurrentDate();
