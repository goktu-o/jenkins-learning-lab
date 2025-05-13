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

## Jenkins Container Configuration
- Need to enable jenkins container to access docker cli in order to pull node image. And execute tasks on it during pipeline.

1. Create the container, mounting the docker socket. So that it can run Docker commands inside Jenkins container. Creating a volume so that our configurations will not be volatile.
   > **Warning**  
   > Mounting the Docker socket gives the container full control over the host Docker daemon. This can pose security risks—only do this in trusted environments.

   ```
   docker run -d -p 8080:8080 -p 50000:50000 `
   --name advance_even_when_alone `
   -v //var/run/docker.sock:/var/run/docker.sock `
   -v jenkins_home:/var/jenkins_home `
   jenkins/jenkins:21
   ```
   > **Note**  
   > The backticks (`) at the end of each line in the docker run command are for PowerShell line continuation.  
   > If you are using bash or another shell, replace the backticks with backslashes (\\) or write the command on a single line.

   
2. Enter the container from powershell (or from container's  "Exec" tab on Docker Desktop)

   ```
   docker exec -u 0 -it advance_even_when_alone bash
   ```

3. Install Docker CLI

   ```
   apt-get update
   apt-get install -y docker.io
   exit
   ```
