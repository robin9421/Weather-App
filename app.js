const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;
const API_KEY = 'ADD API KEY HERE';

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
