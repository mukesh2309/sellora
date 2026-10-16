const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Sellora Backend API is running',
    timestamp: new Date().toISOString(),
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    app: 'Sellora API',
    version: '1.0.0',
  });
});

app.listen(PORT, () => {
  console.log(`Sellora backend running on http://localhost:${PORT}`);
});
