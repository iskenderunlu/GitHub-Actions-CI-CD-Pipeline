# CI/CD Example Project

This is a simple **Node.js Express app** with a **GitHub Actions CI/CD pipeline**.

## Features
- Runs unit tests with Jest
- Builds and pushes Docker image to Docker Hub
- Deploys to server via SSH

## Usage

1. Clone repo
2. Run locally:

```bash
npm install
npm start
```

3. Run tests:

```bash
npm test
```

4. Build & run Docker:

```bash
docker-compose up --build
```

5. Push to GitHub and watch CI/CD pipeline run.
