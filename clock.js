document.addEventListener('DOMContentLoaded', function() {
    const secondHand = document.querySelector('.second-hand');
    const minHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');
    var time = document.querySelector(".time");
    var PM_AM;


    function setDate() {
        const now = new Date();

        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

        const mins = now.getMinutes();
        const minsDegrees = ((mins / 60) * 360) + 90;
        minHand.style.transform = `rotate(${minsDegrees}deg)`;

        const hours = now.getHours();
        const hoursDegrees = ((hours / 12) * 360) + 90;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

        if (hours > 12) {
            PM_AM = "PM"
        }else {
            PM_AM = "AM"
        }

        time.innerText = `${hours - 12}:${mins}:${seconds} ${PM_AM}`;

        // Check if the seconds hand is near 12 and adjust transition accordingly
        if (secondsDegrees > 358 + 90|| secondsDegrees < 2 + 90) {
            secondHand.style.transition = `all 0s`;
        } else {
            secondHand.style.transition = `all 0.5s`;
        }
        
        if (minsDegrees > 358 + 90|| minsDegrees < 2 + 90) {
            minHandHand.style.transition = `all 0s`;
        } else {
            minHand.style.transition = `all 0.5s`;
        }

        if (hoursDegrees > 358 + 90|| hoursDegrees < 2 + 90) {
            hourHandHand.style.transition = `all 0s`;
        } else {
            hourHandHand.style.transition = `all 0.5s`;
        }
    } 

    // Call the function to update the clock every second
    setInterval(setDate, 1000);
});
