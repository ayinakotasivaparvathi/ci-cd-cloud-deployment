const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('CI/CD Pipeline Deployment Successful!');
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'healthy' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});