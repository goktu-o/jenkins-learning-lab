pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Start Server') {
            steps {
                sh 'npm start &'
                echo 'Server started. You can add deployment or further steps here.'
            }
        }
    }
}
