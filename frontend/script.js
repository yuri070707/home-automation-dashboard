async function fetchData() {
    const response = await fetch('http://localhost:8080/api/data/latest');
    const data = await response.json();
    document.getElementById('temperature').textContent = data.temperature.toFixed(2) + '°C';
    document.getElementById('humidity').textContent = data.humidity.toFixed(2) + '%';
}
setInterval(fetchData, 60000);
fetchData();
