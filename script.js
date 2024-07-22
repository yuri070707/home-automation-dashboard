// Fetch the latest data from the backend and update the UI
async function fetchData() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/data/latest');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        document.getElementById('temperature').textContent = data.temperature.toFixed(2) + '°C';
        document.getElementById('humidity').textContent = data.humidity.toFixed(2) + '%';
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

// Send the data to the backend
document.addEventListener('DOMContentLoaded', function() {
    const temperatureElement = document.getElementById('temperatureInput');
    const humidityElement = document.getElementById('humidityInput');
    const sendButton = document.getElementById('sendData');

    sendButton.addEventListener('click', async function() {
        const temperature = parseFloat(temperatureElement.value);
        const humidity = parseFloat(humidityElement.value);

        try {
            const response = await fetch('http://127.0.0.1:5000/api/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ temperature, humidity })
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Success:', data);
            fetchData(); // Update the displayed data
        } catch (error) {
            console.error('Error:', error);
        }
    });
});

// Fetch the latest data every 60 seconds
setInterval(fetchData, 60000);
fetchData();
