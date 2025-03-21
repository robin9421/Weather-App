CREATE DATABASE weather_app;
USE weather_app;

CREATE TABLE weather_history (
    id INT AUTO_INCREMENT PRIMARY KEY,
    city VARCHAR(50),
    weather_data JSON,
    fetched_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)