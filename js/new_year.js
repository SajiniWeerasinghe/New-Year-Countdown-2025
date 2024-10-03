const fireworkContainer = document.querySelector('.fireworks-container')

const newYear = document.querySelector('#new-year')




document.querySelector('.newyear-button').addEventListener('click', function() {
    // Add fade-out class to the body
    document.body.classList.add('fade-out');

    // Wait for the transition to complete before navigating
    setTimeout(function() {
        window.location.href = 'calander.html'; // Navigate to the new page
    }, 500); // Duration must match the CSS transition duration
});

  

const fireworks = new Fireworks(fireworkContainer, {
    // speed: 3,
    // acceleration: 1.05,
    // friction: 1,
    // gravity: 1.5,
    // particles: 100,
    // explosion: 10
    trace: 3,
        speed: 4,
        particles: 200,
        explosion: 10,
        gravity: 1.5,
        hue: { min: 0, max: 360 },
        brightness: { min: 50, max: 80 }
})

fireworks.start()