document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedbackForm');
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('close');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Display the popup
        popup.style.display = 'block';
    });

    // Close the popup when close button is clicked
    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    // Close the popup when user clicks outside of it
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });