pipeline {
    agent any

    tools {
        nodejs 'node'
    }

    stages {
        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Start app') {
            steps {
                bat 'node serveur.js'
            }
        }
    }
}