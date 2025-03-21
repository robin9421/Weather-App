# 🌦️ Weather Data Aggregator

## 📌 Project Overview
This is a simple weather web app that fetches and displays weather data for different cities using the **OpenWeatherMap API**.  
It includes:
- A **frontend** built with **HTML, CSS, and JavaScript**.
- A **Node.js backend** using **Express & Axios**.
- A **MySQL database** to store historical weather data.

---

## 🛠️ Setup & Installation

### 1️⃣ Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (for backend)
- [MySQL](https://www.mysql.com/) (for database)
- A web browser (for frontend)

### 2️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/weather-app.git
cd weather-app ```

### 3️⃣ Install Dependencies

npm install

### 4️⃣ Set Up the Database
	1.	Open MySQL and create the database:

mysql -u root -p

	2.	Run the SQL script to create tables:

SOURCE Database/weather_data.sql;

### 5️⃣ Run the Backend Server

node app.js

You should see:

Server running on port 3000

### 6️⃣ Open the Frontend
	•	Open index.html in your browser.
	•	Enter a city name and click “Get Weather”.

⸻

### 📂 Project Structure

📁 demo
│── 📁 Database
│   └── weather_data.sql  # SQL file to create database & table
│── app.js                # Express backend
│── index.html            # Frontend UI
│── package.json          # Project dependencies
│── yarn.lock             # Dependency lock file


🔒 Security Considerations
	•	Prevent SQL Injection → Use prepared statements.
	•	Avoid API Key Exposure → Store in .env (not hardcoded in app.js).
	•	Rate Limiting → Implement API request throttling to prevent abuse.

👨‍💻 Author

Robin Prajapati
📧 Email: your-email@example.com
