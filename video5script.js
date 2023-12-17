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
        button3.href = 'video6.html'; // yes octopus video
        button3.textContent = '04:27';

        const button4 = document.createElement('a');
        button4.href = 'video7.html'; // no octopus video in airplane
        button4.textContent = '04:29';

        // Clear existing buttons
        buttonContainer.innerHTML = '';

        // Add buttons to the container

        buttonContainer.appendChild(button4);
        buttonContainer.appendChild(button3);

        // Show the buttons
        buttonContainer.classList.remove('hidden');
        buttonContainer.classList.add('show');
    }

    // Handle clicking anywhere to start
  document.addEventListener('DOMContentLoaded', function () {
    myVideo.play(); // Start playing the video when the page is loaded
});
});
