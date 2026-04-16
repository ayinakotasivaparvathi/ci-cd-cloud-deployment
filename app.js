const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>CI/CD Deployment</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background: #0f172a;
                    color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }
                .card {
                    background: #1e293b;
                    padding: 40px;
                    border-radius: 16px;
                    box-shadow: 0 8px 30px rgba(0,0,0,0.3);
                    text-align: center;
                    max-width: 700px;
                }
                h1 {
                    color: #38bdf8;
                    margin-bottom: 20px;
                }
                p {
                    font-size: 18px;
                    line-height: 1.6;
                }
                .badge {
                    margin-top: 20px;
                    display: inline-block;
                    padding: 10px 18px;
                    background: #22c55e;
                    border-radius: 999px;
                    font-weight: bold;
                }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>CI/CD Pipeline Deployment Successful</h1>
                <p>
                    Containerized application deployed automatically using
                    <strong>GitHub Actions</strong>, <strong>Docker</strong>,
                    and <strong>AWS EC2</strong>.
                </p>
                <div class="badge">Production Deployment Active</div>
            </div>
        </body>
        </html>
    `);
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'healthy' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});