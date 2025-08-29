# BFHL API

A REST API that:
- Separates even, odd numbers
- Converts alphabets to uppercase
- Extracts special characters
- Returns sum of numbers
- Concatenates alphabets in reverse with alternating caps

## 🚀 How to Run Locally

1. Clone this repo or download zip
   ```bash
   git clone https://github.com/YOUR-USERNAME/bfhl-api.git
   cd bfhl-api
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the server
   ```bash
   npm start
   ```

4. Test using curl or Postman:
   ```bash
   curl -X POST http://localhost:3000/bfhl    -H "Content-Type: application/json"    -d '{"data":["a","1","334","4","R","$"]}'
   ```

## 🌐 Deploy to Render

1. Push this folder to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/bfhl-api.git
   git push -u origin main
   ```

2. Go to [Render](https://render.com) → New → Web Service
   - Connect to your GitHub repo
   - Build command: `npm install`
   - Start command: `npm start`
   - Deploy 🚀

3. Your API will be available at:
   ```
   https://your-app-name.onrender.com/bfhl
   ```
