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
        button3.href = 'video8.html'; // yes octopus video
        button3.textContent = '06:39';

        const button4 = document.createElement('a');
        button4.href = 'video5.html'; // no octopus video in airplane
        button4.textContent = '04:28';

        button4.classList.add('time');

        // Clear existing buttons
        buttonContainer.innerHTML = '';

        // Add buttons to the container
        buttonContainer.appendChild(button3);
        buttonContainer.appendChild(button4);
    

        // Show the buttons
        buttonContainer.classList.remove('hidden');
        buttonContainer.classList.add('show');
    }

    // Handle clicking anywhere to start
  document.addEventListener('DOMContentLoaded', function () {
    myVideo.play(); // Start playing the video when the page is loaded
});
});
