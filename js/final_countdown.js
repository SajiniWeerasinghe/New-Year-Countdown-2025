document.addEventListener("DOMContentLoaded", function() {
    const targetDate = new Date('Oct 03, 2024 14:10:00').getTime();

    let interval = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById('seconds-only').innerText = seconds;

        // If countdown reaches zero, redirect to Happy New Year page
        if (distance <= 0) {
            clearInterval(interval);
            window.location.href = "new_year.html";
        }
    }, 1000);
});
