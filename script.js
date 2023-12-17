document.addEventListener('DOMContentLoaded', function () {
    const startScreen = document.getElementById('startScreen');
    const myVideo = document.getElementById('myVideo');
    const buttonContainer = document.getElementById('buttonContainer');

    // Pause the video initially
    myVideo.pause();

    // Show buttons when the video ends
    myVideo.addEventListener('ended', function () {
        myVideo.pause();
        createButtons(); // Create buttons after the video ends
    });

    // Function to create buttons dynamically
    function createButtons() {
        const button1 = document.createElement('a');
        button1.href = 'video1.html'; // Link to the next video
        button1.textContent = '02:19';

        const button2 = document.createElement('a');
        button2.href = 'video2.html'; // Link to the next video
        button2.textContent = '02:20';



        // Clear existing buttons
        buttonContainer.innerHTML = '';

        // Add buttons to the container
        buttonContainer.appendChild(button1);
        buttonContainer.appendChild(button2);

        // Show the buttons
        buttonContainer.classList.remove('hidden');
        buttonContainer.classList.add('show');
    }

    // Handle clicking anywhere to start
    document.addEventListener('click', function () {
        startScreen.style.display = 'none'; // Hide start screen
        myVideo.play(); // Start playing the video
    });
});
