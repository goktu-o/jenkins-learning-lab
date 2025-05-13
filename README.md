# Jenkins Learning Lab

This is a minimal Node.js Express web project designed for learning Jenkins automation and CI/CD pipelines.

## How to Run

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the server:
   ```sh
   node index.js
   ```
3. Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Jenkins Integration
- Use the included `Jenkinsfile` to automate testing and deployment with Jenkins.
- The pipeline installs dependencies, runs tests, and starts the server.

## Project Structure
- `index.js`: Main Express server file
- `Jenkinsfile`: Jenkins pipeline definition
- `package.json`: Project metadata and scripts

Let me know if you want help with Jenkins setup or pipeline customization!
