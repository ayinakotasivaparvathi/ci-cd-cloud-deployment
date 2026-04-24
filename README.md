# ci-cd-cloud-deployment
# 🚀 CI/CD Pipeline Using GitHub Actions, Docker, and AWS EC2

## 📌 Project Overview

This project demonstrates the implementation of a complete end-to-end CI/CD (Continuous Integration and Continuous Deployment) pipeline using modern DevOps tools and cloud infrastructure.

The primary objective of this project is to automate the build and deployment process of a containerized Node.js application. The pipeline ensures that every code change pushed to the GitHub repository is automatically built, tested, and deployed to an AWS EC2 instance without manual intervention.

This approach significantly improves deployment efficiency, reduces human errors, and ensures consistency across environments.

---

## 🏗️ System Architecture

![Architecture Diagram](screenshots/YOUR_ARCHITECTURE_IMAGE.png)

### 🔍 Architecture Explanation

The system follows a streamlined DevOps workflow:

- Developer writes and pushes code to GitHub repository  
- GitHub Actions automatically triggers the CI/CD pipeline  
- Docker builds a container image of the application  
- Secure SSH connection is established using GitHub Secrets  
- The application is deployed to AWS EC2 instance  
- Docker container runs the application  
- End users access the live application via EC2 public IP  

---

## ⚙️ Technology Stack

| Category        | Tools / Technologies |
|----------------|---------------------|
| Version Control | Git, GitHub |
| CI/CD           | GitHub Actions |
| Containerization| Docker |
| Cloud Platform  | AWS EC2 |
| Backend         | Node.js, Express.js |
| Security        | SSH Keys, GitHub Secrets |

---

## 🔄 CI/CD Workflow (Step-by-Step)

1. **Code Commit**
   - Developer pushes code changes to GitHub repository

2. **CI Trigger**
   - GitHub Actions detects the push event and starts the pipeline

3. **Build Stage**
   - Docker image is built using Dockerfile
   - Application dependencies are installed inside container

4. **Authentication**
   - Secure connection established using SSH keys stored in GitHub Secrets

5. **Deployment Stage**
   - Existing container is stopped and removed (if exists)
   - Latest code is pulled into EC2 instance
   - New Docker image is built
   - Container is deployed and started

6. **Live Application**
   - Application becomes accessible through EC2 public IP

---

## 🔐 GitHub Secrets Configuration

To maintain security and avoid exposing sensitive data, the following secrets are configured in GitHub:

- `EC2_HOST` → Public IPv4 address of EC2 instance  
- `EC2_USERNAME` → Default EC2 username (e.g., ubuntu)  
- `EC2_SSH_KEY` → Private SSH key (.pem file content)  

---

## 🐳 Docker Configuration

### Dockerfile Overview

The application is containerized using Docker to ensure consistency across environments.

- Uses Node.js base image  
- Installs dependencies  
- Copies application files  
- Exposes application port  
- Runs application using Node  

---

## ☁️ AWS EC2 Setup

- Created EC2 instance (Ubuntu)  
- Configured security groups to allow HTTP (Port 80) and SSH (Port 22)  
- Installed Docker on EC2 instance  
- Connected via SSH  
- Deployed containerized application  


---

## 🚀 Local Setup Instructions

To run the project locally:

```bash
git clone https://github.com/YOUR_USERNAME/ci-cd-cloud-deployment.git
cd ci-cd-cloud-deployment
docker build -t ci-cd-app .
docker run -p 3000:3000 ci-cd-app
