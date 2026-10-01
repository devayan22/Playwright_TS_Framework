/*  The first part just checks Jenkins connected to Github Repo or not
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Verify Workspace') {
            steps {
                bat 'dir'
            }
        }
    }
}
*/

pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'docker compose up --build'
            }
        }
    }
}