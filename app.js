const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;
const API_KEY = '583142a51d4bddab6e15be6f0d5bb24b';

// Middleware to allow CORS for frontend requests
app.use(require('cors')());

app.get('/weather/:city', async (req, res) => {
    try {
        const city = req.params.city;
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
            params: {
                q: city, 
                appid: API_KEY,
                units: 'metric'
            }
        });
        console.log(response.data)
        res.json(response.data);
        
    } catch (error) {
        res.status(500).json({ error: 'Error fetching weather data' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));