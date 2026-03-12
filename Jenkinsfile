pipeline {
    agent any

    tools {
        nodejs 'Node'
    }

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/amal4567/calculator-app.git'
            }
        }

        stage('Install') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build') {
            steps {
                bat 'echo Build success'
            }
        }
    }

    post {
        success {
            echo 'Bravo, déploiement réussi !'
        }
    }
}