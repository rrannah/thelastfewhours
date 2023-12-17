document.addEventListener('DOMContentLoaded', function () {
    const myVideo = document.getElementById('myVideo');
    const buttonContainer = document.getElementById('buttonContainer');

    // Show buttons when the video ends
    myVideo.addEventListener('ended', function () {
        myVideo.pause();
        createButtons(); // Create buttons after the video ends
    });

    // Function to create buttons dynamically
    function createButtons() {
        const button3 = document.createElement('a');
        button3.href = 'video3.html'; // Link to the next video
        button3.textContent = '02:20';

        const button4 = document.createElement('a');
        button4.href = 'video4.html'; // Link to the next video
        button4.textContent = '02:19';

        // Clear existing buttons
        buttonContainer.innerHTML = '';

        // Add click event listeners to the buttons with a loading overlay
        button3.addEventListener('click', function (event) {
            event.preventDefault();
            showLoadingOverlay();
            setTimeout(function () {
                window.location.href = button3.href;
            }, 500); // Adjust the delay as needed
        });

        button4.addEventListener('click', function (event) {
            event.preventDefault();
            showLoadingOverlay();
            setTimeout(function () {
                window.location.href = button4.href;
            }, 500); // Adjust the delay as needed
        });

        // Add buttons to the container
        buttonContainer.appendChild(button3);
        buttonContainer.appendChild(button4);

        // Show the buttons
        buttonContainer.classList.remove('hidden');
        buttonContainer.classList.add('show');
    }

    // Function to show a loading overlay
    function showLoadingOverlay() {
        const overlay = document.createElement('div');
        overlay.className = 'loading-overlay';
        document.body.appendChild(overlay);
    }

    // Handle clicking anywhere to start
    document.addEventListener('DOMContentLoaded', function () {
        myVideo.play(); // Start playing the video when the page is loaded
    });
});
