
document.addEventListener("DOMContentLoaded", function() {

    const chest = document.getElementById('treasure-chest');
    const mapClue = document.getElementById('map-clue');
    const coinsDisplay = document.getElementById('coins');
    const timerDisplay = document.getElementById('timer');

    let coins = 0;
    let timer = 600; // Timer in seconds (10 minutes)

    // Function to update the timer every second
    function updateTimer() {
        setInterval(function() {
            if (timer > 0) {
                timer--;
                let minutes = Math.floor(timer / 60);
                let seconds = timer % 60;
                timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            } else {
                alert('Time is up! Game Over.');
            }
        }, 1000);
    }

    // Open treasure chest function
    chest.addEventListener('click', function() {
        alert('You opened the chest and found 100 coins!');
        coins += 100;
        coinsDisplay.textContent = coins;
        chest.style.display = 'none'; // Remove chest after opening
    });

    // Click on the map clue
    mapClue.addEventListener('click', function() {
        alert('Follow the clue to find the next hint close to you.');
    });

    

    // Start timer when page loads
    updateTimer();

    // Hint button functionality
    document.getElementById('hint-btn').addEventListener('click', function() {
        alert('Hint: Look for the tallest structure near your location then walk 10 meters down and turn to your left.');
    });

    // Inventory button functionality
    document.getElementById('inventory-btn').addEventListener('click', function() {
        alert('Inventory: You have 1 key and 100 coins.');
    });
});
