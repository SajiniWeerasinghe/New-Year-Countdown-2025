document.addEventListener("DOMContentLoaded", function() {
    const targetDate = new Date('Jan 01, 2025 00:00:00').getTime();

    let interval = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Calculate days, hours, minutes, and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update countdown display
        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;

        // If less than 10 seconds remaining, redirect to final countdown page
        if (distance <= 10000 && distance > 0) {
            clearInterval(interval);
            window.location.href = "final_countdown.html";
        }
    }, 1000);
});

document.addEventListener("DOMContentLoaded", function() {
    const targetDate = new Date('Jan 01, 2025 00:00:00').getTime();
    const loadingScreen = document.getElementById('loading-screen');

    let interval = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Calculate days, hours, minutes, and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update countdown display
        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;

        // If less than 10 seconds remaining, show loading screen and redirect to final countdown page
        if (distance <= 10000 && distance > 0) {
            clearInterval(interval);
            loadingScreen.classList.add('active'); // Show loading screen
            setTimeout(() => {
                window.location.href = "final_countdown.html"; // Redirect after a short delay
            }, 500); // Adjust delay as needed
        }
    }, 1000);
});

