document.addEventListener('DOMContentLoaded', function() {
    function updateTimeAndDay() {
        const currentTimeUTC = new Date().toISOString().split('T')[1].split('.')[0];
        const currentDay = new Date().toLocaleString('en-us', { weekday: 'long' });
        
        document.querySelector('[data-testid="currentTimeUTC"]').textContent = currentTimeUTC;
        document.querySelector('[data-testid="currentDay"]').textContent = currentDay;
    }

    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000);
});
